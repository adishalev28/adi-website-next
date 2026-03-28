import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import ContactCTA from "@/components/ContactCTA";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { C } from "@/lib/constants";

export const metadata = {
  title: "מאמרים ומידע מקצועי | עדי שלו - רפואה סינית",
  description: "מאמרים מקצועיים על רפואה סינית, דיקור, שיאצו ובריאות טבעית. מידע מבוסס ניסיון קליני.",
};

const ARTICLES = [
  {
    slug: "facial-paralysis",
    title: "דיקור סיני לשיתוק פנים (פציאליס / Bell's Palsy)",
    description: "שיתוק פנים יכול להיות מפחיד. דיקור סיני מוכח כטיפול יעיל שמאיץ החלמה ומשחזר תפקוד. מדריך מקיף כולל ניסיון קליני.",
    tag: "דיקור סיני",
    date: "מרץ 2026",
    readTime: "8",
    image: "/blog-facial-paralysis.jpg",
    imageAlt: "דיקור סיני לשיתוק פנים (פציאליס) בקליניקה בראשון לציון",
  },
  {
    slug: "sciatica",
    title: "דיקור סיני לסיאטיקה — טיפול יעיל בכאב הקורן לרגל",
    description: "סובלים מסיאטיקה? כאב שיורד מהגב לרגל? דיקור סיני מטפל בשורש הבעיה — משחרר לחץ על העצב ומפחית דלקת.",
    tag: "דיקור סיני",
    date: "מרץ 2026",
    readTime: "9",
    image: "/blog-sciatica.jpg",
    imageAlt: "דיקור סיני לסיאטיקה — טיפול בכאב גב וברגל בקליניקה בראשון לציון",
  },
  {
    slug: "cupping-therapy",
    title: "כוסות רוח — מתי ולמה? מדריך מקיף",
    description: "הסימנים העגולים על הגב — מה באמת קורה בטיפול כוסות רוח, למי זה מתאים, ומתי כדאי לנסות.",
    tag: "כוסות רוח",
    date: "מרץ 2026",
    readTime: "7",
    image: "/blog-cupping.jpg",
    imageAlt: "טיפול כוסות רוח בקליניקה לרפואה סינית בראשון לציון",
  },
  {
    slug: "anxiety",
    title: "דיקור סיני לחרדה ולחץ נפשי - טיפול טבעי שעובד",
    description: "סובלים מחרדה, מתח או לחץ נפשי? דיקור סיני מוכח מחקרית כטיפול יעיל להפחתת חרדה ושיפור איכות החיים. מדריך מקיף.",
    tag: "דיקור סיני",
    date: "מרץ 2026",
    readTime: "10",
    image: "/blog-anxiety.jpg",
    imageAlt: "רגיעה ושחרור מתח - דיקור סיני לחרדה בקליניקה בראשון לציון",
  },
  {
    slug: "migraines",
    title: "דיקור סיני למיגרנות וכאבי ראש - סוגים, טיפול ותוצאות",
    description: "סובלים ממיגרנות או כאבי ראש חוזרים? מדריך מקיף עם פירוט כל סוגי כאבי הראש ואיך דיקור סיני מטפל בכל אחד.",
    tag: "דיקור סיני",
    date: "מרץ 2026",
    readTime: "9",
    image: "/blog-migraines.jpg",
    imageAlt: "דיקור סיני לכאבי ראש ומיגרנות - טיפול בקליניקה בראשון לציון",
  },
  {
    slug: "sleep",
    title: "דיקור סיני לבעיות שינה ונדודי שינה",
    description: "סובלים מנדודי שינה או קושי להירדם? דיקור סיני הוכח כטיפול יעיל לשיפור איכות השינה בצורה טבעית וללא תרופות. מדריך מקיף.",
    tag: "דיקור סיני",
    date: "מרץ 2026",
    readTime: "9",
    image: "/blog-sleep.jpg",
    imageAlt: "דיקור סיני לשיפור שינה - טיפול טבעי בקליניקה בראשון לציון",
  },
  {
    slug: "neck-shoulder-pain",
    title: "דיקור סיני לכאבי צוואר וכתפיים",
    description: "סובלים מכאבי צוואר, כתפיים תפוסות או צוואר תפוס? דיקור סיני בשיטת ד\"ר טאן מטפל בשורש הכאב ומחזיר טווח תנועה מלא.",
    tag: "דיקור סיני",
    date: "מרץ 2026",
    readTime: "9",
    image: "/blog-neck-shoulder.jpg",
    imageAlt: "דיקור סיני לכאבי צוואר וכתפיים בקליניקה בראשון לציון",
  },
  {
    slug: "digestive-issues",
    title: "דיקור סיני לבעיות עיכול",
    description: "סובלים מבעיות עיכול, גזים, נפיחות או מעי רגיז? דיקור סיני בשיטת מאסטר דונג מטפל בשורש הבעיה ומחזיר את מערכת העיכול לאיזון.",
    tag: "דיקור סיני",
    date: "מרץ 2026",
    readTime: "9",
    image: "/blog-digestive.jpg",
    imageAlt: "דיקור סיני לבעיות עיכול בקליניקה בראשון לציון",
  },
  {
    slug: "what-is-acupuncture",
    title: "מה זה דיקור סיני?",
    description: "כל מה שצריך לדעת לפני הטיפול הראשון - איך דיקור עובד, למי מתאים, מה מרגישים, וכמה טיפולים צריך.",
    tag: "דיקור סיני",
    date: "מרץ 2026",
    readTime: "5",
    image: "/blog-what-is-acupuncture.jpg",
    imageAlt: "מחטי דיקור סיני וכלי רפואה סינית - מדריך למתחילים",
  },
  {
    slug: "back-pain",
    title: "דיקור סיני לכאבי גב (2026)",
    description: "סובלים מכאבי גב? דיקור סיני מוכח מחקרית כטיפול יעיל. כל מה שצריך לדעת: סוגי כאב, מספר טיפולים, שיטת ד\"ר טאן, ושאלות נפוצות.",
    tag: "דיקור סיני",
    date: "מרץ 2026",
    readTime: "8",
    image: "/blog-back-pain.jpg",
    imageAlt: "דיקור סיני לכאבי גב תחתון - טיפול בקליניקה בראשון לציון",
  },
  {
    slug: "faq-complete",
    title: "שאלות ותשובות על רפואה סינית",
    description: "20 השאלות הנפוצות ביותר על דיקור סיני, שיאצו ורפואה משלימה - עם תשובות מקצועיות ומפורטות.",
    tag: "שאלות ותשובות",
    date: "מרץ 2026",
    readTime: "7",
    image: "/blog-faq.jpg",
    imageAlt: "קליניקה לרפואה סינית בראשון לציון",
  },
];

