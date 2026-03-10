"use client";
import Section from "./Section";
import { C } from "@/lib/constants";

/* ─── Service SVG Icons ─── */
const AcupunctureIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round">
    <line x1="10" y1="6" x2="14" y2="28" /><circle cx="9.5" cy="4" r="2" fill={C.sage} stroke="none" />
    <line x1="22" y1="6" x2="18" y2="28" /><circle cx="22.5" cy="4" r="2" fill={C.sage} stroke="none" />
  </svg>
);
const ShiatsuIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 28c0-5-3-8-3-13a3 3 0 016 0v-3a3 3 0 016 0v-2a3 3 0 016 0v8" />
    <path d="M23 18c2-2 4-2 5 0s-1 6-5 10H8" />
  </svg>
);
const HerbsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 28V8" />
    <path d="M16 12c-5-2-10-1-11 3 4 0 8-1 11-3" />
    <path d="M16 20c5-2 10-1 11 3-4 0-8-1-11-3" />
    <path d="M16 7c-3-3-7-3-8 0 3 1 6 0 8 0" />
  </svg>
);
const CuppingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22c0-10 3-16 8-16s8 6 8 16" />
    <line x1="6" y1="22" x2="26" y2="22" />
    <path d="M10 25c3 3 9 3 12 0" />
  </svg>
);

const SERVICES = [
  { id: "svc-acupuncture", icon: <AcupunctureIcon />, title: "דיקור סיני", href: "/dikur-sini/", text: "שיטה עתיקה המכוונת לשיפור זרימת האנרגיה בגוף, הפגת כאבים וטיפול בבעיות רפואיות שונות. הטיפול מותאם אישית לכל מטופל ומשפיע לטווח ארוך על הבריאות הכללית." },
  { id: "svc-shiatsu", icon: <ShiatsuIcon />, title: "שיאצו", href: "/shiatsu/", text: "לחיצות ממוקדות לאורך מרידיאנים בגוף, במטרה לשחרר מתח, לשפר את זרימת הדם ולהקל על כאבים. שיאצו הוא פתרון טבעי ויעיל לשיפור הבריאות הפיזית והרגשית." },
  { id: "svc-herbs", icon: <HerbsIcon />, title: "צמחי מרפא סיניים", href: "/herbs/", text: "צמחי מרפא סיניים, הנבחרים בקפידה על פי הצרכים האישיים של כל מטופל. הצמחים תורמים לשיפור המערכת החיסונית, הפחתת דלקות ושיפור הבריאות הכללית בצורה טבעית." },
  { id: "svc-cupping", icon: <CuppingIcon />, title: "כוסות רוח", href: "/cupping/", text: "שימוש בכוסות רוח לשיפור זרימת הדם ולהפחתת כאבים ודלקת. הטיפול, המבוצע באמצעות יצירת ואקום, מסייע בהקלה על כאבים כרוניים ובשיפור התחושה הכללית." },
];

export default function Services() {
  return (
    <Section id="services" bg={C.sand} style={{ padding: "100px 24px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>השירותים שלי</div>
          <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px" }}>שיטות הטיפול</h2>
          <p style={{ fontSize: "16px", color: C.barkLight, maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            בקליניקה בראשון לציון אני משלב בין שיטות רפואה סינית מסורתיות לטיפול מותאם אישית לכל מטופל
          </p>
        </div>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {SERVICES.map(s => (
            <div key={s.title} id={s.id} className="service-card" style={{
              background: "white", borderRadius: "20px", padding: "32px 28px",
              boxShadow: "0 2px 24px rgba(44,42,38,0.06)",
              cursor: "default", scrollMarginTop: "100px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "50%",
                  background: `${C.sage}15`, border: `1px solid ${C.sage}25`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: C.bark, margin: 0 }}>{s.title}</h3>
              </div>
              <p style={{ fontSize: "14px", color: C.barkLight, lineHeight: 1.8, margin: "0 0 16px" }}>{s.text}</p>
              <a href={s.href} className="service-read-more" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "14px", fontWeight: 700, color: C.sage,
                textDecoration: "none",
              }}>
                קראו עוד
                <span style={{ fontSize: "18px" }}>←</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
