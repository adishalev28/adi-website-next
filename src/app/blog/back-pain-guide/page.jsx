import ArticleLayout from "@/components/ArticleLayout";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { C } from "@/lib/constants";

export const metadata = {
  title: "כאבי גב -המדריך המלא לטיפול ברפואה סינית (2026) | עדי שלו",
  description:
    "כל מה שצריך לדעת על טיפול בכאבי גב ברפואה סינית. דיקור, שיאצו, כוסות רוח וצמחי מרפא -מה עובד, למי מתאים, וכמה טיפולים צריך. מדריך מקיף מאת עדי שלו, ראשון לציון.",
  keywords:
    "כאבי גב, טיפול כאבי גב, דיקור סיני כאבי גב, שיאצו כאבי גב, כוסות רוח כאבי גב, פריצת דיסק, סיאטיקה, כאב גב תחתון, רפואה סינית כאבי גב, ראשון לציון",
  alternates: { canonical: "https://adishalev.co.il/blog/back-pain-guide" },
};

const RELATED = [
  {
    href: "/blog/back-pain/",
    title: "דיקור סיני לכאבי גב",
    tag: "דיקור סיני",
  },
  {
    href: "/blog/neck-shoulder-pain/",
    title: "כאבי צוואר וכתפיים",
    tag: "כאבי שרירים",
  },
  {
    href: "/dikur-sini/",
    title: "דיקור סיני -דף השירות",
    tag: "שירותים",
  },
];

