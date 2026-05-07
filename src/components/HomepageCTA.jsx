import Image from "next/image";
import { C } from "@/lib/constants";

export default function HomepageCTA() {
  return (
    <section style={{
      background: C.cream,
      padding: "60px 24px",
      borderTop: `1px solid ${C.sage}20`,
    }}>
      <div className="homepage-cta-card" style={{
        maxWidth: "780px",
        margin: "0 auto",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 6px 32px rgba(44,42,38,0.08)",
        overflow: "hidden",
        border: `1px solid ${C.sage}15`,
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        alignItems: "stretch",
      }}>
        <div style={{
          position: "relative",
          minHeight: "240px",
          background: C.sand,
        }}>
          <Image
            src="/adi-portrait.jpg"
            alt="עדי שלו - מטפל ברפואה סינית בקליניקה בראשון לציון"
            fill
            sizes="200px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div style={{ padding: "32px 28px" }}>
          <div style={{
            color: C.gold,
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}>
            רוצים להכיר אותי?
          </div>

          <h2 style={{
            fontSize: "24px",
            fontWeight: 800,
            color: C.bark,
            margin: "0 0 12px",
            lineHeight: 1.3,
          }}>
            אני עדי שלו, מטפל ברפואה סינית בראשון לציון
          </h2>

          <p style={{
            fontSize: "15px",
            color: C.barkLight,
            lineHeight: 1.7,
            margin: "0 0 22px",
          }}>
            בוגר מכללת רידמן, מטפל גם במכבי טבעי מעל 6 שנים. מתמחה בשיטת מאסטר טונג ובשיטת ד&quot;ר טאן. בואו לקרוא עליי, לראות מה אומרים מטופלים שלי, ולבחור את הטיפול שמתאים לכם.
          </p>

          <a href="/" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: C.sageDark,
            color: "white",
            padding: "12px 28px",
            borderRadius: "30px",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.2s",
          }}>
            כניסה לדף הבית
            <span style={{ fontSize: "18px" }}>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
