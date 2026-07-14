// IndexNow ping - מדווח לבינג (ומנועים תואמים) על עדכוני תוכן מיד אחרי deploy.
// שימוש: npm run indexnow            -> שולח את כל ה-URLs מה-sitemap
//        npm run indexnow -- /shiatsu /blog/shiatsu   -> שולח נתיבים ספציפיים
const HOST = "adishalev.co.il";
const KEY = "1573bb0d7df451426dd567ffb39ff90a";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function getUrls() {
  const args = process.argv.slice(2);
  if (args.length) {
    return args.map((p) => `https://${HOST}${p.startsWith("/") ? p : "/" + p}`);
  }
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const urlList = await getUrls();
if (!urlList.length) {
  console.error("No URLs found to submit");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs, status ${res.status} ${res.statusText}`);
if (!res.ok && res.status !== 202) process.exit(1);
