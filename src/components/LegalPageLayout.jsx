import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { C } from "@/lib/constants";

export default function LegalPageLayout({ title, lastUpdated, children }) {
  return (
    <>
      <Navbar />

      <header style={{
        background: `linear-gradient(135deg, ${C.sage} 0%, ${C.sageDark} 100%)`,
        padding: "120px 24px 50px",
        textAlign: "center",
      }}>
        <nav style={{ marginBottom: "20px" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px" }}>
            דף הבית
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>{title}</span>
        </nav>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800,
          color: "white", margin: "0 0 12px",
        }}>
          {title}
        </h1>
        {lastUpdated && (
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: 0 }}>
            עודכן לאחרונה: {lastUpdated}
          </p>
        )}
      </header>

      <article className="legal-article" style={{
        maxWidth: "740px", margin: "0 auto",
        padding: "48px 24px 60px",
        fontSize: "16px", lineHeight: 1.8, color: C.bark,
      }}>
        {children}
      </article>

      <Footer />
      <FloatingWA />
      <CookieConsent />
      <AccessibilityWidget />
    </>
  );
}
