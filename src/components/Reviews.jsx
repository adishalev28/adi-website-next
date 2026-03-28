"use client";
import { useState, useRef, useEffect } from "react";
import Section from "./Section";
import { C } from "@/lib/constants";

const REVIEWS = [
  { text: "הגעתי לעדי אחרי שעברתי אצל מספר נוירולוגים בניסיון לטפל במיגרנות שהלכו והחמירו. המיגרנות היו בתדירות של 3-4 פעמים בשבוע. כעבור מספר טיפולים קטן יכולתי לראות כבר ירידה משמעותית ובסוף הפסקתי לחלוטין לסבול ממיגרנות. עדי תמיד סבלני, מקשיב ומסביר כל דבר שעושה.", name: "Itamar Burger", sub: "מיגרנות כרוניות" },
  { text: "אני כותב את ההמלצה הזו מהלב – על עדי שלו, מטפל בדיקור סיני יוצא דופן. הגעתי אליו בתקופה מאוד לא פשוטה, לאחר שיתוק פנים (פציאליס), עם הרבה חשש, חוסר וודאות וטראומה לא קלה. כבר אחרי 4-5 טיפולים חוויתי שיפור מדהים שלא האמנתי שיכול לקרות בזמן כל כך קצר. אבל מעבר לתוצאות המרשימות – מה שבאמת מיוחד אצל עדי זה הלב, הרגישות והיחס האנושי הנדיר. בכל טיפול הרגשתי שאני לא רק מטופל – אלא שמקשיבים לי, רואים אותי ומחזקים אותי. הטיפולים הפכו עבורי מרגעים של פחד לחוויה מרגיעה, מחזקת ואפילו מרגשת. עדי לא רק מטפל – הוא שליח של ריפוי. ממליץ עליו מכל הלב והנשמה לכל מי שזקוק לטיפול מקצועי עם נשמה גדולה.", name: "שיקו שרף", sub: "שיתוק פנים (פציאליס)" },
  { text: "הגעתי לעדי לטיפול בדיקור ושיאצו לפני שנים וגיליתי מטפל נדיר. מעבר להיותו מקצועי ומוכשר ברמות הגבוהות ביותר, הוא אנושי וקשוב בצורה יוצאת דופן. אני תמיד יוצאת מהקליניקה בהרגשה טובה יותר, פיזית ונפשית. ממליצה בחום לכל מי שמחפש ידיים טובות ולב רחב!", name: "סופיה טרסוב", sub: "דיקור ושיאצו" },
  { text: "אני ממליצה מאוד לקבל טיפול דיקור אצל עדי. אני עושה טיפולי דיקור קבועים אחת לשבוע על ידו. עדי מטפל נעים הליכות, מקצועי, אינו מתעצל לרגע אם יש צורך בתוספת מחט, הכל באדיבות יסודיות ומקצועיות. עדי מגלה ידע עמוק במקצוע אותו בחר ואני מרגישה את תוצאות הטיפול הרבה זמן. יישר כוח עדי! אני מקווה שתלווה אותי עוד הרבה זמן!", name: "ריטה שלחון", sub: "דיקור קבוע" },
  { text: "אני חיפשתי מישהו שיוכל לתת לי מענה להרגעת הגוף והנפש תוך שחרור השרירים ודיקור. ואחרי הרבה חיפושים הגעתי לעדי עם ידי הזהב, כל טיפול הוא התמסרות טוטלית לרצונות המטופל, יודע בדיוק באיזה מקומות לטפל ואותי מוציא כמו חדשה. עדי מודה על היום בו הכרתי את ידיך. מחכה ומצפה לטיפול הבא. תודה רבה", name: "מלי דיין", sub: "שחרור שרירים ודיקור" },
  { text: "אני רוצה להמליץ על עדי המטפל ברפואה סינית. הגעתי אליו לאחר נסיון עם מטפלים אחרים ועדי הכי מיומן ובקיא ברפואה הסינית. הוא מטפל בשלל שיטות עם טונות נסיון ועוזר לי מאוד בבעיות האורתופדיות שיש לי. אני מטופלת בדיקור סיני ובכוסות רוח, והטיפול מאוד יעיל. בזכותו אני מצליחה לתפקד כרגיל והולכת מעל 10 ק\"מ ביום, בנוסף לטיולים אתגריים בטבע. ממליצה עליו מאוד.", name: "Claude Tut", sub: "בעיות אורתופדיות" },
  { text: "הגעתי לעדי לטיפול בכאבי גב חוזרים, תוך 3 טיפולים הרגשתי שיפור משמעותי ויכולתי לחזור לפעילות גופנית! ממולץ ממולץ ממולץ!!", name: "Ron Ben Bachar", sub: "כאבי גב" },
  { text: "הגעתי לעדי אחרי תקופה עמוסה במילואים ובחיים עם עייפות מתמשכת וכאבי שכמו וגב כרוניים שהשפיעו עליי. עדי עזר לי גם עם הכאב, איזון הסטרס ובעיקר השינה שלי השתפרה פלאים!! מומלץ בחום", name: "eliya bitton", sub: "עייפות וכאבי גב" },
  { text: "אני הגעתי לעדי כדי לעשות דיקור לכתף ולאחר שיחה איתו הבנתי שגם ניתן לעשות איזון הורמונלי. אחרי 3 טיפולים נכנסתי להריון! היום אני בחודש שמיני וכל שבוע אני מגיעה אליו. הטיפול מסור ומקצועי מאוד, ממליצה מאוד!", name: "מלכה יחייס מדר", sub: "איזון הורמונלי והריון" },
  { text: "בתור מטופל קבוע אצל עדי, אני מאוד ממליץ עליו. הטיפולים בשיאצו ודיקור מותאמים אישית, נעשים ברוגע וביטחון ונותנים תחושה שאתה בידיים טובות באמת. הקליניקה נעימה, האווירה רגועה והיחס אישי מכבד ומקצועי מאוד.", name: "Mark Shvartsman", sub: "שיאצו ודיקור" },
  { text: "אני מכיר את עדי מעל שנתיים מגיע אליו לטיפולים פעם בשבוע באופן קבוע, חוץ מזה שהבן אדם מקצוען וידע לטפל בדיוק בבעיה ולהגיע לנקודות הנכונות הוא גם איש מאוד נחמד ונעים שכיף לבלות אצלו את הזמן הזה. ממליץ בחום!", name: "Roman Khit", sub: "טיפולים קבועים" },
  { text: "לעדי היקר, ברצוני להודות לך מקרב לב על הטיפול המסור, המקצועיות והאכפתיות שאתה מעניק לאורך השנים. הטיפול שלך מהווה עבורי עוגן של רוגע, הקלה ובריאות. תודה על הסבלנות והידיים הטובות. בהערכה רבה, נטלי", name: "Natalie Huzman Maidanik", sub: "טיפול לאורך שנים" },
  { text: "אני מטופל בשיאצו אצל עדי בקביעות כבר מספר חודשים ומרגיש שיפור גדול בכאבי הכתפיים, השכמות, הצואר והעורף שבגללם הגעתי אליו. קסם של איש וקסם של ידיים. ממליץ בחום!", name: "Yishai Steckler", sub: "כאבי כתפיים וצוואר" },
  { text: "המלצה חמה על עדי האלוף! מקצועי, אדיב ומשרה אווירת ביטחון. עזר לי להגיע לאיזון הורמונלי, הורדת מתחים, הפחתת כאבים ולהכנס להריון. הקליניקה שלו מרגיעה ונעימה.", name: "nati malachi", sub: "איזון הורמונלי וכאבים" },
  { text: "הגעתי לעדי אחרי תקופה ארוכה עם מיגרנות בתדירות של 2-3 לשבוע. כבר אחרי כמה טיפולים בודדים ראיתי ירידה משמעותית בעוצמת המיגרנות, וכעבור כמה חודשי טיפול ירדה התדירות שלהן משמעותית. ממליצה מאוד!", name: "Dana Rabinovich", sub: "מיגרנות" },
  { text: "עדי מטפל מקצועי ונעים, מסור ורגיש. בכל פעם כיף להגיע לטיפול אצלו ובסיום יוצאת כמו חדשה (: המלצה חמה מכל הלב!", name: "Eden Sade", sub: "טיפול כללי" },
];

