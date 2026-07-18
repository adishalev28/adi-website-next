import { C } from "@/lib/constants";

/* הבטחת זמן תגובה - מוצגת מתחת לכפתורי הוואטסאפ המרכזיים.
   מפחיתה את החסם של "שלחתי הודעה, מתי יענו לי?".
   variant="dark" לרקעים כהים, "light" לרקעים בהירים. */
export default function ResponseTime({ variant = "light", style = {} }) {
  const isDark = variant === "dark";
  return (
    <p
      style={{
        fontSize: "13.5px",
        lineHeight: 1.7,
        margin: "14px auto 0",
        maxWidth: "420px",
        color: isDark ? "rgba(255,255,255,0.72)" : C.barkLight,
        textAlign: "center",
        ...style,
      }}
    >
      <strong style={{ color: isDark ? "rgba(255,255,255,0.92)" : C.bark, fontWeight: 700 }}>
        בדרך כלל עונה תוך כמה דקות.
      </strong>{" "}
      אם אני באמצע טיפול - אחזור אליכם מיד בסיומו.
    </p>
  );
}
