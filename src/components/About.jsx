"use client";
import Image from "next/image";
import Section from "./Section";
import { C } from "@/lib/constants";

export default function About() {
  return (
    <Section id="about" bg={C.sand} style={{ padding: "20px 24px 60px" }}>
      <div className="about-grid">
        <div className="about-photo">
          <Image
            src="/adi-portrait.jpg"
            alt="עדי שלו - מטפל ברפואה סינית מוסמך, בוגר מכללת רידמן, ראשון לציון"
            width={460}
            height={575}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
          />
        </div>
        <div>
          <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px", textTransform: "uppercase" }}>
            קצת עליי
          </div>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px", lineHeight: 1.2 }}>
            עדי שלו
          </h2>
          <div className="about-divider" style={{ width: "40px", height: "3px", background: C.gold, borderRadius: "2px", marginBottom: "24px" }} />
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
            בוגר <strong style={{ color: C.bark }}>מכללת רידמן</strong> לרפואה סינית, עם למעלה מ-8 שנות ניסיון קליני ומעל 500 מטופלים. במקביל לקליניקה הפרטית אני מטפל ב<strong style={{ color: C.bark }}>מכבי טבעי</strong> מעל 6 שנים בדיקור סיני ושיאצו. מתמחה בדיקור, שיאצו, כוסות רוח וצמחי מרפא סיניים.
          </p>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
            בקליניקה שלי ב<strong style={{ color: C.bark }}>ראשון לציון</strong> אני מעניק לכל מטופל יחס אישי ומקצועי. בטיפול הראשון אני מבצע אבחון מעמיק - שיחה, בדיקת דופק ולשון - ובונה תוכנית טיפול מותאמת שמשלבת בין השיטות השונות לפי הצורך.
          </p>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 32px" }}>
            המטופלים שלי מגיעים עם כאבי גב, מיגרנות, מתח נפשי, בעיות שינה ועוד - ורבים מהם חווים הקלה משמעותית כבר אחרי מספר טיפולים בודדים. המטרה שלי היא לא רק להקל בכאב, אלא לטפל בשורש הבעיה ולשפר את איכות החיים לאורך זמן.
          </p>
          <div className="about-text-tags" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["דיקור סיני", "שיאצו", "צמחי מרפא", "כוסות רוח"].map(tag => (
              <span key={tag} style={{
                background: `${C.sage}15`, color: C.sageDark,
                padding: "7px 18px", borderRadius: "50px", fontSize: "13px", fontWeight: 600,
                border: `1px solid ${C.sage}30`,
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
