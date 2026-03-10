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
};

export default nextConfig;
