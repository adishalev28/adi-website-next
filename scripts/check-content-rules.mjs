// בדיקת כללי תוכן לאתר הקליניקה.
// הרצה:  npm run check:content   (רץ גם דרך npm test, ולכן נתפס בתהליך הדיפלוי)
//
// שני כללים מוחלטים שעדי קבע:
//   1. אסור לציין מחירים באתר, בשום מקום.
//   2. אסור לנקוב במספר טיפולים. את השאלה "כמה טיפולים צריך" שומרים,
//      ועונים עליה בלי מספר - "סדרה קצרה", "סדרה ארוכה יותר".
//
// תדירות מותרת ואינה נבדקת כאן ("פעם בשבוע", "כל 2-4 שבועות") - היא
// מתארת קצב, לא כמות. אם הכלל יתהדק בעתיד, כאן מוסיפים את הדפוס.

import { readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOTS = ["src", "public"];
const EXTENSIONS = new Set([".jsx", ".tsx", ".js", ".ts", ".mdx", ".md", ".txt", ".json"]);
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "marketing"]);

// חריגים מכוונים - כל אחד עם נימוק, כדי שלא "יתוקן" בטעות בעתיד:
//
// 1. reviewsData.js מכיל ציטוטים מילוליים מביקורות גוגל אמיתיות. מטופל
//    שכתב "אחרי 3 טיפולים הרגשתי שינוי" מספר את הסיפור שלו, ועריכת הטקסט
//    שלו תהפוך עדות אמיתית למזויפת. הכלל אוסר על עדי להתחייב למספר,
//    לא על מטופל לתאר את מה שעבר.
// 2. priceRange בסכמה הוא שדה תקני של schema.org לרמת מחיר כללית ("₪₪"),
//    בלי סכום. גוגל מציג אותו, והסרתו פוגעת בסכמה.
const QUOTE_FILES = ["reviewsData.js"];

const RULES = [
  {
    id: "מספר טיפולים (ספרות)",
    re: /\d+\s*(?:[-–]|עד|ל-)?\s*\d*\s*(?:טיפולים|מפגשים|פגישות|סשנים)/g,
  },
  {
    id: "מספר טיפולים (מילים)",
    re: /(?:שני|שתי|שלושה|שלוש|ארבעה|ארבע|חמישה|חמש|שישה|שש|שבעה|שבע|שמונה|תשעה|תשע|עשרה|עשר)\s+(?:טיפולים|מפגשים|פגישות|סשנים)/g,
  },
  {
    id: "מחיר",
    re: /₪|ש"ח|\d+\s*שקל/g,
  },
];

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (EXTENSIONS.has(extname(entry.name))) yield path;
  }
}

const violations = [];
let scanned = 0;

// grep רץ שורה-שורה ולכן מפספס טקסט שמתפצל בין שורות ב-JSX, וגם
// וכרטיסי סטטיסטיקה שבהם המספר והמילה באלמנטים נפרדים. לכן משטחים כל קובץ
// לטקסט רציף - תגיות ורווחים הופכים לרווח אחד - ושומרים מפה חזרה למספר השורה.
function flatten(source) {
  const chars = [];
  const lineOf = [];
  let line = 1;
  let inTag = false;
  let pendingSpace = false;

  for (const ch of source) {
    if (ch.charCodeAt(0) === 10) line++;
    if (ch === "<") { inTag = true; pendingSpace = true; continue; }
    if (ch === ">") { inTag = false; continue; }
    if (inTag) continue;
    if (/\s/.test(ch)) { pendingSpace = true; continue; }
    if (pendingSpace && chars.length) { chars.push(" "); lineOf.push(line); }
    pendingSpace = false;
    chars.push(ch);
    lineOf.push(line);
  }
  return { text: chars.join(""), lineOf };
}

for (const root of ROOTS) {
  for await (const file of walk(root)) {
    scanned++;
    const { text, lineOf } = flatten(readFileSync(file, "utf8"));
    for (const rule of RULES) {
      if (rule.id !== "מחיר" && QUOTE_FILES.some((q) => file.endsWith(q))) continue;
      rule.re.lastIndex = 0;
      let hit;
      while ((hit = rule.re.exec(text)) !== null) {
        const line = lineOf[hit.index] ?? 0;
        const context = text.slice(Math.max(0, hit.index - 40), hit.index + 40);
        if (rule.id === "מחיר" && context.includes("priceRange")) continue;
        violations.push({ file, line, rule: rule.id, text: hit[0].trim() });
      }
    }
  }
}

if (violations.length === 0) {
  console.log(`✓ ${scanned} קבצים נסרקו - אין הפרות של כללי התוכן`);
  process.exit(0);
}

console.error(`✗ נמצאו ${violations.length} הפרות של כללי התוכן:\n`);
for (const v of violations) {
  console.error(`  ${v.file}:${v.line}`);
  console.error(`    הכלל: ${v.rule}`);
  console.error(`    הטקסט: "${v.text}"\n`);
}
console.error("אסור להעלות מחירים או מספרי טיפולים לאתר. לתקן לפני דיפלוי.");
process.exit(1);
