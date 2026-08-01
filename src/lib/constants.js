/* ─── Color Palette — warm nature tones matching the clinic ─── */
export const C = {
  cream:       "#FAF8F3",
  sand:        "#EDE8DF",
  sage:        "#7A8B6A",
  /* sageDark - הגוון לטקסט ולרקעים עם טקסט לבן.
     הועמק מ-#5B6B4A ל-#586747 כי על גוון שקוף מעל רקע החול
     הוא נתן 4.37 בלבד. עכשיו 4.62 שם ו-6.09 על לבן. */
  sageDark:    "#586747",
  /* sageDeep - העצירה הכהה של גרדיאנט הכותרות.
     קודם הגרדיאנט רץ מ-sage הבהיר, ושם טקסט לבן דהוי הגיע
     ל-2.06 בלבד. עכשיו הוא רץ מ-sageDark לכאן. */
  sageDeep:    "#3F4A33",
  gold:        "#C4A265",
  goldLight:   "#D4B87A",
  /* goldDark - לזהב שמשמש כטקסט על רקע בהיר בלבד (קרם/חול/לבן).
     C.gold נותן יחס ניגודיות 1.98 עד 2.41 על הרקעים הבהירים ונכשל בתקן,
     והגוון הזה עובר 4.5 בשלושתם. על רקע כהה להמשיך עם gold/goldLight. */
  goldDark:    "#7A602E",
  bark:        "#2C2A26",
  /* barkLight - צבע גוף הטקסט. הועמק מ-#7B7570 שנתן 3.72 בלבד
     על רקע החול (נכשל בתקן) ל-#6B6560 שעובר בכל הרקעים הבהירים. */
  barkLight:   "#6B6560",
  warm:        "#BFA07A",
};

export const PHONE = "972528029031";

/* ─── הודעת פתיחה לוואטסאפ ───
   ההודעה נוסחה כשאלה ולא כקביעת תור: מטופל מתלבט שנתקל ב"אשמח לקבוע תור"
   מרגיש מחויב עוד לפני ששאל, וחלק נוטשים בשלב הזה.
   waUrl(topic) מייצר הודעה לפי הדף - כך הפנייה מרגישה טבעית,
   וגם רואים מיד מאיזה תוכן הגיע הפונה. */
const WA_DEFAULT = "שלום עדי, רציתי לשאול לגבי טיפול 🙂";

export const waUrl = (message = WA_DEFAULT) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

export const WA_TEXT = encodeURIComponent(WA_DEFAULT);
export const WA_URL = waUrl();
