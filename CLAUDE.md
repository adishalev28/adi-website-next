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

## כללים טכניים
- RTL + עברית בכל UI
- WhatsApp בלבד ליצירת קשר (אין טפסים)
- `@supabase/supabase-js` מותקן אך לא בשימוש פעיל
- Inline styles (React style objects) + Tailwind classes
- Heebo font + warm earth palette (sage, gold, cream, bark)
