"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { C, WA_URL } from "@/lib/constants";
import WaSvg from "./WaSvg";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const heroSrc = isMobile ? "/hero-mobile.jpg" : "/clinic-room.jpg";
    const img = new window.Image();
    img.src = heroSrc;
    img.onload = () => setLoaded(true);
    const t = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(t);
  }, [isMobile]);

  const heroSrc = isMobile ? "/hero-mobile.jpg" : "/clinic-room.jpg";

  return (
    <section className="hero-section" style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Background image */}
      <div className="hero-bg" style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${heroSrc})`,
        backgroundSize: "cover", backgroundPosition: isMobile ? "center 8%" : "center 40%",
        filter: "brightness(0.85)",
        transition: "opacity 1.2s ease",
        opacity: loaded ? 1 : 0,
      }} />

      {/* Warm overlay gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: isMobile
          ? "linear-gradient(to bottom, rgba(44,42,38,0.5) 0%, rgba(44,42,38,0.3) 50%, rgba(44,42,38,0.7) 92%, rgba(44,42,38,0.95) 100%)"
          : "linear-gradient(to bottom, rgba(44,42,38,0.55) 0%, rgba(44,42,38,0.35) 40%, rgba(44,42,38,0.7) 90%, rgba(44,42,38,0.95) 100%)",
      }} />

      {/* Content */}
      <div className="hero-content" style={{
        position: "relative", maxWidth: "680px", textAlign: "center",
        padding: isMobile ? "210px 24px 40px" : "180px 24px 60px",
        opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
      }}>
        <div style={{
          display: "inline-block", marginBottom: "16px",
          fontSize: "clamp(13px, 2.5vw, 18px)", color: "rgba(255,255,255,0.9)", fontWeight: 500,
          letterSpacing: "2px", whiteSpace: "nowrap",
        }}>
          ✦ רפואה סינית מסורתית · ראשון לציון ✦
        </div>
        <h1 style={{
          fontSize: "clamp(42px, 7vw, 68px)", fontWeight: 900,
          color: C.goldLight, margin: "0 0 8px", lineHeight: 1.1,
          textShadow: "0 2px 20px rgba(0,0,0,0.15)",
        }}>
          עדי שלו
        </h1>
        <p style={{
          fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 500,
          color: "rgba(255,255,255,0.85)", margin: "0 0 28px",
          letterSpacing: "1px",
        }}>
          מטפל ברפואה סינית
        </p>

        {/* Treatment pills */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px",
          margin: "0 auto 36px", maxWidth: "480px",
        }}>
          {[
            { label: "דיקור סיני", href: "#svc-acupuncture" },
            { label: "שיאצו", href: "#svc-shiatsu" },
            { label: "כוסות רוח", href: "#svc-cupping" },
            { label: "צמחי מרפא", href: "#svc-herbs" },
          ].map(t => (
            <a key={t.label} href={t.href} className="hero-pill" style={{
              background: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "50px", padding: "8px 20px",
              fontSize: "14px", color: "rgba(255,255,255,0.9)", fontWeight: 500,
              textDecoration: "none",
            }}>{t.label}</a>
          ))}
        </div>

        <a id="hero-cta" href={WA_URL} target="_blank" rel="noreferrer" className="hero-cta-btn" style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "linear-gradient(135deg, #34A853, #2D9248)",
          color: "white", padding: "18px 44px",
          borderRadius: "50px", fontSize: "16px", fontWeight: 700,
          textDecoration: "none",
          boxShadow: "0 6px 32px rgba(52,168,83,0.45)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}>
          <WaSvg size={20} />
          ליצירת קשר
        </a>

      </div>
    </section>
  );
}
