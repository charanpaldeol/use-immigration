#!/usr/bin/env node
/**
 * Submit sitemap URLs to IndexNow. Usage: node scripts/submit-indexnow.mjs
 * Requires INDEXNOW_KEY in env (optional; defaults match public/*.txt).
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://usdimmigration.ca";
const KEY =
  process.env.INDEXNOW_KEY ?? "8f3c2a9e1d7046b5a0e8f7c4d2b1a9063e5f7c8d9a0b1c2";

const urls = [
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
];

const host = new URL(SITE_URL).host;
const body = JSON.stringify({
  host,
  key: KEY,
  keyLocation: `${SITE_URL}/${KEY}.txt`,
  urlList: urls,
});

for (const endpoint of [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
]) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body,
  });
  console.log(`${endpoint}: ${res.status} ${res.statusText}`);
}
