import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import ContactCTA from "@/components/ContactCTA";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { C } from "@/lib/constants";
import { REVIEWS, TOPICS, REVIEW_COUNT, plainReviewText } from "@/lib/reviewsData";

export const metadata = {
  title: `עדי שלו המלצות - חוות דעת מטופלים | ${REVIEW_COUNT} ביקורות 5 כוכבים בגוגל`,
  description: `המלצות וביקורות על עדי שלו - דיקור סיני ושיאצו בראשון לציון. ${REVIEW_COUNT} ביקורות מאומתות בגוגל, כולן 5 כוכבים. חוות דעת אמיתיות של מטופלים על טיפול בכאבי גב, מיגרנות, שיתוק פנים, פריון ושינה.`,
  keywords:
    "עדי שלו המלצות, עדי שלו ביקורות, עדי שלו חוות דעת, עדי שלו שיאצו המלצות, עדי שלו דיקור סיני ביקורות, מטפל דיקור סיני מומלץ ראשון לציון, שיאצו מומלץ ראשון לציון",
  alternates: { canonical: "https://adishalev.co.il/reviews" },
  openGraph: {
    title: `עדי שלו המלצות - חוות דעת מטופלים | ${REVIEW_COUNT} ביקורות 5 כוכבים`,
    description: `כל ההמלצות והביקורות של מטופלים על עדי שלו - דיקור סיני ושיאצו בראשון לציון. ${REVIEW_COUNT} ביקורות מאומתות בגוגל, דירוג ממוצע 5 כוכבים.`,
    url: "https://adishalev.co.il/reviews",
    locale: "he_IL",
    type: "website",
    images: [{ url: "/adi-portrait2.png", width: 1200, height: 630, alt: "עדי שלו - מטפל ברפואה סינית בראשון לציון" }],
  },
};

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?ie=UTF-8&q=%D7%A2%D7%93%D7%99+%D7%A9%D7%9C%D7%95#ebo=0&mpd=~16663539272075685089/customers/reviews";

/* סכמת ביקורות - העסק + כל הביקורות המתועתקות, מקושר ל-@id של העסק מדף הבית */
const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "@id": "https://adishalev.co.il/#business",
  name: "עדי שלו - רפואה סינית",
  url: "https://adishalev.co.il",
  image: "https://adishalev.co.il/adi-portrait2.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "ראשון לציון",
    addressCountry: "IL",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: String(REVIEW_COUNT),
    reviewCount: String(REVIEW_COUNT),
  },
  review: REVIEWS.map((r) => ({
    "@type": "Review",
    name: r.sub,
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: plainReviewText(r.text),
  })),
};

