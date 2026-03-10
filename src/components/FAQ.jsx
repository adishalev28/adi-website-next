"use client";
import { useState } from "react";
import Section from "./Section";
import WaSvg from "./WaSvg";
import { C, WA_URL } from "@/lib/constants";

const FAQ_ITEMS = [
  { q: "האם דיקור סיני כואב?", a: "בדרך כלל לא. המחטים דקות מאוד ורוב המטופלים מרגישים תחושה קלה של עקצוץ או כבדות - אבל לא כאב. רבים אפילו נרדמים במהלך הטיפול." },
  { q: "כמה טיפולים צריך?", a: "זה תלוי בבעיה ובמטופל. מצבים חריפים (כמו כאב גב חד) יכולים להשתפר תוך 3–5 טיפולים. מצבים כרוניים בדרך כלל דורשים סדרה ארוכה יותר. בטיפול הראשון נקבע יחד תוכנית מותאמת." },
  { q: "מה ההבדל בין דיקור לשיאצו?", a: "דיקור סיני משתמש במחטים דקות לאורך נקודות על מרידיאנים בגוף. שיאצו הוא עיסוי לחץ ידני באותן נקודות - ללא מחטים. שתי השיטות מבוססות על אותם עקרונות של רפואה סינית." },
  { q: "מה לצפות בטיפול הראשון?", a: "הטיפול הראשון כולל שיחה מקיפה על הבעיה, ההיסטוריה הרפואית ואורח החיים. לאחר מכן הטיפול עצמו - כ-60 דקות, לפעמים טיפה יותר. מומלץ להגיע לא רעבים ולא מלאים." },
  { q: "האם הטיפול מתאים לי אם אני לוקח תרופות?", a: "ברוב המקרים כן. רפואה סינית יכולה לפעול בצוותא עם טיפול קונבנציונלי. חשוב לציין את כל התרופות בשיחת המיון הראשונה." },
  { q: "איפה הקליניקה?", a: "הקליניקה ממוקמת במערב ראשון לציון. לכתובת המדויקת ולתיאום הגעה - שלחו הודעת WhatsApp ואחזור אליכם." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <Section id="faq" bg={C.sand}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>שאלות נפוצות</div>
          <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: 0 }}>יש לכם שאלות?</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} style={{
              background: "white", borderRadius: "16px",
              border: open === i ? `1.5px solid ${C.sage}50` : "1.5px solid transparent",
              boxShadow: open === i ? "0 4px 24px rgba(44,42,38,0.08)" : "0 1px 8px rgba(44,42,38,0.04)",
              overflow: "hidden", transition: "all 0.2s",
            }}>
              <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  padding: "20px 24px", display: "flex", justifyContent: "space-between",
                  alignItems: "center", gap: "16px", textAlign: "right",
                }}>
                <span style={{ fontSize: "16px", fontWeight: 700, color: C.bark, flex: 1 }}>{item.q}</span>
                <span style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: open === i ? C.sage : C.sand,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "all 0.3s", fontSize: "14px",
                  color: open === i ? "white" : C.barkLight,
                  transform: open === i ? "rotate(45deg)" : "none",
                }}>+</span>
              </button>
              <div style={{
                maxHeight: open === i ? "300px" : "0",
                overflow: "hidden", transition: "max-height 0.3s ease",
              }}>
                <div style={{ padding: "0 24px 20px", fontSize: "15px", color: C.barkLight, lineHeight: 1.8 }}>
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontSize: "15px", color: C.barkLight, marginBottom: "16px" }}>
            לא מצאתם תשובה? שלחו הודעה ואחזור אליכם
          </p>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="faq-wa-btn" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: C.bark, color: "white", padding: "12px 28px",
            borderRadius: "50px", fontSize: "14px", fontWeight: 700,
            textDecoration: "none",
          }}>
            <WaSvg size={18} />
            שאלו אותי ב-WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}
