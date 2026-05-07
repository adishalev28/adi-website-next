import "@/styles/globals.css";
import Script from "next/script";
import { LocalBusinessSchema, WebSiteSchema } from "@/components/SchemaMarkup";

export const metadata = {
  metadataBase: new URL("https://adishalev.co.il"),
  title: "דיקור סיני בראשון לציון - עדי שלו | טיפול בכאב, מתח ושינה",
  description:
    "סובלים מכאב, מתח או חוסר שינה? בקליניקה שלי בראשון לציון אני משלב דיקור סיני, שיאצו וצמחי מרפא לטיפול בשורש הבעיה. 8 שנות ניסיון. תיאום בוואטסאפ.",
  keywords: [
    "דיקור סיני",
    "דיקור סיני בראשון לציון",
    "רפואה סינית בראשון לציון",
    "מטפלים בראשון לציון",
    "שיאצו בראשון לציון",
    "כוסות רוח",
    "צמחי מרפא סיניים",
    "שיטת דונג",
    "שיטת ד״ר טאן",
    "עדי שלו",
  ],
  alternates: { canonical: "https://adishalev.co.il/" },
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico", apple: "/icon-192.png" },
  themeColor: "#6B7A5A",
  openGraph: {
    title: "דיקור סיני בראשון לציון - טיפול בכאב, מתח ושינה | עדי שלו",
    description: "סובלים מכאב או מתח שלא עוברים? בקליניקה שלי בראשון לציון אני משלב דיקור סיני, שיאצו וצמחי מרפא לטיפול שמטפל בשורש.",
    url: "https://adishalev.co.il",
    siteName: "עדי שלו - רפואה סינית",
    locale: "he_IL",
    type: "website",
    images: [{ url: "/clinic-room.jpg", width: 1200, height: 630, alt: "הקליניקה של עדי שלו בראשון לציון" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "דיקור סיני בראשון לציון - עדי שלו",
    description: "סובלים מכאב, מתח או שינה? דיקור סיני, שיאצו וצמחי מרפא בראשון לציון - טיפול בשורש הבעיה.",
    images: ["/clinic-room.jpg"],
  },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
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
