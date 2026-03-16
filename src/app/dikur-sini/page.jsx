import ServiceLayout from "@/components/ServiceLayout";
import Section from "@/components/Section";
import ServiceFAQ from "@/components/ServiceFAQ";
import MagnifyImage from "@/components/MagnifyImage";
import WaSvg from "@/components/WaSvg";
import { C, WA_URL } from "@/lib/constants";
import { MedicalServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata = {
  title: "דיקור סיני בראשון לציון | עדי שלו - רפואה סינית",
  description: "טיפול דיקור סיני מותאם אישית בראשון לציון. אבחון מעמיק, גישה הוליסטית, הקלה על כאב ואיזון הגוף והנפש. קבעו תור עכשיו.",
};

const OTHER_SERVICES = [
  { label: "שיאצו", href: "/shiatsu/" },
  { label: "כוסות רוח", href: "/cupping/" },
  { label: "צמחי מרפא סיניים", href: "/herbs/" },
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
      <BreadcrumbSchema items={[
        { name: "דף הבית", url: "https://adishalev.co.il" },
        { name: "דיקור סיני", url: "https://adishalev.co.il/dikur-sini" },
      ]} />
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
              בקליניקה של עדי שלו בראשון לציון, כל טיפול דיקור מותאם אישית למצבו של המטופל. הטיפול הראשון כולל אבחון מעמיק  - שיחה, בדיקת דופק ולשון  - שעל בסיסו נבנית תוכנית טיפול ייחודית.
            </p>
          </div>
          <MagnifyImage src="/acupuncture-treatment.jpg" alt="טיפול דיקור סיני בקליניקה של עדי שלו בראשון לציון  - מחטים דקיקות על היד" />
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
              { num: "2", title: "הטיפול עצמו", text: "המטפל מחדיר מחטים דקיקות לנקודות שנבחרו במיוחד עבורכם. רוב המטופלים מרגישים רק תחושה קלה של עקצוץ. המחטים נשארות כ-20-30 דקות בזמן שאתם נחים." },
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

      {/* שאלות נפוצות */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            שאלות נפוצות על דיקור סיני
          </h2>
          <ServiceFAQ items={[
            { q: "האם דיקור סיני כואב?", a: "רוב המטופלים מופתעים לגלות שדיקור כמעט לא כואב. המחטים דקות מאוד  - דקות פי 10 ממחט הזרקה רגילה. רוב האנשים מרגישים לכל היותר עקצוץ קל." },
            { q: "כמה טיפולי דיקור צריך?", a: "מצבים חריפים כמו כאב גב חד יכולים להשתפר תוך 3-5 טיפולים. מצבים כרוניים דורשים בדרך כלל 8-12 טיפולים. בטיפול הראשון נקבע יחד תוכנית מותאמת." },
            { q: "האם דיקור סיני מוכר על ידי קופות החולים?", a: "חלק מקופות החולים מציעות השתתפות ברפואה משלימה במסגרת ביטוחים משלימים. מומלץ לבדוק עם הקופה שלכם." },
            { q: "האם יש תופעות לוואי?", a: "דיקור סיני נחשב לטיפול בטוח מאוד כשמבוצע על ידי מטפל מוסמך. לעיתים נדירות עשוי להופיע סימן קל במקום הדקירה, שנעלם תוך ימים." },
          ]} />
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
