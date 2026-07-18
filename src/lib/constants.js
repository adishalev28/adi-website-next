/* ─── Color Palette — warm nature tones matching the clinic ─── */
export const C = {
  cream:       "#FAF8F3",
  sand:        "#EDE8DF",
  sage:        "#7A8B6A",
  sageDark:    "#5B6B4A",
  gold:        "#C4A265",
  goldLight:   "#D4B87A",
  bark:        "#2C2A26",
  barkLight:   "#7B7570",
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
