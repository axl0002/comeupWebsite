/* The same lines the app shows: the `quotes` table, read with the public
   anon key, refreshed hourly. A few bundled lines cover a missing env or a
   failed fetch so the page never opens empty. */

export const FALLBACK_QUOTES = [
  "Winners never quit, and quitters never win.",
  "The darkest hour is just before the dawn.",
  "A rising tide lifts all boats.",
  "I came, I saw, I conquered.",
  "The more you sweat in training, the less you bleed in war.",
  "The arrow that flies farthest was pulled back the most.",
];

export async function getQuotes(): Promise<string[]> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return FALLBACK_QUOTES;
  try {
    const res = await fetch(
      `${url}/rest/v1/quotes?select=text&active=eq.true&order=created_at.asc`,
      {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return FALLBACK_QUOTES;
    const rows = (await res.json()) as { text: string }[];
    const texts = rows.map((r) => r.text).filter(Boolean);
    return texts.length ? texts : FALLBACK_QUOTES;
  } catch {
    return FALLBACK_QUOTES;
  }
}
