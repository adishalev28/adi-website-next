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
      { source: "/%D7%94%D7%A6%D7%94%D7%A8%D7%AA-%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA", destination: "/accessibility", permanent: true },
      { source: "/%D7%94%D7%A6%D7%94%D7%A8%D7%AA-%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA/", destination: "/accessibility", permanent: true },
      // מאמר שיאצו או עיסוי - הוסר 7.5.2026 (לא תאם את הגישה הקלינית של עדי)
      { source: "/blog/shiatsu-vs-massage", destination: "/blog/shiatsu", permanent: true },
      { source: "/blog/shiatsu-vs-massage/", destination: "/blog/shiatsu", permanent: true },
    ];
  },
};

export default nextConfig;