export default function BackPainGuidePage() {
  return (
    <>
      <ArticleSchema
        title="כאבי גב -המדריך המלא לטיפול ברפואה סינית (2026)"
        description="כל מה שצריך לדעת על טיפול בכאבי גב ברפואה סינית. דיקור, שיאצו, כוסות רוח וצמחי מרפא."
        url="https://adishalev.co.il/blog/back-pain-guide"
        datePublished="2026-03-20"
        dateModified="2026-03-20"
      />
      <BreadcrumbSchema
        items={[
          { name: "דף הבית", url: "https://adishalev.co.il" },
          { name: "בלוג", url: "https://adishalev.co.il/blog" },
          {
            name: "כאבי גב -המדריך המלא",
            url: "https://adishalev.co.il/blog/back-pain-guide",
          },
        ]}
      />
      <ArticleLayout
        title="כאבי גב -המדריך המלא"
        subtitle="כל שיטות הטיפול ברפואה סינית, מה עובד ולמי, וכמה טיפולים צריך. מדריך מקיף ומעודכן ל-2026."
        date="מרץ 2026"
        readTime="15"
        lastUpdated="מרץ 2026"
        relatedArticles={RELATED}
      >
        {/* Answer Block – GEO */}
        <p style={{ background: '#f8f7f4', borderRight: '4px solid #6B7A5A', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
          <strong>בקצרה:</strong> רפואה סינית מציעה מספר שיטות מוכחות לטיפול בכאבי גב -דיקור סיני, שיאצו, כוסות רוח וצמחי מרפא. דיקור הוכח כטיפול יעיל לכאבי גב במחקרים רבים, וארגון הבריאות העולמי (WHO) ממליץ עליו. בקליניקה של עדי שלו בראשון לציון, הטיפול מותאם אישית ומשלב בין השיטות לפי צורך המטופל.
        </p>

        {/* תוכן עניינים */}
        <nav style={{
          background: '#f8f7f4',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '32px',
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 16px', color: '#2C2A26' }}>
            📑 תוכן עניינים
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
            <li><a href="#why" style={{ color: '#6B7A5A', textDecoration: 'none' }}>למה הגב כואב? -הסיבות הנפוצות</a></li>
            <li><a href="#chinese-medicine" style={{ color: '#6B7A5A', textDecoration: 'none' }}>הגישה של הרפואה הסינית לכאבי גב</a></li>
            <li><a href="#acupuncture" style={{ color: '#6B7A5A', textDecoration: 'none' }}>דיקור סיני לכאבי גב</a></li>
            <li><a href="#shiatsu" style={{ color: '#6B7A5A', textDecoration: 'none' }}>שיאצו לכאבי גב</a></li>
            <li><a href="#cupping" style={{ color: '#6B7A5A', textDecoration: 'none' }}>כוסות רוח לכאבי גב</a></li>
            <li><a href="#herbs" style={{ color: '#6B7A5A', textDecoration: 'none' }}>צמחי מרפא סיניים לכאבי גב</a></li>
            <li><a href="#conditions" style={{ color: '#6B7A5A', textDecoration: 'none' }}>מצבים ספציפיים -פריצת דיסק, סיאטיקה, שיגרון</a></li>
            <li><a href="#how-many" style={{ color: '#6B7A5A', textDecoration: 'none' }}>כמה טיפולים צריך?</a></li>
            <li><a href="#self-help" style={{ color: '#6B7A5A', textDecoration: 'none' }}>מה אפשר לעשות לבד בבית</a></li>
            <li><a href="#faq" style={{ color: '#6B7A5A', textDecoration: 'none' }}>שאלות ותשובות</a></li>
          </ul>
        </nav>

        {/* 1. למה הגב כואב */}
        <h2 id="why">למה הגב כואב? -הסיבות הנפוצות</h2>
        <p>
          כאבי גב הם אחת מהסיבות הנפוצות ביותר לביקור אצל רופא בישראל ובעולם. כ-80% מהאנשים
          יחוו כאבי גב בשלב כלשהו בחייהם. הסיבות מגוונות:
        </p>
        <ul>
          <li><strong>מתח שרירי</strong> -ישיבה ממושכת, עבודה מול מחשב, תנוחה לקויה</li>
          <li><strong>פריצת דיסק</strong> -לחץ על עצבים בעמוד השדרה</li>
          <li><strong>סיאטיקה</strong> -כאב שמקרין מהגב התחתון לרגל</li>
          <li><strong>דלקת מפרקים</strong> -שחיקה בחוליות</li>
          <li><strong>לחץ נפשי</strong> -מתח רגשי שמצטבר בשרירי הגב</li>
          <li><strong>היעדר פעילות גופנית</strong> -שרירי ליבה חלשים</li>
        </ul>
        <p>
          הרפואה המערבית מתמקדת בדרך כלל בסימפטום -משככי כאבים, זריקות, ובמקרים קשים ניתוח.
          הרפואה הסינית מחפשת את <strong>שורש הבעיה</strong> ומטפלת בו.
        </p>

        {/* 2. הגישה הסינית */}
        <h2 id="chinese-medicine">הגישה של הרפואה הסינית לכאבי גב</h2>
        <p>
          ברפואה סינית, כאבי גב נגרמים בדרך כלל מאחד משלושה דפוסים:
        </p>
        <ol>
          <li><strong>חסימת צ&apos;י ודם</strong> -זרימת האנרגיה בגוף חסומה, בדרך כלל בעקבות חבלה, תנוחה לקויה או קור</li>
          <li><strong>חולשת כליות</strong> -ברפואה סינית, הכליות &quot;מזינות&quot; את הגב. חולשה כרונית מתבטאת בכאב עמום וחוזר</li>
          <li><strong>חדירת רטיבות וקור</strong> -חשיפה לקור או לחות שחודרים למרידיאנים</li>
        </ol>
        <p>
          האבחון הסיני כולל בדיקת דופק, לשון, ושאלות מעמיקות -כדי להבין את הדפוס הספציפי שלכם
          ולהתאים טיפול מדויק.
        </p>

        {/* 3. דיקור סיני */}
        <h2 id="acupuncture">🪡 דיקור סיני לכאבי גב</h2>
        <p>
          דיקור סיני הוכח במחקרים קליניים רבים כטיפול יעיל לכאבי גב -חריפים וכרוניים.
          ארגון הבריאות העולמי (WHO) כולל כאבי גב ברשימת ההתוויות המוכרות לדיקור.
        </p>
        <h3>איך זה עובד?</h3>
        <ul>
          <li>המחטים מפעילות את מערכת שיכוך הכאב הטבעית (אנדורפינים)</li>
          <li>שיפור זרימת הדם לאזור הפגוע</li>
          <li>הפחתת דלקת מקומית</li>
          <li>שחרור מתח שרירי</li>
          <li>ויסות מערכת העצבים</li>
        </ul>
        <h3>שיטת מאסטר טונג</h3>
        <p>
          בקליניקה שלי אני משתמש בשיטת מאסטר טונג -שיטה ייחודית שמשתמשת בנקודות מרוחקות מהאזור
          הכואב. למשל, לטיפול בכאבי גב תחתון אני עשוי לדקור נקודות ביד או ברגל.
          היתרון: שחרור מיידי יותר, ובזמן הטיפול אפשר לבדוק אם הכאב פחת.
        </p>
        <p>
          <a href="/blog/back-pain/" style={{ color: '#6B7A5A', fontWeight: 600 }}>
            ← קראו עוד: דיקור סיני לכאבי גב -המאמר המלא
          </a>
        </p>

        {/* 4. שיאצו */}
        <h2 id="shiatsu">🤲 שיאצו לכאבי גב</h2>
        <p>
          שיאצו הוא טיפול ידני שמבוסס על אותם עקרונות של רפואה סינית -אבל במקום מחטים,
          המטפל משתמש בלחץ אגודלים, כפות ידיים ומרפקים על נקודות לאורך המרידיאנים.
        </p>
        <h3>למי מתאים?</h3>
        <ul>
          <li>מי שמעדיף טיפול ללא מחטים</li>
          <li>כאבי גב שמקורם במתח שרירי</li>
          <li>כאבים שמלווים בנוקשות ומוגבלות תנועה</li>
          <li>שילוב עם דיקור לתוצאות טובות יותר</li>
        </ul>
        <p>
          <a href="/shiatsu/" style={{ color: '#6B7A5A', fontWeight: 600 }}>
            ← קראו עוד: שיאצו -דף השירות
          </a>
        </p>

        {/* 5. כוסות רוח */}
        <h2 id="cupping">🔴 כוסות רוח לכאבי גב</h2>
        <p>
          כוסות רוח (Cupping) יוצרות ואקום על העור שמושך את הדם לשטח, משחרר מתח שרירי עמוק
          ומפרק הידבקויות ברקמות. הטיפול יעיל במיוחד ל:
        </p>
        <ul>
          <li>מתח שרירי כרוני באזור הגב העליון והתחתון</li>
          <li>נוקשות בוקר בגב</li>
          <li>כאבים אחרי אימון או מאמץ פיזי</li>
          <li>שיפור טווח התנועה</li>
        </ul>
        <p>
          <a href="/cupping/" style={{ color: '#6B7A5A', fontWeight: 600 }}>
            ← קראו עוד: כוסות רוח -דף השירות
          </a>
        </p>

        {/* 6. צמחי מרפא */}
        <h2 id="herbs">🌿 צמחי מרפא סיניים לכאבי גב</h2>
        <p>
          צמחי מרפא סיניים מספקים טיפול מבפנים -הם מחזקים את הכליות (שתומכות בגב לפי הרפואה הסינית),
          מפחיתים דלקת ומשפרים זרימת דם. הנוסחאות מותאמות אישית לפי האבחון.
        </p>
        <h3>צמחים נפוצים לכאבי גב:</h3>
        <ul>
          <li><strong>דו ג&apos;ונג (Du Zhong)</strong> -מחזק כליות ועצמות, מפחית כאב גב תחתון</li>
          <li><strong>גו ג&apos;י צ&apos;ה (Niu Xi)</strong> -משפר זרימת דם, מפחית נפיחות</li>
          <li><strong>דאנג גווי (Dang Gui)</strong> -מזין את הדם, משחרר עווית שרירים</li>
        </ul>
        <p>
          <a href="/herbs/" style={{ color: '#6B7A5A', fontWeight: 600 }}>
            ← קראו עוד: צמחי מרפא סיניים -דף השירות
          </a>
        </p>

        {/* 7. מצבים ספציפיים */}
        <h2 id="conditions">מצבים ספציפיים</h2>

        <h3>פריצת דיסק</h3>
        <p>
          דיקור סיני יכול להפחית את הלחץ על העצב, להוריד דלקת ולשכך כאב -גם ללא ניתוח.
          הטיפול מתמקד בשחרור השרירים סביב הדיסק ובשיפור הזרימה לאזור.
          רבים מהמטופלים שלי הגיעו אחרי שהומלץ להם ניתוח ומצאו הקלה משמעותית בדיקור.
        </p>

        <h3>סיאטיקה</h3>
        <p>
          סיאטיקה -כאב שמקרין מהגב התחתון דרך הישבן ומטה לרגל -מגיב היטב לדיקור.
          הטיפול בשיטת מאסטר טונג משתמש בנקודות ברגל הנגדית לשחרור מיידי.
        </p>

        <h3>שיגרון (ארתריטיס)</h3>
        <p>
          כאבי גב שמקורם בדלקת מפרקים ניזונים מעודפי רטיבות וקור לפי הרפואה הסינית.
          הטיפול משלב דיקור עם מוקסה (חימום נקודות) וצמחי מרפא שמייבשים רטיבות.
        </p>

        {/* 8. כמה טיפולים */}
        <h2 id="how-many">כמה טיפולים צריך?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          margin: '24px 0',
        }}>
          <div style={{ background: '#f0f7ed', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#6B7A5A' }}>3–5</div>
            <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>טיפולים</div>
            <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '8px' }}>כאב חריף</div>
            <div style={{ fontSize: '13px', color: '#666' }}>כאב גב פתאומי, שריר תפוס</div>
          </div>
          <div style={{ background: '#fef9f0', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#C4883A' }}>6–10</div>
            <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>טיפולים</div>
            <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '8px' }}>כאב כרוני</div>
            <div style={{ fontSize: '13px', color: '#666' }}>כאב שחוזר חודשים, סיאטיקה</div>
          </div>
          <div style={{ background: '#f5f0f8', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#7B5EA7' }}>10+</div>
            <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>טיפולים</div>
            <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '8px' }}>מצב מורכב</div>
            <div style={{ fontSize: '13px', color: '#666' }}>פריצת דיסק, ארתריטיס</div>
          </div>
        </div>
        <p>
          בטיפול הראשון אני מבצע אבחון מקיף וקובע תוכנית טיפול מותאמת אישית.
          רוב המטופלים מרגישים שיפור כבר אחרי 2–3 טיפולים.
        </p>

        {/* 9. עזרה עצמית */}
        <h2 id="self-help">מה אפשר לעשות לבד בבית</h2>
        <ul>
          <li><strong>מתיחות יומיות</strong> -10 דקות בבוקר של מתיחות גב ורגליים</li>
          <li><strong>הליכה</strong> -30 דקות ביום משפרות זרימת דם ומחזקות שרירי ליבה</li>
          <li><strong>חום מקומי</strong> -שקית חימום על האזור הכואב, 20 דקות</li>
          <li><strong>תנוחת שינה</strong> -שינה על הצד עם כרית בין הברכיים</li>
          <li><strong>הפסקות ישיבה</strong> -קימה כל 45 דקות מהמחשב</li>
          <li><strong>חיזוק ליבה</strong> -תרגילי פלאנק, גשר ושחייה</li>
        </ul>

        {/* 10. FAQ */}
        <h2 id="faq">שאלות ותשובות</h2>

        <h3>האם דיקור סיני באמת עוזר לכאבי גב?</h3>
        <p>
          כן. מחקרים קליניים רבים הוכיחו שדיקור סיני יעיל לכאבי גב -חריפים וכרוניים.
          ארגון הבריאות העולמי ממליץ על דיקור לכאבי גב, ומערכות בריאות רבות בעולם כוללות אותו כטיפול מוכר.
        </p>

        <h3>האם זה כואב?</h3>
        <p>
          ברוב המקרים לא. המחטים דקות מאוד (0.25 מ&quot;מ) -דקות פי 10 ממחט רגילה.
          רוב המטופלים מרגישים תחושה קלה של עקצוץ או כבדות, ורבים נרדמים במהלך הטיפול.
        </p>

        <h3>מה עדיף -דיקור או פיזיותרפיה?</h3>
        <p>
          שניהם יעילים, אבל הגישה שונה. פיזיותרפיה מתמקדת בחיזוק שרירים ותנועה.
          דיקור מתמקד בהפחתת כאב, דלקת ובאיזון הגוף מבפנים.
          רבים מהמטופלים שלי משלבים בין השניים -ומדווחים על תוצאות טובות יותר.
        </p>

        <h3>האם אפשר לטפל בכאבי גב בהריון?</h3>
        <p>
          כן, בהחלט. דיקור סיני בטוח בהריון (עם התאמות) ויעיל במיוחד לכאבי גב תחתון
          שנפוצים בשליש השני והשלישי.
        </p>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #6B7A5A 0%, #556B43 100%)',
          borderRadius: '16px',
          padding: '32px',
          textAlign: 'center',
          marginTop: '40px',
        }}>
          <h2 style={{ color: 'white', fontSize: '24px', margin: '0 0 12px' }}>
            סובלים מכאבי גב?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', margin: '0 0 20px', fontSize: '16px' }}>
            צרו קשר לתיאום טיפול ראשון -אבחון מקיף + טיפול מותאם אישית
          </p>
          <a
            href="https://wa.me/972528029031?text=היי%20עדי%2C%20אשמח%20לתאם%20טיפול%20לכאבי%20גב"
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#6B7A5A',
              padding: '14px 32px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '16px',
            }}
          >
            💬 שלחו הודעת WhatsApp
          </a>
        </div>
      </ArticleLayout>
    </>
  );
}
