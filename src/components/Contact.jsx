"use client";
import Section from "./Section";
import WaSvg from "./WaSvg";
import { C, WA_URL } from "@/lib/constants";

export default function Contact() {
  return (
    <Section id="contact" bg={C.bark} style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: C.goldLight, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>צור קשר</div>
        <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: "white", margin: "0 0 16px" }}>מוכנים להתחיל?</h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 48px" }}>
          צרו קשר לתיאום תור בקליניקה לרפואה סינית בראשון לציון.<br />אשמח לענות על כל שאלה ולהתאים לכם את הטיפול המתאים ביותר.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "stretch" }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="contact-btn contact-wa-btn" style={{
            background: "#25D366", color: "white", padding: "16px 40px",
            borderRadius: "50px", fontSize: "16px", fontWeight: 800,
            textDecoration: "none", display: "flex", alignItems: "center", gap: "10px",
            boxShadow: "0 4px 24px rgba(37,211,102,0.35)",
          }}>
            <WaSvg size={22} />
            שלחו הודעה ב-WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}
