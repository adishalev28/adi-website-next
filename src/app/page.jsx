import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ClinicVideo from "@/components/ClinicVideo";
import Reviews from "@/components/Reviews";
import ClinicPhotos from "@/components/ClinicPhotos";
import Services from "@/components/Services";
import About from "@/components/About";
import ForWhom from "@/components/ForWhom";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import ScrollToHash from "@/components/ScrollToHash";
import { FAQPageSchema } from "@/components/SchemaMarkup";

const HOMEPAGE_FAQ = [
  { q: "האם דיקור סיני כואב?", a: "המחטים דקיקות מאוד - דקות פי 10 ממחט הזרקה רגילה. נקודות מסוימות יכולות לעקצץ בהתחלה, וחלק כמעט לא מורגשות. רוב המטופלים מרגישים הרגעה עמוקה במהלך הטיפול ויש שנרדמים." },
  { q: "כמה טיפולים צריך?", a: "זה תלוי בוותק של הבעיה ובאיך שהגוף מגיב. מצב חריף לרוב משתפר מהר יותר ממצב שנמשך שנים. כבר בטיפול הראשון, אחרי האבחון, אני יודע להעריך את הכיוון ואנחנו קובעים יחד תוכנית מותאמת - ומעדכנים אותה תוך כדי." },
  { q: "מה ההבדל בין דיקור לשיאצו?", a: "דיקור סיני משתמש במחטים דקות לאורך נקודות על מרידיאנים בגוף. שיאצו הוא עיסוי לחץ ידני באותן נקודות - ללא מחטים. שתי השיטות מבוססות על אותם עקרונות של רפואה סינית." },
  { q: "מה לצפות בטיפול הראשון?", a: "הטיפול הראשון כולל שיחה מקיפה על הבעיה, ההיסטוריה הרפואית ואורח החיים. לאחר מכן הטיפול עצמו - כ-60 דקות, לפעמים טיפה יותר. מומלץ להגיע לא רעבים ולא מלאים." },
  { q: "האם הטיפול מתאים לי אם אני לוקח תרופות?", a: "ברוב המקרים כן. רפואה סינית יכולה לפעול בצוותא עם טיפול קונבנציונלי. חשוב לציין את כל התרופות בשיחת המיון הראשונה." },
  { q: "איפה הקליניקה?", a: "הקליניקה ממוקמת במערב ראשון לציון. לכתובת המדויקת ולתיאום הגעה - שלחו הודעת WhatsApp ואחזור אליכם." },
];

export default function Home() {
  return (
    <>
      <FAQPageSchema items={HOMEPAGE_FAQ} />
      <ScrollToHash />
      <Navbar />
      <Hero />
      <Stats />
      <Reviews />
      <ClinicVideo />
      <ClinicPhotos />
      <Services />
      <About />
      <ForWhom />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWA />
      <CookieConsent />
      <AccessibilityWidget />
    </>
  );
}
