import { C } from "@/lib/constants";

/* בלוק "בקצרה" לדפי השירות.
   מקביל לבלוק שכבר קיים בכל 16 מאמרי הבלוג, ונועד לתת תשובה ישירה
   בפסקה הראשונה - גם לקורא שסורק, וגם למנועי חיפוש ומודלים
   ששולפים ממנה קטע תשובה. */
export default function AnswerBlock({ children }) {
  return (
    <p
      style={{
        maxWidth: "960px",
        margin: "0 auto 36px",
        background: "#F3F1EA",
        borderRight: `4px solid ${C.sageDark}`,
        padding: "20px 22px",
        borderRadius: "8px",
        fontSize: "16px",
        color: C.barkLight,
        lineHeight: 1.9,
      }}
    >
      <strong style={{ color: C.bark }}>בקצרה:</strong> {children}
    </p>
  );
}
