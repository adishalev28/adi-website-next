import ServiceLayout from "@/components/ServiceLayout";
import Section from "@/components/Section";
import ServiceFAQ from "@/components/ServiceFAQ";
import MagnifyImage from "@/components/MagnifyImage";
import WaSvg from "@/components/WaSvg";
import { C, WA_URL } from "@/lib/constants";
import { MedicalServiceSchema, BreadcrumbSchema, HowToSchema, FAQPageSchema } from "@/components/SchemaMarkup";

const FAQ_ITEMS = [
  { q: "האם דיקור סיני כואב?", a: "המחטים דקיקות מאוד - דקות פי 10 ממחט הזרקה רגילה. נקודות מסוימות יכולות לעקצץ בהתחלה כשמכניסים את המחט, וחלק מהנקודות כמעט לא יורגשו. התחושה חולפת מהר ורוב המטופלים מרגישים הרגעה עמוקה במהלך הטיפול." },
  { q: "כמה טיפולי דיקור צריך?", a: "מצבים חריפים כמו כאב גב חד יכולים להשתפר תוך 3-5 טיפולים. מצבים כרוניים דורשים בדרך כלל 8-12 טיפולים. בטיפול הראשון נקבע יחד תוכנית מותאמת." },
  { q: "האם דיקור סיני מוכר על ידי קופות החולים?", a: "דיקור סיני מוכר ברפואה המשלימה. אצלי בקליניקה הפרטית הטיפולים הם תשלום ישיר ולא דרך הקופה. אם יש לכם ביטוח בריאות פרטי באחת מחברות הביטוח (כמו מגדל, הראל, הפניקס וכדומה) עם כיסוי לרפואה משלימה - ייתכן שתקבלו החזר חלקי לפי תנאי הפוליסה. שווה לבדוק עם חברת הביטוח שלכם." },
  { q: "האם יש תופעות לוואי?", a: "דיקור סיני נחשב לטיפול בטוח מאוד כשמבוצע על ידי מטפל מוסמך. לעיתים נדירות עשוי להופיע סימן קל במקום הדקירה, שנעלם תוך ימים." },
];

export const metadata = {
  title: "דיקור סיני בראשון לציון | עדי שלו - 37 המלצות 5 כוכבים",
  description: "דיקור סיני בראשון לציון - הקלה אמיתית על כאבי גב, צוואר, מיגרנות, חרדה ושינה. שיטות מאסטר דונג וד״ר טאן. 37 ביקורות 5 כוכבים, מטפל משנת 2016. תיאום בוואטסאפ.",
  keywords: [
    "דיקור סיני",
    "דיקור סיני בראשון לציון",
    "טיפול בדיקור",
    "דיקור לכאבי גב",
    "דיקור לחרדה",
    "שיטת דונג",
    "שיטת ד״ר טאן",
    "רפואה סינית",
    "עדי שלו",
  ],
  alternates: { canonical: "https://adishalev.co.il/dikur-sini" },
  openGraph: {
    title: "דיקור סיני בראשון לציון | עדי שלו - 37 המלצות 5 כוכבים",
    description: "טיפול דיקור סיני מותאם. שיטות מאסטר דונג וד״ר טאן. הקלה על כאב, מתח וחרדה. 37 ביקורות 5 כוכבים, מטפל משנת 2016.",
    url: "https://adishalev.co.il/dikur-sini",
    locale: "he_IL",
    type: "article",
  },
};

const OTHER_SERVICES = [
  { label: "שיאצו", href: "/shiatsu" },
  { label: "כוסות רוח", href: "/cupping" },
  { label: "צמחי מרפא סיניים", href: "/herbs" },
];

