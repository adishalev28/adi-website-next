import ServiceLayout from "@/components/ServiceLayout";
import Section from "@/components/Section";
import ServiceFAQ from "@/components/ServiceFAQ";
import WaSvg from "@/components/WaSvg";
import { C, WA_URL } from "@/lib/constants";
import { MedicalServiceSchema, BreadcrumbSchema, FAQPageSchema, HowToSchema } from "@/components/SchemaMarkup";

const FAQ_ITEMS = [
  { q: "האם שיאצו כואב?", a: "שיאצו לא אמור לכאוב. הלחיצות עמוקות אבל מותאמות לרגישות שלכם. ייתכן רגע של אי-נוחות כשמשחררים נקודת מתח, אבל בסך הכל הטיפול נעים ומרגיע. אם יש לחיצה חזקה מדי - תגידו ונתאים." },
  { q: "מה ללבוש לטיפול שיאצו?", a: "ביגוד נוח ורפוי - חולצה ומכנסיים ארוכים מבד גמיש. אין צורך להתפשט. הטיפול מבוצע בלבוש מלא, ללא שמנים." },
  { q: "כמה טיפולי שיאצו צריך?", a: "מצבים חריפים כמו צוואר תפוס יכולים להשתפר תוך 2-3 טיפולים. מצבים כרוניים כמו כאבי כתפיים ממושכים בדרך כלל דורשים 6-8 טיפולים. רבים ממשיכים בטיפול תחזוקתי אחת לשבוע-שבועיים." },
  { q: "מה ההבדל בין שיאצו לעיסוי רגיל?", a: "עיסוי שוודי מתמקד בשרירים באמצעות שמנים ולישה. שיאצו עובד על ערוצי אנרגיה (מרידיאנים) ברפואה סינית, משתמש בלחיצות ממוקדות ומתיחות, ומטפל גם בהיבט האנרגטי של הגוף - לא רק בשרירים." },
  { q: "האם משלבים שמן בטיפולים?", a: "בחלק מהטיפולים אני משלב גם עבודה ממוקדת עם שמן מחומם באזור ספציפי - לא עיסוי שוודי או טיפול ספא, אלא חימום וזרימת דם נוספים בנקודות שצריכות את זה. זה משלים את עבודת השיאצו לפי הצורך, ולא בכל טיפול." },
];

export const metadata = {
  title: "שיאצו בראשון לציון | עדי שלו - 37 המלצות 5 כוכבים",
  description: "טיפולי שיאצו מקצועיים בראשון לציון - שחרור מתח בכתפיים, כאבי גב, צוואר וכאבים כרוניים. 37 ביקורות 5 כוכבים, 8+ שנות ניסיון. שיאצו מסורתי + נגיעות אישיות. תיאום בוואטסאפ.",
  keywords: [
    "שיאצו",
    "שיאצו בראשון לציון",
    "טיפול שיאצו",
    "עיסוי יפני",
    "שיאצו לכאבי גב",
    "שיאצו למתח",
    "שיאצו לכאבי צוואר",
    "שיאצו לאחר לידה",
    "שיאצו לעובדי היי-טק",
    "עדי שלו",
    "רפואה סינית",
  ],
  alternates: { canonical: "https://adishalev.co.il/shiatsu" },
  openGraph: {
    title: "שיאצו בראשון לציון | עדי שלו - 37 המלצות 5 כוכבים",
    description: "טיפולי שיאצו מקצועיים בראשון לציון - שחרור מתח, כאבי גב וצוואר. 37 ביקורות 5 כוכבים, 8+ שנות ניסיון קליני.",
    url: "https://adishalev.co.il/shiatsu",
    locale: "he_IL",
    type: "article",
    images: [{ url: "/adi-shiatsu.jpg", width: 1200, height: 630, alt: "טיפול שיאצו בקליניקה בראשון לציון" }],
  },
};

