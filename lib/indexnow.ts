// Purpose: IndexNow URL submission for Bing/Yandex (call after publishing guides).
import { SITE_URL } from "@/lib/site-business";

/** Public key file must exist at `${SITE_URL}/${INDEXNOW_KEY}.txt` with this value as body. */
export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY ?? "8f3c2a9e1d7046b5a0e8f7c4d2b1a9063e5f7c8d9a0b1c2";

const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
] as const;

export const SITEMAP_GUIDE_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/guides`,
  `${SITE_URL}/guides/express-entry-2026`,
  `${SITE_URL}/guides/oinp-2026-niagara`,
  `${SITE_URL}/guides/tr-to-pr-2026`,
  `${SITE_URL}/guides/work-permits-2026`,
  `${SITE_URL}/guides/pr-citizenship-2026`,
  `${SITE_URL}/guides/humanitarian-appeals-2026`,
  `${SITE_URL}/guides/study-permits-2026`,
  `${SITE_URL}/guides/family-sponsorship-2026`,
  `${SITE_URL}/about`,
] as const;

export type IndexNowResult = {
  endpoint: string;
  ok: boolean;
  status: number;
};

export async function submitIndexNow(
  urls: string[] = [...SITEMAP_GUIDE_URLS],
): Promise<IndexNowResult[]> {
  const host = new URL(SITE_URL).host;
  const keyLocation = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation,
    urlList: urls,
  };

  const results: IndexNowResult[] = [];
  for (const endpoint of INDEXNOW_ENDPOINTS) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    results.push({ endpoint, ok: res.ok, status: res.status });
  }
  return results;
}
