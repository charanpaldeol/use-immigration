# Off-site SEO checklist (USD Immigration)

Manual tasks that cannot be completed in the codebase. Work through after each major deploy.

## Google Business Profile (GBP)

- [ ] Claim or verify listing at [Google Business Profile](https://business.google.com)
- [ ] Match **name**, **address**, **phone**, and **hours** to `lib/site-business.ts`
- [ ] Set service areas: Canada-wide + Greater Toronto Area + Niagara Region
- [ ] Add primary category: Immigration consultant (or closest available)
- [ ] Upload office exterior/interior photos (Niagara Falls office)
- [ ] Post monthly updates linking to new guides (e.g. `/guides/study-permits-2026`)
- [ ] Respond to reviews within 48 hours

## Search Console & Bing

- [ ] Verify `https://usdimmigration.ca` in [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap: `https://usdimmigration.ca/sitemap.xml`
- [ ] Verify in [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] After deploy, run `npm run indexnow` (or `POST /api/indexnow` with `INDEXNOW_SECRET` if set)

## Citations & backlinks (local + national)

- [ ] CICC member directory / professional listings (if applicable)
- [ ] Niagara Falls & Ontario chamber / business directories (NAP must match site)
- [ ] Legal/immigration directories: NAP consistent with `4838 Dorchester Rd, Niagara Falls, ON L2E 6N9`
- [ ] Sponsor or contribute guest content on settlement / newcomer blogs (natural links only)
- [ ] Avoid paid link schemes and low-quality directories

## RCIC credentials on-site

- [x] Primary RCIC: Upneet Singh Dhaliwal (R534701) in `lib/site-business.ts` — [CICC register profile](https://register.college-ic.ca/Public-Register-EN/Licensee/Profile.aspx?ID=22167)
- [ ] Ensure advertising complies with [CICC advertising rules](https://college-ic.ca/)

## Monitoring

- [ ] Compare live site to `docs/seo/drift-baseline.json` after releases
- [ ] Track Core Web Vitals in GSC (mobile + desktop)
- [ ] Review GSC coverage for excluded pages (preview URLs should stay noindex)
