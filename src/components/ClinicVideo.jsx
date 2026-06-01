"use client";
import { useState, useEffect, useRef } from "react";
import { C } from "@/lib/constants";

/**
 * ClinicVideo - Responsive promo video component.
 *
 * Mobile (<768px):  Vertical version (9:16) - optimized for phone viewing.
 * Desktop (>=768px): Horizontal version (16:9) - full-length cinematic cut.
 *
 * Click-to-play (not autoplay) for performance / Core Web Vitals.
 * Poster image shows before play to avoid bandwidth use.
 * Includes VideoObject schema for SEO.
 */
export default function ClinicVideo() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const videoSrc = isMobile ? "/clinic-vertical-master.mp4" : "/clinic-horizontal.mp4";
  const poster = isMobile ? "/clinic-poster-vertical.jpg" : "/clinic-poster-horizontal.jpg";

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasInteracted(true);
    }
  };

  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);

  // Aspect ratio container - keeps consistent layout
  const aspectRatio = isMobile ? "9/16" : "16/9";
  const maxWidth = isMobile ? "360px" : "900px";

  return (
    <section
      id="clinic-video"
      style={{
        padding: "80px 24px",
        background: "linear-gradient(180deg, #faf8f5 0%, #f5f0e8 100%)",
        textAlign: "center",
      }}
    >
      {/* VideoObject Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "עדי שלו - רפואה סינית מסורתית, קליניקה בראשון לציון",
            description:
              "סרטון תדמית של קליניקת עדי שלו לרפואה סינית בראשון לציון. דיקור סיני, שיאצו, כוסות רוח ומוקסה.",
            thumbnailUrl: "https://adishalev.co.il/clinic-room.jpg",
            uploadDate: "2026-06-01T18:00:00+03:00",
            contentUrl: "https://adishalev.co.il/clinic-horizontal.mp4",
            duration: "PT1M2S",
            embedUrl: "https://adishalev.co.il/clinic-vertical-master.mp4",
            publisher: {
              "@type": "Organization",
              name: "עדי שלו - רפואה סינית מסורתית",
              logo: {
                "@type": "ImageObject",
                url: "https://adishalev.co.il/LOGO.png",
              },
            },
          }),
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            marginBottom: "12px",
            fontSize: "14px",
            letterSpacing: "2px",
            color: C.gold,
            fontWeight: 500,
          }}
        >
          ✦ הכירו את הקליניקה ✦
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: C.bark,
            margin: "0 0 16px",
            lineHeight: 1.2,
          }}
        >
          הצצה לקליניקה בראשון לציון
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(44,42,38,0.7)",
            maxWidth: "560px",
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          חלל הקליניקה, סוגי הטיפולים והאווירה המרגיעה. מוזמנים להצצה.
        </p>

        {/* Video container with aspect ratio */}
        <div
          style={{
            position: "relative",
            maxWidth,
            margin: "0 auto",
            aspectRatio,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
            background: "#1a1816",
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            controls={hasInteracted}
            playsInline
            preload="metadata"
            onPause={handlePause}
            onEnded={handleEnded}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            aria-label="סרטון תדמית - קליניקת עדי שלו לרפואה סינית"
          />

          {/* Play button overlay - shown only before first play */}
          {!isPlaying && !hasInteracted && (
            <button
              onClick={handlePlay}
              aria-label="הפעל סרטון"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.45) 100%)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.3s ease",
              }}
              className="clinic-video-play-btn"
            >
              <div
                style={{
                  width: "84px",
                  height: "84px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.95)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease",
                }}
                className="clinic-video-play-circle"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill={C.gold}
                  style={{ marginLeft: "4px" }}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Hover styles for play button */}
        <style jsx>{`
          .clinic-video-play-btn:hover {
            background: linear-gradient(
              135deg,
              rgba(0, 0, 0, 0.25) 0%,
              rgba(0, 0, 0, 0.1) 50%,
              rgba(0, 0, 0, 0.35) 100%
            ) !important;
          }
          .clinic-video-play-btn:hover .clinic-video-play-circle {
            transform: scale(1.08);
          }
        `}</style>
      </div>
    </section>
  );
}
