import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import ContactCTA from "@/components/ContactCTA";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { C, WA_URL } from "@/lib/constants";
import Section from "@/components/Section";

export default function ArticleLayout({ title, subtitle, date, readTime, lastUpdated, children, relatedArticles = [] }) {
  return (
    <>
      <Navbar basePath="/" />

      {/* Hero */}
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
          <a href="/blog/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px" }}>
            מאמרים
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>{title}</span>
        </nav>

        <h1 style={{
          fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800,
          color: "white", maxWidth: "700px", margin: "0 auto 12px",
          lineHeight: 1.3,
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: "17px", color: "rgba(255,255,255,0.75)",
            maxWidth: "600px", margin: "0 auto 20px", lineHeight: 1.6,
          }}>
            {subtitle}
          </p>
        )}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
          {date && <span>{date}</span>}
          {readTime && <span>· {readTime} דקות קריאה</span>}
          {lastUpdated && <span>· עודכן: {lastUpdated}</span>}
        </div>
      </header>

      {/* Article content */}
      <article className="blog-article" style={{
        maxWidth: "740px", margin: "0 auto",
        padding: "48px 24px 60px",
        fontSize: "16px", lineHeight: 1.8, color: C.bark,
      }}>
        {children}

        {/* Inline CTA — appears at end of every article */}
        <div style={{
          background: `linear-gradient(135deg, ${C.sage}, ${C.sageDark})`,
          borderRadius: '16px',
          padding: '32px 24px',
          textAlign: 'center',
          marginTop: '40px',
        }}>
          <h2 style={{ color: 'white', fontSize: '22px', margin: '0 0 10px', fontWeight: 700 }}>
            רוצה לדבר על הטיפול?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', margin: '0 0 20px', fontSize: '15px' }}>
            שלח הודעה ואחזור אליך בהקדם. ללא התחייבות.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'white',
              color: C.sageDark,
              fontWeight: 700,
              fontSize: '16px',
              padding: '12px 32px',
              borderRadius: '30px',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            📲 WhatsApp — התייעצות מהירה
          </a>
        </div>
      </article>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <Section bg={C.sand}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 32px" }}>
              מאמרים נוספים
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
              {relatedArticles.map(a => (
                <a key={a.href} href={a.href} className="related-article-card" style={{
                  background: "white", borderRadius: "16px", padding: "24px",
                  textDecoration: "none", textAlign: "right",
                  border: `1px solid ${C.sage}15`,
                  boxShadow: "0 2px 12px rgba(44,42,38,0.04)",
                  transition: "all 0.2s",
                }}>
                  <p style={{ fontSize: "13px", color: C.sage, fontWeight: 600, margin: "0 0 6px" }}>
                    {a.tag}
                  </p>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: C.bark, margin: 0, lineHeight: 1.4 }}>
                    {a.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </Section>
      )}

      <ContactCTA title="רוצים לדעת עוד?" subtitle="צרו קשר ונשמח לענות על כל שאלה" />
      <Footer />
      <FloatingWA />
      <CookieConsent />
      <AccessibilityWidget />
    </>
  );
}