const Stars = () => (
  <span style={{ display: "inline-flex", gap: "2px", verticalAlign: "middle" }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </span>
);

function ReviewBlock({ r }) {
  return (
    <article
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "28px 26px",
        border: `1px solid ${C.sand}`,
        boxShadow: "0 2px 20px rgba(44,42,38,0.05)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
        <div>
          <div style={{ fontWeight: 700, color: C.bark, fontSize: "16px" }}>{r.name}</div>
          <div style={{ color: C.sage, fontSize: "13px", marginTop: "2px", fontWeight: 600 }}>{r.sub}</div>
        </div>
        <Stars />
      </div>
      <blockquote
        style={{ margin: 0, fontSize: "15px", color: C.barkLight, lineHeight: 1.85 }}
        dangerouslySetInnerHTML={{ __html: r.text }}
      />
    </article>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "דף הבית", url: "https://adishalev.co.il" },
          { name: "המלצות מטופלים", url: "https://adishalev.co.il/reviews" },
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
          <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px" }}>
            דף הבית
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>המלצות מטופלים</span>
        </nav>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, color: "white", margin: "0 0 16px", lineHeight: 1.3 }}>
          עדי שלו - המלצות וחוות דעת של מטופלים
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.85)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.8 }}>
          ביקורות אמיתיות ומאומתות מגוגל על טיפולי דיקור סיני, שיאצו וכוסות רוח בקליניקה שלי בראשון לציון
        </p>
      </header>

      <div style={{ background: C.cream }}>
        {/* Rating badge + intro */}
        <section style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px 8px", textAlign: "center" }}>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "12px",
              background: "white", padding: "14px 28px", borderRadius: "50px",
              boxShadow: "0 2px 12px rgba(44,42,38,0.08)", textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "24px", fontWeight: 900, color: C.bark }}>5.0</span>
            <Stars />
            <span style={{ fontSize: "14px", color: C.barkLight, fontWeight: 600 }}>
              מבוסס על {REVIEW_COUNT} ביקורות בגוגל
            </span>
          </a>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "28px 0 0", textAlign: "right" }}>
            בעמוד הזה ריכזתי את הביקורות שמטופלים כתבו עליי בפרופיל Google של הקליניקה - מילה במילה, בלי עריכה ובלי סינון.
            נכון להיום יש בפרופיל {REVIEW_COUNT} ביקורות עם דירוג ממוצע של 5 כוכבים; חלקן דירוג בלבד, וכאן מופיעות כל אלה שכוללות
            חוות דעת כתובה. סידרתי אותן לפי תחומי הטיפול - כאבי גב וצוואר, מיגרנות, שיתוק פנים, פריון ושינה - כדי שתוכלו למצוא
            בקלות מטופלים שהגיעו עם בעיה דומה לשלכם. כל ביקורת ניתנת לאימות בלחיצה על הקישור לפרופיל Google למעלה.
          </p>
        </section>

        {/* Reviews grouped by topic */}
        {TOPICS.map((topic) => {
          const topicReviews = REVIEWS.filter((r) => r.topic === topic.key);
          if (!topicReviews.length) return null;
          return (
            <section key={topic.key} style={{ maxWidth: "820px", margin: "0 auto", padding: "36px 24px 4px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: C.bark, margin: "0 0 20px", borderBottom: `2px solid ${C.gold}`, paddingBottom: "10px" }}>
                המלצות על טיפול ב{topic.title}
              </h2>
              <div style={{ display: "grid", gap: "20px" }}>
                {topicReviews.map((r) => (
                  <ReviewBlock key={r.name} r={r} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Closing note + internal links */}
        <section style={{ maxWidth: "820px", margin: "0 auto", padding: "40px 24px 56px", textAlign: "center" }}>
          <p style={{ fontSize: "15px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 20px" }}>
            רוצים לקרוא עוד על הטיפולים שמאחורי ההמלצות?{" "}
            <a href="/dikur-sini" style={{ color: C.sageDark, fontWeight: 700 }}>דיקור סיני</a>,{" "}
            <a href="/shiatsu" style={{ color: C.sageDark, fontWeight: 700 }}>שיאצו</a>,{" "}
            <a href="/cupping" style={{ color: C.sageDark, fontWeight: 700 }}>כוסות רוח</a>{" "}
            או <a href="/about" style={{ color: C.sageDark, fontWeight: 700 }}>הסיפור שלי</a>.
          </p>
          <a
            href="/"
            style={{
              display: "inline-block", color: C.sageDark, fontWeight: 700,
              fontSize: "14px", textDecoration: "none",
              border: `1.5px solid ${C.sage}`, borderRadius: "50px", padding: "10px 26px",
            }}
          >
            → חזרה לדף הבית
          </a>
        </section>
      </div>

      <ContactCTA
        title="רוצים להצטרף למטופלים המרוצים?"
        subtitle="שלחו הודעה ונתאם פגישת היכרות וטיפול ראשון בקליניקה בראשון לציון"
      />
      <Footer />
      <FloatingWA />
      <CookieConsent />
      <AccessibilityWidget />
    </>
  );
}
