import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import ContactCTA from "@/components/ContactCTA";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { C } from "@/lib/constants";

export default function ServiceLayout({ children, otherServices = [] }) {
  return (
    <>
      <Navbar basePath="/" />
      <div>
        {children}
      </div>

      {otherServices.length > 0 && (
        <section style={{ background: C.sand, padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 32px" }}>
              שירותים נוספים
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              {otherServices.map(s => (
                <a key={s.href} href={s.href} className="other-service-link" style={{
                  background: "white", border: `1.5px solid ${C.sage}30`,
                  color: C.bark, padding: "12px 28px", borderRadius: "50px",
                  fontSize: "15px", fontWeight: 700, textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(44,42,38,0.04)",
                  transition: "all 0.2s",
                }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
      <Footer />
      <FloatingWA />
      <CookieConsent />
      <AccessibilityWidget />
    </>
  );
}
