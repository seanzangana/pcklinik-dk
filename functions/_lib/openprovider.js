// Shared OpenProvider auth + live domain pricing helper.
// Used by BOTH functions/api/check-domain.js (price preview) and
// functions/api/create-checkout-session.js (price actually charged).
// Deliberately centralized so the checkout can NEVER trust a price sent by
// the browser — it always recomputes the price itself via this module.

const OP_BASE = 'https://api.openprovider.eu';

// Very small in-memory cache — lives only as long as this Worker isolate
// stays warm. Not persistent, not shared across isolates. Purely a perf
// nicety; every code path below re-authenticates if this is empty/expired.
let cachedToken = null;
let cachedTokenExpiresAt = 0;

async function loginToOpenProvider(env) {
  const username = (env.OPENPROVIDER_USERNAME || '').trim();
  const password = env.OPENPROVIDER_PASSWORD || '';
  if (!username || !password) {
    throw new Error('OpenProvider credentials are not configured (OPENPROVIDER_USERNAME / OPENPROVIDER_PASSWORD missing).');
  }
  const res = await fetch(`${OP_BASE}/v1beta/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    throw new Error(`OpenProvider login failed (HTTP ${res.status}).`);
  }
  const data = await res.json();
  const token = data && data.data && data.data.token;
  if (!token) {
    throw new Error('OpenProvider login response did not include a token.');
  }
  // OpenProvider doesn't document a fixed TTL in the reseller docs we have;
  // be conservative and only reuse the token for 5 minutes before
  // re-authenticating, rather than assuming a long-lived token.
  cachedToken = token;
  cachedTokenExpiresAt = Date.now() + 5 * 60 * 1000;
  return token;
}

async function getOpenProviderToken(env) {
  if (cachedToken && Date.now() < cachedTokenExpiresAt) return cachedToken;
  return loginToOpenProvider(env);
}

// Approximate fallback FX rates, used ONLY if OpenProvider returns a price
// in a currency other than DKK. These are static and should be replaced
// with a live FX source before this is trusted for high-volume sales — for
// tonight's launch volume the spread is immaterial versus the 2x markup.
const FALLBACK_FX_TO_DKK = { DKK: 1, USD: 7.0, EUR: 7.46, GBP: 8.7 };

function roundUpToNearest10(n) {
  return Math.ceil(n / 10) * 10;
}

// domainName: label only (no dot), e.g. "pcklinik-webshop"
// tld: "dk" | "com"
// Returns { available: boolean, price_dkk: number|null }
export async function checkDomainAndPrice(env, domainName, tld) {
  let token = await getOpenProviderToken(env);

  async function callCheck(bearer) {
    return fetch(`${OP_BASE}/v1beta/domains/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${bearer}` },
      body: JSON.stringify({ domains: [{ name: domainName, extension: tld }], with_price: true }),
    });
  }

  let res = await callCheck(token);
  if (res.status === 401) {
    // Token expired/invalid — force a fresh login and retry once.
    cachedToken = null;
    token = await loginToOpenProvider(env);
    res = await callCheck(token);
  }
  if (!res.ok) {
    throw new Error(`OpenProvider domain check failed (HTTP ${res.status}).`);
  }
  const data = await res.json();
  const result = data && data.data && Array.isArray(data.data.results) ? data.data.results[0] : null;
  if (!result) {
    throw new Error('OpenProvider domain check returned no result.');
  }

  const available = result.status === 'free' || result.status === 'available' || result.available === true;
  if (!available) {
    return { available: false, price_dkk: null, price_incl_vat_dkk: null };
  }

  const resellerPrice = result.price && result.price.reseller ? result.price.reseller.price : null;
  const currency = (result.price && result.price.reseller && result.price.reseller.currency) || 'USD';
  if (resellerPrice == null) {
    throw new Error('OpenProvider domain check did not include a reseller price.');
  }

  const fxRate = FALLBACK_FX_TO_DKK[currency] || FALLBACK_FX_TO_DKK.USD;
  const resellerPriceDkk = Number(resellerPrice) * fxRate;

  // Pricing formula (per brief, CORRECTED — ex-VAT display, VAT added at
  // checkout, matching the site's other B2B pricing convention):
  // 1) double the wholesale price
  // 2) round UP to nearest 10 kr — this is the EX-VAT price shown on the page
  // 3) VAT (25%) is added separately, only at Stripe Checkout — never baked
  //    into the price shown to the customer while browsing.
  const doubled = resellerPriceDkk * 2;
  const exVatPriceDkk = roundUpToNearest10(doubled);
  const inclVatPriceDkk = Math.round(exVatPriceDkk * 1.25);

  return { available: true, price_dkk: exVatPriceDkk, price_incl_vat_dkk: inclVatPriceDkk };
}

export function isValidTld(tld) {
  return tld === 'dk' || tld === 'com';
}

// Basic domain-label validation: letters/digits/hyphens, 1-63 chars,
// doesn't start/end with a hyphen. Rejects anything containing a dot so a
// user can't smuggle in a different TLD or path traversal-ish input.
export function isValidDomainLabel(name) {
  return typeof name === 'string' && /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(name);
}
