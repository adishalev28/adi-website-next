import { C } from "@/lib/constants";

export default function BlogMidCTA({ topic = "הבעיה הזו", question }) {
  const headline = question || `סובלים מ${topic}? אני יכול לעזור.`;

  return (
    <aside style={{
      background: `linear-gradient(135deg, ${C.sand} 0%, ${C.cream} 100%)`,
      border: `1px solid ${C.sage}30`,
      borderRight: `4px solid ${C.gold}`,
      borderRadius: "12px",
      padding: "28px 24px",
      margin: "36px 0",
      textAlign: "center",
    }}>
      <h3 style={{
        fontSize: "20px",
        fontWeight: 800,
        color: C.bark,
        margin: "0 0 10px",
        lineHeight: 1.4,
      }}>
        {headline}
      </h3>

      <p style={{
        fontSize: "15px",
        color: C.barkLight,
        lineHeight: 1.7,
        margin: "0 0 20px",
        maxWidth: "520px",
        marginInline: "auto",
      }}>
        בקליניקה שלי במערב ראשון לציון אני משלב דיקור סיני, שיאצו, כוסות רוח וצמחי מרפא לפי המקרה.
        מוזמנים להיכנס לדף הבית, לקרוא קצת עליי ועל השיטה.
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
      }}>
        להכיר את עדי ואת הקליניקה
        <span style={{ fontSize: "16px" }}>←</span>
      </a>
    </aside>
  );
}
