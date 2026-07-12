// POST /api/check-domain
// Body: { name: string, tld: "dk" | "com" }
// Returns: { available: boolean, price_dkk: number|null, price_incl_vat_dkk: number|null }
// price_dkk is EX-VAT (this is what's shown on the page, labeled "ekskl.
// moms" per the confirmed pricing decision) — price_incl_vat_dkk is shown
// only as a reference of what will actually be charged at checkout. Never
// returns the raw OpenProvider response or the OpenProvider bearer token.
import { checkDomainAndPrice, isValidTld, isValidDomainLabel } from '../_lib/openprovider.js';

export async function onRequestPost(context) {
  const { request, env } = context;
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  const name = String(body?.name || '').trim().toLowerCase();
  const tld = String(body?.tld || '').trim().toLowerCase();

  if (!isValidDomainLabel(name)) {
    return json({ error: 'Ugyldigt domænenavn.' }, 400);
  }
  if (!isValidTld(tld)) {
    return json({ error: 'Ugyldig endelse — vælg .dk eller .com.' }, 400);
  }

  try {
    const result = await checkDomainAndPrice(env, name, tld);
    return json(result, 200);
  } catch (err) {
    console.error('check-domain error:', err);
    return json({ error: 'Kunne ikke tjekke domænet lige nu. Prøv igen om lidt.' }, 502);
  }
}

export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }
  return onRequestPost(context);
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}
