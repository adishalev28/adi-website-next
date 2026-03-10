"use client";
import Section from "./Section";
import { C } from "@/lib/constants";

const CONDITIONS = [
  "כאבי גב, צוואר וכתפיים", "סיאטיקה ופריצות דיסק", "כאב מקרין",
  "כאבי ברכיים ומרפק", "כתף קפואה", "מיגרנות וכאבי ראש חוזרים",
  "מתח נפשי וחרדה", "קושי להירגע", "בעיות שינה",
  "עייפות כרונית", "נפיחות ועצירות", "בעיות עיכול",
  "איזון הורמונלי ופריון",
];

export default function ForWhom() {
  return (
    <Section bg={C.cream} style={{ paddingTop: "60px" }} id="for-whom">
      <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>למי זה מתאים</div>
        <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px" }}>במה רפואה סינית יכולה לעזור?</h2>
        <p style={{ fontSize: "16px", color: C.barkLight, margin: "0 0 48px", lineHeight: 1.7, maxWidth: "560px", marginInline: "auto" }}>
          רפואה סינית מטפלת במגוון רחב של מצבים - הנה חלק מהנפוצים. לא מצאתם את מה שאתם מחפשים? צרו קשר ונבדוק יחד
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          {CONDITIONS.map(c => (
            <span key={c} className="condition-pill" style={{
              background: "white", border: `1.5px solid ${C.sage}30`,
              color: C.bark, padding: "10px 22px", borderRadius: "50px",
              fontSize: "14px", fontWeight: 600,
              boxShadow: "0 2px 8px rgba(44,42,38,0.04)",
            }}>{c}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}
