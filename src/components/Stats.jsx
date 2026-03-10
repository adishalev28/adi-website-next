import { C } from "@/lib/constants";

export default function Stats() {
  return (
    <div style={{
      background: C.bark, padding: "20px 24px",
    }}>
      <div className="stats-grid" style={{
        maxWidth: "600px", margin: "0 auto",
        display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap",
      }}>
        {[["8+", "שנות ניסיון"], ["+500", "מטופלים מרוצים"], ["4", "שיטות טיפול"]].map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "26px", fontWeight: 900, color: C.goldLight }}>{num}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "2px", letterSpacing: "1px" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
