import { C } from "@/lib/constants";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: C.cream, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", fontWeight: 800, color: C.bark, marginBottom: "16px" }}>
          עדי שלו
        </h1>
        <p style={{ fontSize: "20px", color: C.sage, fontWeight: 600 }}>
          רפואה סינית בראשון לציון
        </p>
        <p style={{ fontSize: "14px", color: C.barkLight, marginTop: "32px" }}>
          🚧 האתר החדש בבנייה — Next.js 🚧
        </p>
      </div>
    </main>
  );
}
