import "@/styles/globals.css";
import Script from "next/script";
import { LocalBusinessSchema, FAQPageSchema, WebSiteSchema } from "@/components/SchemaMarkup";

export const metadata = {
  title: "עדי שלו | רפואה סינית בראשון לציון - דיקור סיני, שיאצו וכוסות רוח",
  description:
    "קליניקה לרפואה סינית בראשון לציון. עדי שלו - מטפל מוסמך עם 8+ שנות ניסיון. דיקור סיני, שיאצו, כוסות רוח וצמחי מרפא. יחס אישי ומקצועי. צרו קשר לתיאום תור.",
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico", apple: "/icon-192.png" },
  themeColor: "#6B7A5A",
  openGraph: {
    title: "עדי שלו | רפואה סינית בראשון לציון",
    description: "דיקור סיני, שיאצו, כוסות רוח וצמחי מרפא סיניים. קליניקה בראשון לציון עם 8+ שנות ניסיון.",
    url: "https://adishalev.co.il",
    siteName: "עדי שלו - רפואה סינית",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MDLT6NWQ');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MRX2Q982VW"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MRX2Q982VW');
          `}
        </Script>
      </head>
      <body>
        <LocalBusinessSchema />
        <FAQPageSchema />
        <WebSiteSchema />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDLT6NWQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `if("serviceWorker" in navigator){navigator.serviceWorker.register("/sw.js")}`,
          }}
        />
      </body>
    </html>
  );
}
