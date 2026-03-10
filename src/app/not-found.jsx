import { C } from "@/lib/constants";

export default function NotFound() {
  return (
    <div style={{
      direction: "rtl", background: C.cream, color: C.bark,
      display: "flex", alignItems: "center", justifyContent: "center",
      minHeight: "100vh", padding: "24px", textAlign: "center",
    }}>
      <div style={{ maxWidth: "480px" }}>
        <div style={{ fontSize: "120px", fontWeight: 800, color: C.sage, lineHeight: 1, marginBottom: "8px" }}>404</div>
        <h1 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "12px" }}>הדף לא נמצא</h1>
        <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.7, marginBottom: "32px" }}>
          מצטערים, הדף שחיפשתם לא קיים או שהכתובת שגויה. אתם מוזמנים לחזור לדף הראשי.
        </p>
        <a href="/" style={{
          display: "inline-block", background: C.sage, color: "white",
          padding: "14px 36px", borderRadius: "50px", textDecoration: "none",
          fontSize: "16px", fontWeight: 700,
        }}>
          חזרה לדף הראשי
        </a>
      </div>
    </div>
  );
}
