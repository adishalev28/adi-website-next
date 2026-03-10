import "@/styles/globals.css";

export const metadata = {
  title: "עדי שלו | רפואה סינית בראשון לציון - דיקור סיני, שיאצו וכוסות רוח",
  description:
    "קליניקה לרפואה סינית בראשון לציון. עדי שלו — מטפל מוסמך עם 8+ שנות ניסיון. דיקור סיני, שיאצו, כוסות רוח וצמחי מרפא. יחס אישי ומקצועי. צרו קשר לתיאום תור.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "עדי שלו | רפואה סינית בראשון לציון",
    description: "דיקור סיני, שיאצו, כוסות רוח וצמחי מרפא סיניים. קליניקה בראשון לציון עם 8+ שנות ניסיון.",
    url: "https://adishalev.co.il",
    siteName: "עדי שלו — רפואה סינית",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