export default function BlogIndex() {
  return (
    <>
      <Navbar basePath="/" />

      <header style={{
        background: `linear-gradient(135deg, ${C.sage} 0%, ${C.sageDark} 100%)`,
        padding: "120px 24px 60px",
        textAlign: "center",
      }}>
        <nav style={{ marginBottom: "20px" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px" }}>
            דף הבית
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>מאמרים</span>
        </nav>
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 46px)", fontWeight: 800,
          color: "white", margin: "0 0 12px",
        }}>
          מאמרים ומידע מקצועי
        </h1>
        <p style={{
          fontSize: "17px", color: "rgba(255,255,255,0.7)",
          maxWidth: "500px", margin: "0 auto",
        }}>
          מידע מקצועי על רפואה סינית, דיקור, שיאצו ובריאות טבעית
        </p>
      </header>

      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 60px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {ARTICLES.map(a => (
            <a key={a.slug} href={`/blog/${a.slug}/`} className="blog-article-card" style={{
              background: "white", borderRadius: "20px",
              textDecoration: "none", display: "flex",
              overflow: "hidden",
              border: `1px solid ${C.sage}15`,
              boxShadow: "0 2px 12px rgba(44,42,38,0.04)",
              transition: "all 0.25s",
            }}>
              {/* תמונה */}
              <div className="blog-card-image" style={{
                width: "220px", minHeight: "200px", flexShrink: 0,
                backgroundImage: `url(${a.image})`,
                backgroundSize: "cover", backgroundPosition: "center",
              }} role="img" aria-label={a.imageAlt} />

              {/* תוכן */}
              <div style={{ padding: "24px 28px", flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span style={{
                    background: `${C.sage}15`, color: C.sage,
                    padding: "4px 14px", borderRadius: "20px",
                    fontSize: "12px", fontWeight: 700,
                  }}>
                    {a.tag}
                  </span>
                  <span style={{ fontSize: "12px", color: C.barkLight }}>
                    {a.date} · {a.readTime} דק׳
                  </span>
                </div>
                <h2 style={{
                  fontSize: "20px", fontWeight: 800, color: C.bark,
                  margin: "0 0 8px", lineHeight: 1.4,
                }}>
                  {a.title}
                </h2>
                <p style={{
                  fontSize: "14px", color: C.barkLight, margin: 0, lineHeight: 1.6,
                }}>
                  {a.description}
                </p>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  marginTop: "14px", fontSize: "14px", fontWeight: 700, color: C.sage,
                }}>
                  קראו עוד
                  <span style={{ fontSize: "16px" }}>←</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <ContactCTA />
      <Footer />
      <FloatingWA />
      <CookieConsent />
      <AccessibilityWidget />
    </>
  );
}