export default function AcupuncturePage() {
  return (
    <>
      <MedicalServiceSchema
        name="דיקור סיני"
        alternateName="Acupuncture"
        description="טיפול דיקור סיני מותאם אישית בראשון לציון. אבחון מעמיק, גישה הוליסטית, הקלה על כאב ואיזון הגוף והנפש."
        url="https://adishalev.co.il/dikur-sini"
      />
      <HowToSchema
        name="מה קורה בטיפול דיקור סיני?"
        description="תהליך טיפול דיקור סיני מהשלב הראשון ועד הסיום — מה לצפות בביקור בקליניקה של עדי שלו בראשון לציון."
        totalTime="PT60M"
        steps={[
          { name: "שיחת אבחון", text: "שיחה מקיפה על הבעיה, ההיסטוריה הרפואית, אורח החיים, שינה ותזונה. כ-15 דקות." },
          { name: "אבחון ברפואה סינית", text: "בדיקת דופק סיני ולשון, מישוש נקודות רגישות באזורים הרלוונטיים." },
          { name: "הטיפול עצמו", text: "החדרת מחטים דקיקות לנקודות ספציפיות בגוף. המחטים נשארות כ-20–30 דקות. רוב המטופלים לא מרגישים כאב." },
          { name: "מנוחה ואיזון", text: "זמן מנוחה עם המחטים — רבים נרדמים. הגוף מתחיל את תהליך הריפוי." },
          { name: "סיכום והמלצות", text: "הוצאת המחטים, סיכום הטיפול והמלצות לשמירה על התוצאות — תזונה, תרגילים, מתיחות." },
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "דף הבית", url: "https://adishalev.co.il" },
        { name: "דיקור סיני", url: "https://adishalev.co.il/dikur-sini" },
      ]} />
      <FAQPageSchema items={FAQ_ITEMS} />
    <ServiceLayout otherServices={OTHER_SERVICES}>
      {/* Hero */}
      <section style={{
        minHeight: "50vh", position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        backgroundImage: "url(/adi-acupuncture.jpg)",
        backgroundSize: "cover", backgroundPosition: "center 30%",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(44,42,38,0.6) 0%, rgba(44,42,38,0.4) 50%, rgba(44,42,38,0.8) 100%)",
        }} />
        <div style={{
          position: "relative", textAlign: "center", padding: "120px 24px 80px",
          maxWidth: "700px",
        }}>
          <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", letterSpacing: "2px", marginBottom: "12px" }}>
            ✦ עדי שלו  - רפואה סינית ✦
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 6vw, 52px)", fontWeight: 900,
            color: "white", margin: "0 0 16px", lineHeight: 1.2,
          }}>
            דיקור סיני בראשון לציון
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            טיפול מותאם אישית המשלב אבחון מעמיק עם גישה הוליסטית  - להקלה על כאב, שיפור הבריאות ואיזון הגוף והנפש
          </p>
        </div>
      </section>

      {/* מה זה דיקור סיני  - עם תמונה */}
      <Section bg={C.cream}>
        <div className="acu-about" style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 340px", gap: "40px", alignItems: "center" }}>
          <div>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              על הטיפול
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
              מה זה דיקור סיני?
            </h2>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              דיקור סיני (אקופונקטורה) הוא שיטת טיפול עתיקה שמקורה ברפואה הסינית המסורתית, עם היסטוריה של אלפי שנים. השיטה מבוססת על התפיסה שבגוף קיימת מערכת של ערוצי אנרגיה (מרידיאנים) שדרכם זורמת אנרגיית החיים  - צ׳י. כאשר הזרימה נחסמת או אינה מאוזנת, נוצרים כאבים ובעיות בריאותיות.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              בטיפול דיקור סיני, המטפל מחדיר מחטים דקיקות (דקות בהרבה ממחט רגילה) לנקודות ספציפיות על הגוף. המחטים מעוררות את מנגנוני הריפוי הטבעיים של הגוף, משחררות חסימות ומשפרות את זרימת הדם והאנרגיה.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0" }}>
              בקליניקה שלי בראשון לציון, כל טיפול דיקור מותאם אישית למצבו של המטופל. הטיפול הראשון כולל אבחון מעמיק - שיחה, בדיקת דופק ולשון - שעל בסיסו נבנית תוכנית טיפול ייחודית.
            </p>
          </div>
          <MagnifyImage src="/acupuncture-treatment.jpg" alt="טיפול דיקור סיני בקליניקה בראשון לציון - מחטים דקיקות על היד" />
        </div>
      </Section>

      {/* למי מתאים */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            למי מתאים דיקור סיני?
          </h2>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 24px" }}>
            דיקור סיני מתאים למגוון רחב של מצבים בריאותיים. ארגון הבריאות העולמי (WHO) מכיר בדיקור כטיפול יעיל עבור עשרות מצבים רפואיים, ביניהם:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
            {[
              "כאבי גב וצוואר", "מיגרנות וכאבי ראש", "סיאטיקה",
              "כאבי מפרקים וברכיים", "כתף קפואה", "מתח נפשי וחרדה",
              "בעיות שינה ונדודי שינה", "בעיות עיכול", "עייפות כרונית",
              "איזון הורמונלי", "תמיכה בפריון", "כאבי מחזור",
            ].map(c => (
              <span key={c} style={{
                background: "white", border: `1.5px solid ${C.sage}30`,
                color: C.bark, padding: "8px 18px", borderRadius: "50px",
                fontSize: "14px", fontWeight: 600,
              }}>{c}</span>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: C.barkLight, lineHeight: 1.8 }}>
            לא מצאתם את מה שאתם מחפשים? דיקור סיני יכול לעזור גם במצבים רבים נוספים. צרו קשר ונבדוק יחד.
          </p>
        </div>
      </Section>

      {/* מה אומר המדע? */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            מה אומר המדע על דיקור סיני?
          </h2>
          <div style={{
            background: "white", borderRadius: "16px", padding: "32px",
            borderRight: `4px solid ${C.sage}`,
            boxShadow: "0 2px 16px rgba(44,42,38,0.06)",
          }}>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 20px" }}>
              דיקור סיני נחקר בהרחבה במחקר המדעי המודרני ונמצא יעיל במגוון מצבים:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "\u{1F3DB}\uFE0F", text: "ארגון הבריאות העולמי (WHO) מכיר בדיקור סיני כטיפול יעיל ליותר מ-100 מצבים רפואיים, כולל כאב כרוני, מיגרנות ובחילות." },
                { icon: "\u{1F52C}", text: "מחקרים הראו שדיקור מגרה שחרור אנדורפינים  - משככי כאבים טבעיים של הגוף  - ומשפר את זרימת הדם באופן מדיד." },
                { icon: "\u{1F4CA}", text: "מטא-אנליזות גדולות מצאו שדיקור יעיל יותר מפלצבו בטיפול בכאב כרוני, כאבי גב תחתון וכאבי ראש." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "22px", flexShrink: 0, lineHeight: 1.4 }}>{item.icon}</span>
                  <p style={{ fontSize: "15px", color: C.barkLight, lineHeight: 1.8, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* איך הטיפול נראה  - טיימליין */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 32px" }}>
            איך נראה טיפול דיקור סיני בקליניקה?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", position: "relative" }}>
            {[
              { num: "1", title: "אבחון מעמיק", text: "בפגישה הראשונה מתבצע אבחון מקיף: שיחה על ההיסטוריה הרפואית, בדיקת דופק סיני ובדיקת לשון. האבחון מאפשר להבין את שורש הבעיה ולא רק את התסמינים." },
              { num: "2", title: "הטיפול עצמו", text: "הטיפול נמשך כשעה ויכול לכלול שילוב של כלים מהרפואה הסינית. המחטים דקיקות ורוב המטופלים מרגישים רק תחושה קלה של עקצוץ ונכנסים להרפיה עמוקה." },
              { num: "3", title: "מעקב והתאמה", text: "בסוף כל טיפול נבדוק התקדמות, ובכל פגישה הטיפול מותאם מחדש לפי המצב העדכני. סדרת טיפולים טיפוסית כוללת 5-10 מפגשים." },
            ].map((step, idx, arr) => (
              <div key={step.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start", position: "relative", paddingBottom: idx < arr.length - 1 ? "32px" : "0" }}>
                {/* קו אנכי */}
                {idx < arr.length - 1 && (
                  <div style={{
                    position: "absolute", right: "19px", top: "44px",
                    width: "2px", height: "calc(100% - 44px)",
                    background: `linear-gradient(to bottom, ${C.sage}, ${C.sage}30)`,
                  }} />
                )}
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: C.sage, color: "white", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "18px", fontWeight: 800, flexShrink: 0,
                  position: "relative", zIndex: 1,
                  boxShadow: "0 2px 8px rgba(122,139,106,0.3)",
                }}>{step.num}</div>
                <div style={{ background: "white", borderRadius: "16px", padding: "20px 24px", flex: 1, boxShadow: "0 2px 12px rgba(44,42,38,0.05)" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: C.bark, margin: "0 0 8px" }}>{step.title}</h3>
                  <p style={{ fontSize: "15px", color: C.barkLight, lineHeight: 1.8, margin: 0 }}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* סיפורי הצלחה - מקרים מהקליניקה */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{
              color: C.gold,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "3px",
              marginBottom: "12px",
              textTransform: "uppercase",
            }}>
              ✦ מקרים מהקליניקה ✦
            </div>
            <h2 style={{
              fontSize: "32px",
              fontWeight: 800,
              color: C.bark,
              margin: "0 0 12px",
              lineHeight: 1.3,
            }}>
              סיפור אמיתי מהקליניקה
            </h2>
            <p style={{ fontSize: "15px", color: C.barkLight, margin: 0, fontStyle: "italic" }}>
              שמות וזיהוי שונו לשמירה על פרטיות
            </p>
          </div>

          <article style={{
            background: "white",
            borderRadius: "20px",
            padding: "40px 36px",
            boxShadow: "0 6px 32px rgba(44,42,38,0.08)",
            border: `1px solid ${C.sage}20`,
          }}>
            <div style={{
              display: "inline-block",
              background: `${C.sage}15`,
              color: C.sageDark,
              fontSize: "13px",
              fontWeight: 700,
              padding: "6px 14px",
              borderRadius: "20px",
              marginBottom: "16px",
            }}>
              מ&apos;, בת 30, עובדת בעבודה שוחקת
            </div>

            <h3 style={{
              fontSize: "22px",
              fontWeight: 800,
              color: C.bark,
              margin: "0 0 16px",
              lineHeight: 1.4,
            }}>
              כאבי ראש/מיגרנות כרוניים שניהלו את החיים שלה
            </h3>

            <div style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9 }}>
              <p style={{ margin: "0 0 16px" }}>
                מ&apos; הגיעה אליי אחרי תקופה ארוכה של כאבי ראש כרוניים, ספציפית באזור הרקות. הם הפכו לחלק מהיומיום שלה. בפגישה הראשונה היא סיפרה לי שהם ניהלו את החיים שלה. היא ביטלה מפגשים עם חברים, הפסיקה לצאת בערב, התחילה להסתגר בבית. בעבודה (שוחקת ועמוסה).
              </p>

              <p style={{ margin: "0 0 16px" }}>
                באבחון הסיני זיהיתי דפוס של סטגנציית צ&apos;י של הכבד (Liver Qi Stagnation) עם השפעה על מרידיאן ה-Gallbladder. דפוס קלאסי של אישה צעירה בלחץ מתמשך. התסמינים הנלווים סייעו בכיוון: ירידה בתיאבון, קושי להירדם, רגישות לרעש.
              </p>

              <h4 style={{
                fontSize: "18px",
                fontWeight: 800,
                color: C.bark,
                margin: "28px 0 12px",
                lineHeight: 1.4,
              }}>
                ועכשיו לחלק שמפתיע אנשים:
              </h4>

              <p style={{ margin: "0 0 16px" }}>
                הנקודה הכי טובה שעבדתי איתה לכאבים ברקות - לא נמצאת ברקות עצמן. היא בכלל נמצאת <strong>בצד הרגל, מעל הברך</strong>. כן, ברגל. אישה עם כאב בראש, והפתרון עובר דרך הרגל.
              </p>

              <p style={{ margin: "0 0 16px" }}>
                זה אחד הדברים הכי מרתקים ברפואה הסינית: <strong>המרידיאנים מקשרים בין אזורים שלא נראים קשורים פיזית.</strong> מרידיאן ה-Gallbladder, למשל, עובר בצד הראש (בדיוק באזור הרקות), יורד דרך הצוואר, השכמות, הצדדים של הגוף, ועד לרגליים. כשיש חסימה במרידיאן, הכאב מופיע במקום אחד אבל הפתרון נמצא במקום אחר לגמרי.
              </p>

              <p style={{ margin: "0 0 16px" }}>
                באותה צורה: כאבי גב תחתון רבים מטופלים דרך נקודות בכפות הידיים. כאבי ראש קדמיים - דרך נקודה ברגל. בעיות עיכול - דרך נקודות בידיים וברגליים. <strong>הכל מחובר</strong>, ולפעמים הדרך הקצרה ביותר לפתרון עוברת במסלול שנראה לא הגיוני בכלל לעין מערבית.
              </p>

              <p style={{ margin: "0 0 16px" }}>
                זו הסיבה שבטיפול הראשון רבים מופתעים. &quot;אבל הכאב כאן,&quot; הם אומרים ומצביעים על הראש. ואני אומר: &quot;את ההשפעה אתה תרגיש בראש, הטיפול נעשה מהרגל, וגם זה יכול להשתנות תלוי מקרה&quot;.
              </p>

              <h4 style={{
                fontSize: "18px",
                fontWeight: 800,
                color: C.bark,
                margin: "28px 0 12px",
              }}>
                הטיפול
              </h4>
              <p style={{ margin: "0 0 16px" }}>
                דיקור ממוקד עם מעט מחטים בנקודות מדויקות - גישה של שיטת מאסטר דונג שבה אני מתמחה. הנקודה ברגל הייתה החלק המרכזי, יחד עם נקודות נוספות לאיזון מרידיאן ה-Gallbladder ופיזור סטגנציית הכבד.
              </p>

              <h4 style={{
                fontSize: "18px",
                fontWeight: 800,
                color: C.bark,
                margin: "28px 0 12px",
              }}>
                התוצאות
              </h4>
              <p style={{ margin: "0 0 16px" }}>
                אצל מ&apos; הגוף הגיב מהר במיוחד. כבר אחרי הטיפול הראשון היא הרגישה הקלה משמעותית בכאבי הראש - וזה הלך והשתפר מטיפול לטיפול. אחרי 3-4 טיפולים היא כבר הרגישה הרבה יותר טוב.
              </p>

              <div style={{
                background: `${C.gold}15`,
                borderRight: `4px solid ${C.gold}`,
                padding: "16px 20px",
                borderRadius: "8px",
                margin: "0 0 16px",
              }}>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.8 }}>
                  <strong>חשוב לי לציין:</strong> זה לא תמיד ככה. כל מטופל מגיב בקצב משלו. לפעמים השיפור מורגש מהטיפול הראשון (כמו במקרה של מ&apos;), לפעמים הוא הדרגתי יותר ולוקח כמה טיפולים עד שמרגישים אותו.
                </p>
              </div>

              <p style={{ margin: "0" }}>
                מה ששימח אותי בטיפול לא היה שכאבי הראש הפסיקו בלבד. השינוי היה עמוק יותר. התיאבון חזר. השמחה חזרה. הביטחון לצאת למפגשים חזר. &quot;זה הפסיק לנהל אותי&quot;, היא אמרה לי בטיפול האחרון.
              </p>
            </div>
          </article>
        </div>
      </Section>

      {/* שאלות נפוצות */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            שאלות נפוצות על דיקור סיני
          </h2>
          <ServiceFAQ items={FAQ_ITEMS} />
        </div>
      </Section>

      {/* CTA ביניים */}
      <section style={{ background: C.sand, padding: "48px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "18px", fontWeight: 600, color: C.bark, margin: "0 0 20px" }}>
          רוצים לנסות דיקור סיני בראשון לציון?
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "linear-gradient(135deg, #34A853, #2D9248)",
          color: "white", padding: "14px 36px", borderRadius: "50px",
          fontSize: "15px", fontWeight: 700, textDecoration: "none",
          boxShadow: "0 4px 24px rgba(52,168,83,0.35)",
        }}>
          <WaSvg size={20} />
          לתיאום תור
        </a>
      </section>
    </ServiceLayout>
    </>
  );
}
