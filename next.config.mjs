/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output standalone for Vercel optimization
  output: undefined,

  // Image domains (Google profile photos for reviews, etc.)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "**.supabase.co" },
    ],
  },

  // 301 redirects לדפי WordPress ישנים שעדיין באינדקס של Google
  // (איסוף תנועה שהיום מגיעה לדפים שלא קיימים)
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/home/", destination: "/", permanent: true },
      { source: "/hello-world", destination: "/", permanent: true },
      { source: "/hello-world/", destination: "/", permanent: true },
      { source: "/elementor-10", destination: "/", permanent: true },
      { source: "/elementor-10/", destination: "/", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap.xsl", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-index.xsl", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-page-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-post-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-taxonomies-category-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy", permanent: true },
      { source: "/comments/feed", destination: "/blog", permanent: true },
      { source: "/comments/feed/", destination: "/blog", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/feed/", destination: "/blog", permanent: true },
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/sample-page/", destination: "/", permanent: true },
      { source: "/category/uncategorized", destination: "/blog", permanent: true },
      { source: "/category/uncategorized/", destination: "/blog", permanent: true },
      { source: "/category/:slug*", destination: "/blog", permanent: true },
      { source: "/tag/:slug*", destination: "/blog", permanent: true },
      { source: "/author/:slug*", destination: "/", permanent: true },
      // WordPress uploads - תמונות ישנות ב-Google index, מפנים לדף הבית
      { source: "/wp-content/:slug*", destination: "/", permanent: true },
      { source: "/wp-includes/:slug*", destination: "/", permanent: true },
      { source: "/wp-admin/:slug*", destination: "/", permanent: true },
      { source: "/%D7%94%D7%A6%D7%94%D7%A8%D7%AA-%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA", destination: "/accessibility", permanent: true },
      { source: "/%D7%94%D7%A6%D7%94%D7%A8%D7%AA-%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA/", destination: "/accessibility", permanent: true },
      // מאמר שיאצו או עיסוי - הוסר 7.5.2026 (לא תאם את הגישה הקלינית של עדי)
      { source: "/blog/shiatsu-vs-massage", destination: "/blog/shiatsu", permanent: true },
      { source: "/blog/shiatsu-vs-massage/", destination: "/blog/shiatsu", permanent: true },
    ];
  },

  // כותרות אבטחה - הכותרות ה"בטוחות" בלבד (לא שוברות inline styles/סקריפטים).
  // CSP במכוון לא נכלל כדי לא לסכן את התצוגה. HSTS כבר מוגדר ב-Vercel.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // מונע מהדפדפן לנחש סוגי קבצים (הגנה מ-MIME sniffing)
          { key: "X-Content-Type-Options", value: "nosniff" },
          // מונע הטמעת האתר ב-iframe זר (הגנה מ-clickjacking)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // לא מדליף כתובות מלאות לאתרים חיצוניים
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // חוסם גישה ליכולות שהאתר לא משתמש בהן
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          // CSP במצב האזנה בלבד (Report-Only) - לא חוסם, רק מדווח לקונסול על מקורות שהיו נחסמים.
          // שלב מעבר לקראת CSP חוסם מלא. לאסוף חריגות כמה ימים, ואז להפוך ל-Content-Security-Policy.
          {
            key: "Content-Security-Policy-Report-Only",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "media-src 'self'",
              "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.supabase.co",
              "frame-src 'self' https://www.google.com https://maps.google.com https://www.youtube.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
