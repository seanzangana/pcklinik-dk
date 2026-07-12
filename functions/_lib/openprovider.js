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

// TLDs offered on the /domaener/ search. OpenProvider's check endpoint
// accepts any extension it resells, so adding more here is a one-line
// change — no other code depends on this specific list.
//
// Deliberately generic TLDs only — no country-code TLDs (.de, .fr, .us,
// .uk, .no, etc.) beyond .dk itself (the core Danish market). Many ccTLDs
// require local presence / residency documentation to actually register,
// which surfaces as friction for Shan at manual-registration time rather
// than a checkout failure (registration is manual, not automated here) —
// but it's still avoidable friction, so left out for now. .io/.ai/.co/
// .me/.tv/.cc are technically ccTLDs too but are sold and used globally as
// generic TLDs with no residency requirement, so they're included.
export const SUPPORTED_TLDS = [
  'dk', 'com', 'net', 'org', 'eu',
  'info', 'biz', 'name', 'pro', 'mobi',
  'io', 'ai', 'co', 'me', 'tv', 'cc',
  'app', 'dev', 'xyz', 'online', 'store', 'tech', 'site', 'shop', 'club',
  'live', 'cloud', 'page', 'agency', 'digital', 'company', 'email', 'host',
  'link', 'media', 'news', 'software', 'solutions', 'studio', 'support',
  'team', 'tools', 'top', 'website', 'work', 'world', 'zone', 'fun', 'life',
  'art', 'design', 'style', 'consulting', 'finance', 'group', 'legal',
  'ltd', 'management', 'market', 'marketing', 'services', 'systems',
  'technology',
];

async function callOpenProviderCheck(env, domains) {
  let token = await getOpenProviderToken(env);

  async function call(bearer) {
    return fetch(`${OP_BASE}/v1beta/domains/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${bearer}` },
      body: JSON.stringify({ domains, with_price: true }),
    });
  }

  let res = await call(token);
  if (res.status === 401) {
    // Token expired/invalid — force a fresh login and retry once.
    cachedToken = null;
    token = await loginToOpenProvider(env);
    res = await call(token);
  }
  if (!res.ok) {
    throw new Error(`OpenProvider domain check failed (HTTP ${res.status}).`);
  }
  const data = await res.json();
  const results = data && data.data && Array.isArray(data.data.results) ? data.data.results : null;
  if (!results) {
    throw new Error('OpenProvider domain check returned no results.');
  }
  return results;
}

function priceFromResult(result) {
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

// Single-TLD lookup — used by create-checkout-session.js to re-derive the
// exact price for the one domain being purchased. Never trusts a price
// sent by the browser.
// domainName: label only (no dot), e.g. "pcklinik-webshop"
// tld: one of SUPPORTED_TLDS
// Returns { available: boolean, price_dkk: number|null, price_incl_vat_dkk: number|null }
export async function checkDomainAndPrice(env, domainName, tld) {
  const results = await callOpenProviderCheck(env, [{ name: domainName, extension: tld }]);
  const result = results[0];
  if (!result) {
    throw new Error('OpenProvider domain check returned no result.');
  }
  return priceFromResult(result);
}

// Multi-TLD lookup — used by check-domain.js to power the search bar,
// checking every supported TLD for one name in a SINGLE OpenProvider
// request. Returns results in the same order as `tlds`.
// Returns [{ tld, available, price_dkk, price_incl_vat_dkk }, ...]
export async function checkDomainAcrossTlds(env, domainName, tlds) {
  const domains = tlds.map((tld) => ({ name: domainName, extension: tld }));
  const results = await callOpenProviderCheck(env, domains);

  return tlds.map((tld, i) => {
    // Prefer matching by extension/name if OpenProvider echoes them back;
    // fall back to positional matching (same order as the request) since
    // we don't have confirmed docs on the batch response shape.
    const match =
      results.find((r) => (r.extension === tld || r.domain === `${domainName}.${tld}`)) || results[i];
    if (!match) {
      return { tld, available: false, price_dkk: null, price_incl_vat_dkk: null, error: true };
    }
    try {
      return { tld, ...priceFromResult(match) };
    } catch {
      return { tld, available: false, price_dkk: null, price_incl_vat_dkk: null, error: true };
    }
  });
}

export function isValidTld(tld) {
  return SUPPORTED_TLDS.includes(tld);
}

// Basic domain-label validation: letters/digits/hyphens, 1-63 chars,
// doesn't start/end with a hyphen. Rejects anything containing a dot so a
// user can't smuggle in a different TLD or path traversal-ish input.
export function isValidDomainLabel(name) {
  return typeof name === 'string' && /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(name);
}
