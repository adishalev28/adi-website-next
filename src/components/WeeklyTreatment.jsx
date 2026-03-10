"use client";
import Section from "./Section";
import { C } from "@/lib/constants";

const WEEKLY_TREATMENT = {
  title: "כאבי צוואר כרוניים",
  patient: "מטופלת בת 42",
  description: "הגיעה עם כאבי צוואר כרוניים שלא הגיבו לפיזיותרפיה. שילבתי דיקור סיני בנקודות מקומיות עם כוסות רוח לשחרור השרירים התפוסים באזור הצוואר והכתפיים.",
  result: "אחרי 3 טיפולים דיווחה על ירידה משמעותית בכאב ושיפור בטווח התנועה.",
  methods: ["דיקור סיני", "כוסות רוח"],
  date: "מרץ 2026",
};

export default function WeeklyTreatment() {
  const t = WEEKLY_TREATMENT;
  return (
    <Section bg={C.cream} style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>מהקליניקה שלי</div>
        <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 48px" }}>הצצה לטיפול אחרון</h2>

        <div style={{
          background: "white", borderRadius: "20px", padding: "40px 32px",
          boxShadow: "0 4px 32px rgba(44,42,38,0.06)",
          border: `1px solid ${C.sand}`, textAlign: "right",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "50%",
              background: `${C.sage}15`, display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
                <rect x="8" y="2" width="8" height="4" rx="1"/>
                <path d="M9 14l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: C.bark }}>{t.title}</div>
              <div style={{ fontSize: "13px", color: C.barkLight }}>{t.patient}</div>
            </div>
          </div>

          <p style={{ fontSize: "15px", color: C.barkLight, lineHeight: 1.8, margin: "0 0 16px" }}>
            {t.description}
          </p>
          <p style={{ fontSize: "15px", color: C.sage, lineHeight: 1.8, margin: "0 0 24px", fontWeight: 600 }}>
            {t.result}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {t.methods.map(m => (
                <span key={m} style={{
                  background: `${C.sage}12`, color: C.sageDark,
                  padding: "6px 16px", borderRadius: "50px", fontSize: "13px", fontWeight: 600,
                  border: `1px solid ${C.sage}25`,
                }}>{m}</span>
              ))}
            </div>
            <span style={{ fontSize: "13px", color: C.barkLight }}>{t.date}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
