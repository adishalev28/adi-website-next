"use client";
import { preload } from "react-dom";
import { C, WA_URL } from "@/lib/constants";
import WaSvg from "./WaSvg";

export default function Hero() {
  // טעינה מוקדמת של תמונת הרקע כבר מה-HTML. בלי זה התמונה למובייל
  // מתגלה רק אחרי ההידרציה - עיכוב של כ-2 שניות ב-LCP (PageSpeed 4.10.2026).
  preload("/hero-mobile.jpg", { as: "image", media: "(max-width: 767px)", fetchPriority: "high" });
  preload("/clinic-room.jpg", { as: "image", media: "(min-width: 768px)", fetchPriority: "high" });

  // הרקע, השכבות והריפוד נבחרים לפי גודל מסך ב-globals.css (.hero-*),
  // כדי שהדף ייראה כבר מה-HTML של השרת.
  return (
    <section className="hero-section" style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div className="hero-bg" />

      <div className="hero-overlay" />

      {/* שכבת הכהיה מקומית מאחורי הטקסט בלבד.
          הטקסט הלבן על התצלום הגיע ליחס 2.66 בחציון אזור הכותרת ונכשל בתקן.
          במקום להכהות את כל התצלום, ההכהיה מרוכזת מאחורי גוש הטקסט ודוהה
          לשקיפות מלאה לקראת השוליים - כך התצלום נשאר חי מסביב. */}
      <div className="hero-text-shade" />

      <div className="hero-content">
        <div style={{
          display: "inline-block", marginBottom: "16px",
          fontSize: "clamp(13px, 2.5vw, 18px)", color: "rgba(255,255,255,0.9)", fontWeight: 500,
          letterSpacing: "2px", whiteSpace: "nowrap",
        }}>
          ✦ רפואה סינית מסורתית · ראשון לציון ✦
        </div>
        <h1 style={{
          fontSize: "clamp(42px, 7vw, 68px)", fontWeight: 900,
          color: C.goldLight, margin: "0 0 8px", lineHeight: 1.1,
          textShadow: "0 2px 20px rgba(0,0,0,0.15)",
        }}>
          <span style={{ display: "block" }}>עדי שלו</span>{" "}
          <span style={{
            display: "block",
            fontSize: "clamp(20px, 3.2vw, 28px)",
            fontWeight: 600,
            color: "rgba(255,255,255,0.92)",
            marginTop: "10px",
            letterSpacing: "0.5px",
          }}>
            דיקור סיני בראשון לציון
          </span>
        </h1>
        <p style={{
          fontSize: "clamp(16px, 2.4vw, 20px)", fontWeight: 500,
          color: "rgba(255,255,255,0.8)", margin: "14px 0 28px",
          letterSpacing: "0.5px",
        }}>
          מטפל ברפואה סינית · שיאצו · כוסות רוח · צמחי מרפא
        </p>

        {/* Treatment pills */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px",
          margin: "0 auto 36px", maxWidth: "480px",
        }}>
          {[
            { label: "דיקור סיני", href: "#svc-acupuncture" },
            { label: "שיאצו", href: "#svc-shiatsu" },
            { label: "כוסות רוח", href: "#svc-cupping" },
            { label: "צמחי מרפא", href: "#svc-herbs" },
          ].map(t => (
            <a key={t.label} href={t.href} className="hero-pill" style={{
              background: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "50px", padding: "8px 20px",
              fontSize: "14px", color: "rgba(255,255,255,0.9)", fontWeight: 500,
              textDecoration: "none",
            }}>{t.label}</a>
          ))}
        </div>

        <a id="hero-cta" href={WA_URL} target="_blank" rel="noreferrer" className="hero-cta-btn" style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "linear-gradient(135deg, #27793B, #206233)",
          color: "white", padding: "18px 44px",
          borderRadius: "50px", fontSize: "16px", fontWeight: 700,
          textDecoration: "none",
          boxShadow: "0 6px 32px rgba(52,168,83,0.45)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}>
          <WaSvg size={20} />
          ליצירת קשר
        </a>

      </div>
    </section>
  );
}
