# CLAUDE.md — אתר הקליניקה (adishalev.co.il)

## מה זה
אתר קליניקה לרפואה סינית — דיקור, שיאצו, כוסות רוח, צמחי מרפא. SEO-optimized, PWA, RTL עברית.

## Tech Stack
Next.js 16 + React 19 + TypeScript + Tailwind 4 + PostCSS | Font: Heebo | Deploy: Vercel (auto-deploy)

## Commands
```bash
npm run dev    # localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

## מבנה
```
src/
├── app/
│   ├── layout.jsx          # Root: GTM, GA, schema, PWA
│   ├── page.jsx            # Home (Hero+Stats+Reviews+Services+About+FAQ+Contact)
│   ├── sitemap.js          # XML sitemap (27 URLs)
│   ├── not-found.jsx       # 404
│   ├── blog/               # 14 מאמרי SEO
│   │   ├── page.jsx        # Blog index
│   │   ├── anxiety/ back-pain/ cupping-therapy/ digestive-issues/
│   │   ├── facial-paralysis/ migraines/ neck-shoulder-pain/ sciatica/
│   │   ├── sleep/ what-is-acupuncture/ faq-complete/ back-pain-guide/
│   ├── dikur-sini/         # דף שירות דיקור
│   ├── shiatsu/            # דף שירות שיאצו
│   ├── cupping/            # דף שירות כוסות רוח
│   ├── herbs/              # דף שירות צמחי מרפא
│   ├── privacy/            # מדיניות פרטיות
│   └── accessibility/      # הצהרת נגישות
├── components/ (27 קומפוננטות)
│   ├── Hero / Stats / Reviews / Services / About / FAQ / Contact / Footer
│   ├── Navbar / FloatingWA / CookieConsent / AccessibilityWidget
│   ├── ArticleLayout / ServiceLayout / LegalPageLayout / Section
│   ├── SchemaMarkup / ScrollToHash / MagnifyImage / PhotoLightbox
│   ├── ClinicPhotos / ContactCTA / FaqAccordion / ServiceFAQ
│   ├── ForWhom / WeeklyTreatment / WaSvg
├── hooks/useFadeIn.js      # Intersection Observer animation
├── lib/constants.js        # Color palette + WhatsApp (972528029031)
└── styles/globals.css      # Heebo font, Tailwind, RTL, animations
```

## Config
| קובץ | תפקיד |
|------|-------|
| `next.config.mjs` | Images: Google profiles + Supabase CDN |
| `postcss.config.mjs` | Tailwind plugin |
| `jsconfig.json` | Path alias: `@/*` → `./src/*` |
| `public/manifest.json` | PWA (theme #6B7A5A, standalone) |
| `public/robots.txt` | Allow all bots (GPTBot, ClaudeBot) |
| `public/sw.js` | Service Worker (offline) |

## Analytics
- GTM: `GTM-MDLT6NWQ`
- GA: `G-MRX2Q982VW`

## Schema Markup
`SchemaMarkup.jsx` exports: LocalBusiness, FAQPage, WebSite, MedicalService, Breadcrumb, HowTo

## כללי כתיבת תוכן (חובה!)
- **אסור לציין מחירים** — לא בפוסטים, לא במאמרים, לא ב-FAQ. לא מספרים, לא טווחים.
- **מקף רגיל בלבד** — לא em dash (—)
- **גוף ראשון** — "בקליניקה שלי", "אני מטפל" (לא "של עדי שלו", לא "אנחנו")
- **Alt texts** — "בקליניקה בראשון לציון" (לא "של עדי שלו")
- **דיקור וכאב** — לא לכתוב "לא כואב". חלק מהנקודות עוקצות בהתחלה
- **שיטת דונג** — לבעיות פנימיות (חרדה, שינה, עיכול)
- **שיטת ד"ר טאן** — לכאבים (גב, צוואר, כתפיים)
- **משך טיפול** — "כשעה" + שילוב כלים מהרפואה הסינית

## 🎯 SEO STANDARD — חובה לכל דף/מאמר חדש

**המטרה: מקום ראשון בגוגל ללא Google Ads.** הניסיון של 24.4.2026 הראה שמטאדאטה חלשה = מיקום 3 עם 0% CTR.

### 1. Metadata של דף חדש (חובה בכל `page.jsx` בתוך app/)

```js
export const metadata = {
  title: "מילת מפתח ראשית + מיקום | שם הברנד",     // לדוגמה: "דיקור סיני לכאבי גב | עדי שלו"
  description: "מילת מפתח ראשית בתחילה. תועלת. שיטת דונג/טאן. תיאום תור בוואטסאפ.", // 150-160 תווים
  keywords: ["מילה1", "מילה2 + מיקום", "שם הברנד"],
  alternates: { canonical: "https://adishalev.co.il/SLUG" },
  openGraph: {
    title: "קצר+חזק",
    description: "1 משפט",
    url: "https://adishalev.co.il/SLUG",
    locale: "he_IL",
    type: "article",  // או "website" לדפי נחיתה
    images: [{ url: "/IMAGE.jpg", width: 1200, height: 630, alt: "תיאור" }],
  },
};
```

### 2. מבנה Heading (חובה)
- **H1 אחד בלבד** — חייב להכיל את מילת המפתח הראשית + אפשר גם ברנד
- **H2-H4** — מילות מפתח משניות / long-tail queries
- לדוגמה H1 של מאמר: "דיקור סיני לכאבי גב בראשון לציון"

### 3. Schema חובה לכל מאמר
```jsx
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
<ArticleSchema
  title="..." description="..." url="..." 
  datePublished="2026-04-24" 
  image="https://adishalev.co.il/IMAGE.jpg"
/>
<BreadcrumbSchema items={[
  { name: "בית", url: "https://adishalev.co.il/" },
  { name: "בלוג", url: "https://adishalev.co.il/blog" },
  { name: "הכותרת", url: "https://adishalev.co.il/blog/SLUG" },
]} />
```

לדפי שירות: להשתמש ב-`MedicalServiceSchema` + `HowToSchema` (ראה dikur-sini/page.jsx).

### 4. לעדכן `src/app/sitemap.js`
להוסיף את ה-URL החדש:
```js
{ url: `${baseUrl}/blog/NEW-SLUG`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 }
```

### 5. חובה אחרי deploy
1. להמתין ~2 דקות שוורסל יעלה
2. לפתוח GSC: `https://search.google.com/search-console?resource_id=https%3A%2F%2Fadishalev.co.il%2F`
3. בסרגל החיפוש העליון להדביק את ה-URL החדש
4. ללחוץ "הגש בקשה ליצירת אינדקס" (מגבלה ~10/יום)

### 6. Checklist לפני deploy של מאמר
- [ ] `metadata` (title + description + keywords + canonical + og + type: "article")
- [ ] H1 יחיד עם מילת המפתח
- [ ] `ArticleSchema` + `BreadcrumbSchema`
- [ ] פסקה ראשונה מכילה את מילת המפתח הראשית
- [ ] 3+ H2 עם long-tail keywords
- [ ] Internal links ל-2-3 דפי שירות רלוונטיים (dikur-sini/shiatsu/etc)
- [ ] Alt text לכל תמונה ("בקליניקה בראשון לציון")
- [ ] מילים 800+ (Google מעדיף תוכן מעמיק)
- [ ] CTA לוואטסאפ בסוף
- [ ] עדכון ב-sitemap.js
- [ ] אחרי deploy: בקשת אינדקסציה ב-GSC

## כללים טכניים
- RTL + עברית בכל UI
- WhatsApp בלבד ליצירת קשר (אין טפסים)
- `@supabase/supabase-js` מותקן אך לא בשימוש פעיל
- Inline styles (React style objects) + Tailwind classes
- Heebo font + warm earth palette (sage, gold, cream, bark)
