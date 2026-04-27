import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import ContactCTA from "@/components/ContactCTA";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Section from "@/components/Section";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { C } from "@/lib/constants";

export const metadata = {
  title: "אודות עדי שלו - מטפל ברפואה סינית בראשון לציון ובמכבי טבעי",
  description:
    "עדי שלו, בוגר מכללת רידמן, 8+ שנות ניסיון קליני, מעל 500 מטופלים, מטפל במכבי טבעי 6+ שנים. מתמחה בדיקור סיני (ד\"ר טאן, מאסטר דונג), שיאצו, כוסות רוח וצמחי מרפא.",
  keywords:
    "עדי שלו, עדי שלו רפואה סינית, עדי שלו ראשון לציון, מטפל דיקור סיני ראשון לציון, מטפל שיאצו, מוסמך רפואה סינית, מכבי טבעי דיקור, דיקור במכבי",
  alternates: { canonical: "https://adishalev.co.il/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "עדי שלו",
  alternateName: "Adi Shalev",
  jobTitle: "מטפל ברפואה סינית",
  description:
    "מטפל מוסמך ברפואה סינית עם למעלה מ-8 שנות ניסיון קליני. מתמחה בדיקור סיני בשיטות ד\"ר טאן ומאסטר דונג, שיאצו, כוסות רוח וצמחי מרפא סיניים.",
  url: "https://adishalev.co.il/about",
  image: "https://adishalev.co.il/adi-portrait2.png",
  telephone: "+972-52-802-9031",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "מכללת רידמן לרפואה סינית",
  },
  knowsAbout: [
    "דיקור סיני",
    "שיאצו",
    "כוסות רוח",
    "צמחי מרפא סיניים",
    "שיטת ד\"ר טאן",
    "שיטת מאסטר דונג",
    "רפואה סינית מסורתית",
  ],
  worksFor: {
    "@type": "MedicalBusiness",
    name: "עדי שלו - רפואה סינית",
    address: {
      "@type": "PostalAddress",
      addressLocality: "ראשון לציון",
      addressCountry: "IL",
    },
  },
  sameAs: [
    "https://www.google.com/maps/place/?q=place_id:YOUR_PLACE_ID",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "דף הבית", url: "https://adishalev.co.il" },
          { name: "אודות", url: "https://adishalev.co.il/about" },
        ]}
      />

      <Navbar basePath="/" />

      {/* Hero */}
      <header
        style={{
          background: `linear-gradient(135deg, ${C.sage} 0%, ${C.sageDark} 100%)`,
          padding: "120px 24px 60px",
          textAlign: "center",
        }}
      >
        <nav style={{ marginBottom: "20px" }}>
          <a
            href="/"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              fontSize: "13px",
            }}
          >
            דף הבית
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>
            /
          </span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>
            אודות
          </span>
        </nav>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "white",
            margin: "0 0 12px",
          }}
        >
          אודות עדי שלו
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.85)",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          מטפל מוסמך ברפואה סינית בראשון לציון - דיקור, שיאצו, כוסות רוח
          וצמחי מרפא
        </p>
      </header>

      {/* הסיפור האישי */}
      <Section bg={C.cream} style={{ padding: "60px 24px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "48px",
            alignItems: "center",
          }}
          className="about-hero-grid"
        >
          <div>
            <Image
              src="/adi-portrait2.png"
              alt="עדי שלו - מטפל ברפואה סינית מוסמך, בוגר מכללת רידמן, בקליניקה בראשון לציון"
              width={520}
              height={400}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 20px 40px rgba(44,42,38,0.15)",
              }}
              priority
            />
          </div>
          <div>
            <div
              style={{
                color: C.sage,
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              הסיפור שלי
            </div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: C.bark,
                margin: "0 0 20px",
                lineHeight: 1.2,
              }}
            >
              למה בחרתי ברפואה סינית
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: C.barkLight,
                lineHeight: 1.9,
                margin: "0 0 16px",
              }}
            >
              הדרך שלי לרפואה סינית התחילה מחיפוש פתרונות לבעיות שהרפואה
              הקונבנציונלית לא תמיד נתנה להן מענה מלא. ראיתי מטופלים סביבי
              סובלים מכאבים כרוניים, מתח מצטבר ובעיות שינה - ושמעתי שוב ושוב
              את אותה תשובה: "תחיו עם זה".
            </p>
            <p
              style={{
                fontSize: "16px",
                color: C.barkLight,
                lineHeight: 1.9,
                margin: "0 0 16px",
              }}
            >
              הרפואה הסינית הציעה משהו אחר - גישה שמחברת בין גוף ונפש,
              ומטפלת בשורש הבעיה ולא רק בסימפטום. אחרי שנים של ניסיון ומחקר,
              אני עדיין מופתע מהתוצאות שהיא מייצרת - גם במצבים מורכבים.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: C.barkLight,
                lineHeight: 1.9,
                margin: "0 0 16px",
              }}
            >
              כיום, בקליניקה שלי במערב ראשון לציון, אני מלווה מטופלים שרבים
              מהם באו אחרי שניסו הכל - ומוצאים את הפתרון כאן.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: C.barkLight,
                lineHeight: 1.9,
                margin: "0",
              }}
            >
              במקביל לקליניקה, אני מטפל גם במסגרת <strong style={{ color: C.bark }}>מכבי טבעי</strong> של קופת חולים מכבי מעל 6 שנים, עם דגש על דיקור סיני. זוהי הוכחה מקצועית שהשיטה שאני מציע עומדת בסטנדרטים של אחת ממערכות הבריאות הגדולות בישראל.
            </p>
          </div>
        </div>
      </Section>

      {/* הסמכות וניסיון */}
      <Section bg={C.sand} style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                color: C.sage,
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              הכשרה
            </div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: C.bark,
                margin: "0",
                lineHeight: 1.2,
              }}
            >
              הסמכות וניסיון קליני
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                title: "מכללת רידמן",
                body: "בוגר תוכנית הרפואה הסינית של מכללת רידמן, מהמוסדות המובילים בישראל להכשרת מטפלים ברפואה סינית.",
              },
              {
                title: "8+ שנות ניסיון",
                body: "למעלה מ-8 שנות ניסיון קליני עם מעל 500 מטופלים מראשון לציון והסביבה - כאבים כרוניים, מתח נפשי, בעיות שינה ועיכול, פציאליס, מיגרנות ועוד.",
              },
              {
                title: "מכבי טבעי - 6+ שנים",
                body: "מעל 6 שנים כמטפל במסגרת מכבי טבעי של קופת חולים מכבי - בדיקור סיני ושיאצו. ההיסמכות של מכבי היא תעודת איכות מקצועית, ומעידה על עמידה בסטנדרטים הרפואיים הגבוהים ביותר.",
              },
              {
                title: "שיטת ד\"ר טאן",
                body: "הכשרה מתקדמת בשיטת ד\"ר טאן (Dr. Tan) - שיטת דיקור מודרנית שמתמקדת בתוצאות מהירות ומדידות, במיוחד לכאבי גב, צוואר, כתפיים וסיאטיקה.",
              },
              {
                title: "שיטת מאסטר דונג",
                body: "מתמחה בשיטת מאסטר דונג - שיטה עתיקה ומוערכת לטיפול בבעיות פנימיות כמו חרדה, בעיות שינה ועיכול, ומצבים רגשיים.",
              },
              {
                title: "שיאצו יפני",
                body: "הכשרה מקצועית בשיאצו - עיסוי יפני עתיק שמשלב לחיצות ממוקדות, מתיחות ועבודה עם מרידיאנים לשחרור מתח והקלה בכאבים.",
              },
              {
                title: "צמחי מרפא סיניים",
                body: "ידע נרחב בצמחי מרפא סיניים כתוספת טיפולית המאיצה ריפוי ומחזקת את התהליך הנבנה בטיפולי הדיקור והשיאצו.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "white",
                  padding: "24px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(44,42,38,0.06)",
                  borderTop: `3px solid ${C.sage}`,
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: C.bark,
                    margin: "0 0 12px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: C.barkLight,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* פילוסופיית טיפול */}
      <Section bg={C.cream} style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div
              style={{
                color: C.sage,
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              הגישה שלי
            </div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: C.bark,
                margin: "0",
                lineHeight: 1.2,
              }}
            >
              איך אני עובד
            </h2>
          </div>

          <p
            style={{
              fontSize: "17px",
              color: C.barkLight,
              lineHeight: 1.9,
              marginBottom: "20px",
            }}
          >
            <strong style={{ color: C.bark }}>אבחון מעמיק קודם כל.</strong>{" "}
            לפני שאני מחליט על טיפול, אני מקשיב לסיפור המלא - מתי הכאב
            התחיל, מה מחמיר ומקל, איך זה משפיע על החיים. בנוסף אני בודק דופק
            ולשון, כלים אבחוניים של רפואה סינית שנותנים תמונה רחבה על מצב
            הגוף מבפנים.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: C.barkLight,
              lineHeight: 1.9,
              marginBottom: "20px",
            }}
          >
            <strong style={{ color: C.bark }}>
              טיפול מותאם אישית, לא תבנית.
            </strong>{" "}
            כל גוף הוא שונה, וטיפול שעבד על מטופל אחד לא בהכרח יעבוד על אחר.
            אני משלב בין שיטות - ד"ר טאן, מאסטר דונג, שיאצו, כוסות רוח -
            לפי מה שהגוף הספציפי של המטופל זקוק לו.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: C.barkLight,
              lineHeight: 1.9,
              marginBottom: "20px",
            }}
          >
            <strong style={{ color: C.bark }}>שקיפות ותקשורת.</strong> אני
            מסביר מה אני עושה ולמה, מהן הציפיות הריאליות מהטיפול, וכמה זמן
            זה אמור לקחת. אני לא מבטיח "נסים" - אבל אני מבטיח תהליך מקצועי
            שמכוון לתוצאות מדידות.
          </p>

          <p
            style={{
              fontSize: "17px",
              color: C.barkLight,
              lineHeight: 1.9,
              marginBottom: 0,
            }}
          >
            <strong style={{ color: C.bark }}>ליווי לאורך הדרך.</strong>{" "}
            טיפול לא נגמר כשיוצאים מהקליניקה. אני נותן למטופלים שלי כלים
            להמשך - תנועות, לחיצות עצמיות, שינויים בהרגלים - שמחזקים את
            התהליך בין הטיפולים.
          </p>
        </div>
      </Section>

      {/* במה אני מטפל */}
      <Section bg={C.sand} style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div
              style={{
                color: C.sage,
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              התחומים שלי
            </div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: C.bark,
                margin: "0",
                lineHeight: 1.2,
              }}
            >
              במה אני מטפל
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              "כאבי גב תחתון וכרוני",
              "פריצת דיסק וסיאטיקה",
              "כאבי צוואר וכתפיים",
              "מיגרנות וכאבי ראש",
              "חרדה ומתח נפשי",
              "קשיי שינה ונדודי שינה",
              "בעיות עיכול ומעי רגיז",
              "פציאליס ושיתוק פנים",
              "עייפות כרונית",
              "כאבים אחרי שירות מילואים",
              "בעיות גיל המעבר",
              "פיברומיאלגיה",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "white",
                  padding: "16px 20px",
                  borderRadius: "8px",
                  borderRight: `3px solid ${C.gold}`,
                  fontSize: "15px",
                  color: C.bark,
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ContactCTA />
      <Footer />
      <FloatingWA />
      <CookieConsent />
      <AccessibilityWidget />
    </>
  );
}
