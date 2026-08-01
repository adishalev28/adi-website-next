import { C, waUrl } from "@/lib/constants";
import WaSvg from "./WaSvg";

export default function ContactCTA({ title = "רוצים לקבוע תור?", subtitle = "צרו קשר לתיאום תור בקליניקה לרפואה סינית בראשון לציון", waMessage }) {
  return (
    <section style={{
      background: C.bark, padding: "80px 24px", textAlign: "center",
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white", margin: "0 0 16px" }}>
          {title}
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 36px" }}>
          {subtitle}
        </p>
        <a href={waUrl(waMessage)} target="_blank" rel="noreferrer" className="cta-wa-btn" style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          /* טקסט כהה ולא לבן: לבן על ירוק הוואטסאפ נותן יחס 1.98 ונכשל בתקן.
             הירוק נשמר במדויק לזיהוי המותג, והטקסט הכהה מגיע ל-7.22.
             האייקון יורש את הצבע דרך currentColor. */
          background: "#25D366", color: C.bark, padding: "16px 40px",
          borderRadius: "50px", fontSize: "16px", fontWeight: 800,
          textDecoration: "none",
          boxShadow: "0 4px 24px rgba(37,211,102,0.35)",
        }}>
          <WaSvg size={22} />
          שלחו הודעה ב-WhatsApp
        </a>
      </div>
    </section>
  );
}