/* Google icon SVG */
const GoogleSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Stars = ({ count = 5 }) => (
  <div style={{ display: "flex", gap: "2px" }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

function ReviewCard({ r }) {
  const isLong = r.text.length > 200;
  const [collapsed, setCollapsed] = useState(isLong);

  return (
    <div className="review-card" style={{
      flexShrink: 0, width: "340px",
      background: "white", borderRadius: "20px", padding: "24px 22px",
      boxShadow: "0 2px 20px rgba(44,42,38,0.06)",
      border: `1px solid ${C.sand}`,
      display: "flex", flexDirection: "column",
      scrollSnapAlign: "start",
    }}>
      {/* Header: Stars + Google */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <Stars />
        <GoogleSvg />
      </div>
      {/* Name + treatment reason — top for engagement */}
      <div style={{ marginBottom: "12px", paddingBottom: "10px", borderBottom: `1px solid ${C.sand}` }}>
        <div style={{ fontWeight: 700, color: C.bark, fontSize: "15px" }}>{r.name}</div>
        <div style={{ color: C.sage, fontSize: "12px", marginTop: "2px", fontWeight: 600 }}>{r.sub}</div>
      </div>
      {/* Review text */}
      <div style={{ margin: 0, flex: 1 }}>
        <p style={{
          fontSize: "14px", color: C.barkLight, lineHeight: 1.75, margin: 0,
          ...(isLong && collapsed ? {
            display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical",
            overflow: "hidden",
          } : {}),
        }}>{r.text}</p>
        {isLong && (
          <button onClick={() => setCollapsed(c => !c)} className="review-read-more" style={{
            background: "none", border: "none", cursor: "pointer",
            color: C.sage, fontSize: "13px", fontWeight: 700,
            padding: "6px 0 0", display: "inline-block",
          }}>
            {collapsed ? "קרא עוד..." : "הצג פחות"}
          </button>
        )}
      </div>
    </div>
  );
}

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?ie=UTF-8&q=%D7%A2%D7%93%D7%99+%D7%A9%D7%9C%D7%95#ebo=0&mpd=~16663539272075685089/customers/reviews";

export default function Reviews() {
  const scrollRef = useRef(null);
  const userTouched = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onTouch = () => { userTouched.current = true; };
    el.addEventListener("pointerdown", onTouch);

    let iv = null;
    const startScroll = () => {
      if (iv) return;
      iv = setInterval(() => {
        if (userTouched.current) return;
        const card = el.querySelector(".review-card");
        if (!card) return;
        const step = card.offsetWidth + 20;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft <= -maxScroll + 10) el.scrollTo({ left: 0, behavior: "smooth" });
        else el.scrollBy({ left: -step, behavior: "smooth" });
      }, 3000);
    };
    const stopScroll = () => { clearInterval(iv); iv = null; };

    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) startScroll(); else stopScroll(); },
      { threshold: 0.3 }
    );
    obs.observe(el);

    return () => { stopScroll(); obs.disconnect(); el.removeEventListener("pointerdown", onTouch); };
  }, []);

  return (
    <Section id="reviews" bg={C.cream}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>מה אומרים המטופלים</div>
          <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 20px" }}>ביקורות Google</h2>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="google-badge" style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            background: "white", padding: "12px 24px", borderRadius: "50px",
            boxShadow: "0 2px 12px rgba(44,42,38,0.08)",
            textDecoration: "none", cursor: "pointer", transition: "box-shadow 0.2s",
          }}>
            <GoogleSvg />
            <span style={{ fontSize: "22px", fontWeight: 900, color: C.bark }}>5.0</span>
            <Stars />
            <span style={{ fontSize: "13px", color: C.barkLight, fontWeight: 500 }}>מבוסס על 27 ביקורות</span>
          </a>
        </div>
      </div>

      <div ref={scrollRef} className="reviews-carousel" style={{
        display: "flex", gap: "20px", overflowX: "auto",
        paddingRight: "max(16px, calc((100vw - 1000px) / 2))",
        paddingLeft: "max(16px, calc((100vw - 1000px) / 2))",
        paddingBottom: "8px",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
      }}>
        {REVIEWS.map(r => <ReviewCard key={r.name} r={r} />)}
      </div>

      <div className="scroll-hint-row" style={{ textAlign: "center", marginTop: "16px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
        margin: "16px auto 0", padding: "8px 20px", borderRadius: "50px", background: "rgba(107,122,90,0.08)",
      }}>
        <span style={{ fontSize: "14px", fontWeight: 700 }}>👈 גלול לעוד ביקורות</span>
      </div>

      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="google-all-reviews" style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "white", color: C.barkLight, padding: "12px 24px",
          borderRadius: "50px", fontSize: "13px", fontWeight: 600,
          textDecoration: "none", border: `1.5px solid ${C.sand}`,
          transition: "all 0.2s",
        }}>
          <GoogleSvg />
          ראו את כל הביקורות ב-Google
        </a>
      </div>
    </Section>
  );
}