const OTHER_SERVICES = [
  { label: "דיקור סיני", href: "/dikur-sini" },
  { label: "כוסות רוח", href: "/cupping" },
  { label: "צמחי מרפא סיניים", href: "/herbs" },
];

export default function ShiatsuPage() {
  return (
    <>
      <MedicalServiceSchema
        name="שיאצו"
        alternateName="Shiatsu"
        description="עיסוי שיאצו מקצועי בראשון לציון. שחרור מתח, הקלה בכאבים ושיפור איכות החיים. טיפול מותאם אישית."
        url="https://adishalev.co.il/shiatsu"
      />
      <HowToSchema
        name="מה קורה בטיפול שיאצו?"
        description="תהליך טיפול שיאצו מהשלב הראשון ועד הסיום - מה לצפות בביקור בקליניקה של עדי שלו בראשון לציון."
        totalTime="PT60M"
        steps={[
          { name: "אבחון ושיחה", text: "שיחה על התלונה, ההיסטוריה הרפואית, אורח החיים, ואזורי המתח. הבנת המטרה של הטיפול." },
          { name: "התמקמות", text: "המטופל שוכב על מזרן או מיטת טיפול בלבוש נוח ורפוי. ללא שמנים." },
          { name: "טיפול שיאצו", text: "לחיצות עמוקות ומתיחות לאורך מרידיאנים (ערוצי אנרגיה) - איזון, שחרור מתח שרירי, גירוי נקודות ספציפיות לפי הצורך." },
          { name: "סיכום והמלצות", text: "סיכום הטיפול, המלצות לתרגילים, מתיחות ושמירה על התוצאות בין הטיפולים." },
        ]}
      />
      <BreadcrumbSchema items={[
        { name: "דף הבית", url: "https://adishalev.co.il" },
        { name: "שיאצו", url: "https://adishalev.co.il/shiatsu" },
      ]} />
      <FAQPageSchema items={FAQ_ITEMS} />
      <ServiceLayout otherServices={OTHER_SERVICES}>
      {/* Hero */}
      <section style={{
        minHeight: "50vh", position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        backgroundImage: "url(/adi-shiatsu.jpg)",
        backgroundSize: "cover", backgroundPosition: "center 20%",
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
            שיאצו בראשון לציון
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            עיסוי שיאצו מקצועי  - שחרור מתח, הקלה בכאבים ושיפור איכות החיים
          </p>
        </div>
      </section>

      {/* באנר - פעם ראשונה? שיאצו זו ההתחלה הנכונה */}
      <section style={{
        background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
        padding: "32px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <p style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.85)",
            margin: "0 0 8px",
            textTransform: "uppercase",
          }}>
            ✦ למתחילים ברפואה סינית ✦
          </p>
          <h2 style={{
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 800,
            color: "white",
            margin: "0 0 8px",
            lineHeight: 1.4,
          }}>
            פעם ראשונה ברפואה סינית? שיאצו זו ההתחלה הנכונה
          </h2>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.95)",
            lineHeight: 1.7,
            margin: 0,
            maxWidth: "640px",
            marginInline: "auto",
          }}>
            ללא מחטים, בלבוש מלא, חוויה נעימה ומרגיעה. דרך מצוינת להכיר את הגישה הסינית לטיפול בכאב ובמתח, בלי להתחייב מראש לדיקור.
          </p>
        </div>
      </section>

      {/* מה זה שיאצו  - עם תמונה */}
      <Section bg={C.cream}>
        <div className="shiatsu-about" style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 340px", gap: "40px", alignItems: "center" }}>
          <div>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              על הטיפול
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
              מה זה שיאצו?
            </h2>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              שיאצו (Shiatsu) הוא שיטת טיפול יפנית שמשמעותה &quot;לחץ אצבעות&quot;. השיטה מבוססת על עקרונות הרפואה הסינית המסורתית ומשלבת לחיצות ממוקדות, מתיחות ותנועות לאורך מרידיאנים  - ערוצי אנרגיה שעוברים בגוף.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              בניגוד לעיסוי שוודי שמתמקד בשרירים, שיאצו פועל ברמה עמוקה יותר  - הוא מכוון לאזן את זרימת האנרגיה (צ׳י) בגוף, לשחרר חסימות ולעורר את מנגנוני הריפוי הטבעיים. הטיפול מתבצע בלבוש מלא, ללא שמנים, על מיטת טיפולים נוחה.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              בקליניקה שלי בראשון לציון, טיפול השיאצו מותאם אישית לכל מטופל. בזכות שילוב הידע ברפואה סינית, הטיפול מדויק ומכוון לשורש הבעיה.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0" }}>
              רוצים להעמיק? כתבתי מדריך מלא שעונה על השאלה{" "}
              <a href="/blog/shiatsu" style={{ color: C.sage, fontWeight: 700 }}>מה זה שיאצו</a>
              {" "}- כולל מה קורה בטיפול, למי הוא מתאים ומה אומר המחקר.
            </p>
          </div>
          <div style={{
            borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 4px 24px rgba(44,42,38,0.1)",
          }}>
            <img src="/shiatsu-treatment.jpg" alt="טיפול שיאצו בקליניקה בראשון לציון - לחיצות ממוקדות על הגב" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </Section>

      {/* חוויית הטיפול  - 3 כרטיסים */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              חוויית הטיפול
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: 0 }}>
              מה מחכה לכם בשיאצו?
            </h2>
          </div>
          <div className="shiatsu-experience" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            {[
              {
                icon: "\u{1F91D}",
                title: "לפני הטיפול",
                text: "שיחה קצרה על המצב הנוכחי  - כאבים, מתח, שינה. עדי בודק דופק סיני ומתאים את הטיפול בדיוק למה שהגוף צריך היום.",
                accent: C.sage,
              },
              {
                icon: "\u{1F64C}",
                title: "במהלך הטיפול",
                text: "שוכבים בנוח בלבוש מלא. לחיצות עמוקות ומדויקות לאורך ערוצי האנרגיה, מתיחות עדינות ונשימה מונחית. 50-60 דקות של שחרור.",
                accent: C.gold,
              },
              {
                icon: "✨",
                title: "אחרי הטיפול",
                text: "תחושת קלילות וגמישות. רוב המטופלים מדווחים על שינה טובה יותר באותו לילה, ירידה משמעותית בכאב והרגשת רוגע עמוק.",
                accent: C.warm,
              },
            ].map(card => (
              <div key={card.title} style={{
                background: "white", borderRadius: "20px", padding: "32px 24px",
                boxShadow: "0 2px 20px rgba(44,42,38,0.06)",
                borderTop: `4px solid ${card.accent}`,
                textAlign: "center",
              }}>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{card.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: C.bark, margin: "0 0 12px" }}>{card.title}</h3>
                <p style={{ fontSize: "14px", color: C.barkLight, lineHeight: 1.8, margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* מה אומר המדע */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            מה אומר המחקר על שיאצו?
          </h2>
          <div style={{
            background: "white", borderRadius: "16px", padding: "32px",
            borderRight: `4px solid ${C.sage}`,
            boxShadow: "0 2px 16px rgba(44,42,38,0.06)",
          }}>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 20px" }}>
              מחקרים מדעיים עדכניים מאשרים את יעילות השיאצו במגוון מצבים:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "\u{1F52C}", text: "מחקר שפורסם ב-Journal of Holistic Nursing מצא שטיפולי שיאצו הפחיתו כאבי גב תחתון באופן משמעותי לעומת קבוצת ביקורת." },
                { icon: "\u{1F634}", text: "סקירה שיטתית הראתה ששיאצו משפר את איכות השינה ומפחית חרדה  - במיוחד אצל אנשים הסובלים ממתח כרוני." },
                { icon: "\u{1F9E0}", text: "מחקרים הוכיחו שלחיצה ממוקדת על נקודות אקופרסורה מגרה שחרור אנדורפינים וסרוטונין  - הורמוני ההרגעה הטבעיים של הגוף." },
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

      {/* למי מתאים */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            למי מתאים שיאצו?
          </h2>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 24px" }}>
            שיאצו מתאים לאנשים שמחפשים טיפול טבעי ועמוק ללא שימוש במחטים. השיטה יעילה במיוחד עבור:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
            {[
              "כאבי גב וצוואר", "כאבי כתפיים ושכמות", "מתח נפשי וחרדה",
              "כאבי ראש ומיגרנות", "נוקשות שרירים", "עייפות כרונית",
              "בעיות שינה", "כאבי מחזור", "מצבי לחץ ושחיקה",
              "שיקום לאחר פציעות ספורט", "כאבי מפרקים", "בעיות עיכול",
            ].map(c => (
              <span key={c} style={{
                background: "white", border: `1.5px solid ${C.sage}30`,
                color: C.bark, padding: "8px 18px", borderRadius: "50px",
                fontSize: "14px", fontWeight: 600,
              }}>{c}</span>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: C.barkLight, lineHeight: 1.8 }}>
            שיאצו מתאים גם למי שמעולם לא עשה טיפול ברפואה סינית  - הטיפול נעים, לא פולשני, ומרגיע.
          </p>
        </div>
      </Section>

      {/* ההבדל בין שיאצו לדיקור  - טבלת השוואה משודרגת */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 8px" }}>
              שיאצו או דיקור סיני?
            </h2>
            <p style={{ fontSize: "15px", color: C.barkLight, margin: 0 }}>
              שתי השיטות מבוססות על רפואה סינית  - הנה ההבדלים
            </p>
          </div>
          <div style={{
            background: "white", borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 4px 24px rgba(44,42,38,0.08)",
          }}>
            {/* כותרות */}
            <div className="shiatsu-compare-header" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: `2px solid ${C.sand}`,
            }}>
              <div style={{ padding: "18px 16px", fontSize: "13px", fontWeight: 600, color: C.barkLight }} />
              <div style={{
                padding: "18px 16px", textAlign: "center", fontWeight: 800, fontSize: "16px",
                color: "white", background: C.sage,
              }}>שיאצו</div>
              <div style={{
                padding: "18px 16px", textAlign: "center", fontWeight: 800, fontSize: "16px",
                color: C.bark,
              }}>דיקור סיני</div>
            </div>
            {/* שורות */}
            {[
              { label: "כלי עבודה", shiatsu: "אגודלים, כפות ידיים, מרפקים", acupuncture: "מחטים דקיקות חד-פעמיות" },
              { label: "לבוש", shiatsu: "בלבוש מלא", acupuncture: "חשיפה חלקית" },
              { label: "תחושה", shiatsu: "לחץ עמוק ומתיחות", acupuncture: "עקצוץ קל ורגיעה" },
              { label: "מתאים במיוחד ל...", shiatsu: "מתח, נוקשות, פחד ממחטים", acupuncture: "כאב כרוני, הורמונים, פריון" },
            ].map((row, i) => (
              <div key={row.label} className="shiatsu-compare-row" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom: i < 3 ? `1px solid ${C.sand}` : "none",
              }}>
                <div style={{
                  padding: "16px", fontSize: "13px", fontWeight: 700, color: C.bark,
                  display: "flex", alignItems: "center",
                }}>{row.label}</div>
                <div style={{
                  padding: "16px", fontSize: "14px", color: C.bark, textAlign: "center",
                  background: `${C.sage}08`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{row.shiatsu}</div>
                <div style={{
                  padding: "16px", fontSize: "14px", color: C.barkLight, textAlign: "center",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{row.acupuncture}</div>
              </div>
            ))}
          </div>
          <p style={{
            fontSize: "14px", color: C.barkLight, lineHeight: 1.8,
            marginTop: "20px", textAlign: "center", fontStyle: "italic",
          }}>
            לעיתים עדי משלב בין שתי השיטות בטיפול אחד  - לפי מה שהגוף צריך
          </p>
        </div>
      </Section>

      {/* איך הטיפול נראה  - טיימליין */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 32px" }}>
            איך נראה טיפול שיאצו בקליניקה?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", position: "relative" }}>
            {[
              { num: "1", title: "שיחה ואבחון", text: "בפגישה הראשונה נשוחח על ההיסטוריה הרפואית, הכאבים ואורח החיים. בדיקת דופק סיני תעזור לזהות חוסר איזון אנרגטי ולהתאים את הטיפול." },
              { num: "2", title: "הטיפול עצמו", text: "הטיפול נמשך כ-50-60 דקות. באמצעות לחיצות אגודלים, כפות ידיים ולעיתים מרפקים, המטפל עובד לאורך המרידיאנים ומשחרר מתח ונוקשות. רוב המטופלים מרגישים הקלה כבר בטיפול הראשון." },
              { num: "3", title: "תוצאות והמשך", text: "אחרי שיאצו רוב האנשים מרגישים רגיעה עמוקה, גמישות משופרת ופחות כאב. סדרת טיפולים של 4-8 מפגשים בדרך כלל מספיקה לטיפול במצבים כרוניים." },
            ].map((step, idx, arr) => (
              <div key={step.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start", position: "relative", paddingBottom: idx < arr.length - 1 ? "32px" : "0" }}>
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

      {/* מה מרגישים אחרי שיאצו */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              תחושות מהטיפול
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: 0 }}>
              מה מרגישים אחרי שיאצו?
            </h2>
          </div>
          <div className="shiatsu-feelings" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px",
          }}>
            {[
              { icon: "\u{1F30A}", title: "רגיעה עמוקה", text: "תחושת שקט פנימי, כאילו נפלו עשרה קילו מהכתפיים" },
              { icon: "\u{1F9B5}", title: "גמישות משופרת", text: "טווח תנועה רחב יותר, פחות נוקשות בבוקר" },
              { icon: "\u{1F634}", title: "שינה טובה יותר", text: "הרבה מטופלים ישנים הכי טוב בלילה שאחרי השיאצו" },
              { icon: "\u{26A1}", title: "אנרגיה מחודשת", text: "לא עייפות  - דווקא תחושת חיוניות ובהירות ראש" },
            ].map(f => (
              <div key={f.title} style={{
                background: "white", borderRadius: "16px", padding: "24px",
                boxShadow: "0 2px 12px rgba(44,42,38,0.05)",
                display: "flex", gap: "16px", alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "28px", flexShrink: 0, lineHeight: 1.3 }}>{f.icon}</span>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: C.bark, margin: "0 0 6px" }}>{f.title}</h3>
                  <p style={{ fontSize: "14px", color: C.barkLight, lineHeight: 1.7, margin: 0 }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* סיפור הצלחה - מקרה מהקליניקה */}
      <Section bg={C.cream}>
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
              ✦ מקרה מהקליניקה ✦
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
              ר&apos; - גבר בשנות ה-50
            </div>

            <h3 style={{
              fontSize: "22px",
              fontWeight: 800,
              color: C.bark,
              margin: "0 0 16px",
              lineHeight: 1.4,
            }}>
              הגב העליון ששכח איך להיות משוחרר
            </h3>

            <div style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9 }}>
              <p style={{ margin: "0 0 16px" }}>
                ר&apos; הגיע אליי אחרי חודשים של עומס בגב העליון. הוא תיאר את זה בדיוק: &quot;בסוף יום עבודה אני מרגיש שיש לי עוד 20 קילו על הגב&quot;. הכל מכווץ, לחוץ, לא נוח. הוא כבר שכח איך הגב והשכמות אמורים להרגיש כשהם באמת משוחררים.
              </p>

              <p style={{ margin: "0 0 16px" }}>
                זה תסמין נפוץ מאוד - ויש לזה סיבה.
              </p>

              <h4 style={{
                fontSize: "18px",
                fontWeight: 800,
                color: C.bark,
                margin: "28px 0 12px",
                lineHeight: 1.4,
              }}>
                החלק שמפתיע אנשים: הגב לא סוחב רק עומס פיזי
              </h4>

              <p style={{ margin: "0 0 16px" }}>
                ברפואה הסינית, הגב העליון - האזור בין השכמות - הוא הבית של נקודות שקשורות לאיברים פנימיים: הריאות (BL-13), הלב (BL-15), הכבד (BL-18). לא במקרה אנחנו אומרים &quot;הוא לוקח את זה על הגב&quot;. מתח רגשי - חרדה, אחריות, לחץ - מצטבר באותן נקודות בדיוק.
              </p>

              <p style={{ margin: "0 0 16px" }}>
                זו הסיבה שטיפול בגב העליון הוא לא רק פיזי. <strong>משחררים שריר, ולפעמים משחררים גם משהו עמוק יותר.</strong>
              </p>

              <p style={{ margin: "0 0 16px" }}>
                עיקרון נוסף: הגוף הוא יחידה אחת. אי אפשר לטפל בשכמות בלי להבין את ההמשך - הצוואר, הגב התחתון, הרגליים. עומס ברגליים יכול להתבטא בצוואר. לכן הטיפול תמיד גוף שלם, לא רק האזור הכואב.
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
                שיאצו ממוקד בנקודות ספציפיות בגב העליון - אלה שפותחות זרימה ומשחררות שרירים עמוקים. עבודה זהירה סביב הצוואר, עמוקה יותר בשכמות ובכתפיים, ולחיצות לאורך כל המסלול: גב, צוואר, גב תחתון ורגליים.
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
                המטופל לאחר הטיפול סיפר לי שהוא מרגיש שירד לו עול מהגב. וזה באמת קרה. גם פיזית - הגב היה משוחרר. אבל גם נפשית - מצב הרוח השתנה. ממצב של חוסר אנרגיה וחוסר חשק, הוא קם והרגיש כוח לתפקד.
              </p>

              <p style={{ margin: "0 0 16px" }}>
                ר&apos; בוחר להמשיך להגיע אליי לפי הצורך, אחת לשבועיים-שלושה. זה לא חובה - הוא מצא שזה עוזר לו לשמור על המצב בתקופות של עומס בעבודה. זה באמת משתנה ממטופל למטופל: חלק מגיעים למספר טיפולים פעם בתקופה כשעולה הצורך, אחרים אוהבים להגיע על בסיס שבועי או חודשי. כל אחד והקצב שלו.
              </p>

              <p style={{ margin: "0", fontStyle: "italic" }}>
                זה קורה לא מעט שמטופל מגיע עם בעיה מסוימת ומקבל הקלה גם במקומות שהוא לא ציפה להן.
              </p>
            </div>
          </article>
        </div>
      </Section>

      {/* 6 מיתוסים על שיאצו */}
      <Section bg={C.bark}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{
              color: C.gold,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "3px",
              marginBottom: "12px",
              textTransform: "uppercase",
            }}>
              שובר מיתוסים
            </div>
            <h2 style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "white",
              margin: 0,
              lineHeight: 1.3,
            }}>
              6 מיתוסים על שיאצו שכדאי להכיר
            </h2>
          </div>
          <div className="shiatsu-myths" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}>
            {[
              {
                myth: "שיאצו זה רק עיסוי לפינוק",
                truth: "שיאצו הוא טיפול קליני שמטפל בכאבים, מתח, חרדה, בעיות שינה ועוד. ההבדל מעיסוי ספא הוא שיש מאחוריו אבחון של רפואה סינית.",
              },
              {
                myth: "צריך להתפשט בטיפול",
                truth: "לא. שיאצו מבוצע בלבוש מלא - חולצה ומכנסיים נוחים. אין צורך בשמנים, אין חשיפה. הרבה אנשים מעדיפים את זה.",
              },
              {
                myth: "זה כואב",
                truth: "הלחיצות עמוקות אבל מותאמות לרגישות שלכם. אם משהו חזק מדי - אומרים, ומתאימים. רוב האנשים מתארים את הטיפול כנעים מאוד ומרגיע.",
              },
              {
                myth: "שיאצו ועיסוי שוודי זה בערך אותו דבר",
                truth: "ההפך מוחלט. עיסוי שוודי מתמקד בשרירים. שיאצו עובד על מרידיאנים - ערוצי אנרגיה ברפואה סינית - ומטפל בשורש הבעיה, לא רק בסימפטום.",
              },
              {
                myth: "צריך לעשות את זה הרבה זמן עד שעוזר",
                truth: "מצבים חריפים (צוואר תפוס, מתח חריף) משתפרים תוך 2-3 טיפולים. רוב האנשים מרגישים הקלה ניכרת כבר מהטיפול הראשון.",
              },
              {
                myth: "אם יש לי בעיה רפואית, שיאצו לא יכול לעזור",
                truth: "שיאצו עובד מצוין כטיפול משלים. אני בודק שאין מגבלות, מתאים את עוצמת הטיפול, ועובד גם עם מטופלים שלוקחים תרופות או אחרי ניתוחים.",
              },
            ].map((m) => (
              <div key={m.myth} style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}>
                <div style={{ marginBottom: "12px" }}>
                  <span style={{
                    color: "#E06060",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}>
                    ✗ מיתוס
                  </span>
                  <p style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "16px",
                    fontWeight: 700,
                    margin: "6px 0 0",
                    lineHeight: 1.5,
                  }}>
                    {m.myth}
                  </p>
                </div>
                <div>
                  <span style={{
                    color: C.gold,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}>
                    ✓ האמת
                  </span>
                  <p style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "14px",
                    margin: "6px 0 0",
                    lineHeight: 1.7,
                  }}>
                    {m.truth}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* שאלות נפוצות */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            שאלות נפוצות על שיאצו
          </h2>
          <ServiceFAQ items={FAQ_ITEMS} />
        </div>
      </Section>

      {/* באנר התייעצות - לפני CTA הראשי */}
      <Section bg={C.cream}>
        <div style={{
          maxWidth: "720px",
          margin: "0 auto",
          background: "white",
          borderRadius: "20px",
          padding: "40px 32px",
          boxShadow: "0 6px 32px rgba(44,42,38,0.08)",
          border: `1px solid ${C.sage}20`,
          textAlign: "center",
        }}>
          <div style={{
            color: C.sage,
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "3px",
            marginBottom: "12px",
            textTransform: "uppercase",
          }}>
            ✦ לפני שמתחייבים ✦
          </div>
          <h2 style={{
            fontSize: "24px",
            fontWeight: 800,
            color: C.bark,
            margin: "0 0 14px",
            lineHeight: 1.4,
          }}>
            מתלבטים אם שיאצו מתאים לכם?
          </h2>
          <p style={{
            fontSize: "16px",
            color: C.barkLight,
            lineHeight: 1.8,
            margin: "0 0 24px",
            maxWidth: "560px",
            marginInline: "auto",
          }}>
            שלחו לי הודעה בוואטסאפ עם מה שעובר עליכם - 5 דקות שיחה, אספר לכם בכנות אם זה הטיפול הנכון לכם או שעדיף משהו אחר. אין התחייבות, אין &quot;מכירה&quot;, פשוט שיחה מקצועית.
          </p>
          <a href={WA_URL} target="_blank" rel="noreferrer" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "linear-gradient(135deg, #34A853, #2D9248)",
            color: "white",
            padding: "14px 32px",
            borderRadius: "50px",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 24px rgba(52,168,83,0.3)",
          }}>
            <WaSvg size={20} />
            שיחת התייעצות בוואטסאפ
          </a>
        </div>
      </Section>

      {/* CTA ביניים */}
      <section style={{ background: C.sand, padding: "48px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "18px", fontWeight: 600, color: C.bark, margin: "0 0 20px" }}>
          רוצים לנסות שיאצו בראשון לציון?
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
