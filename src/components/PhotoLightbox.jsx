"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { C } from "@/lib/constants";

export default function PhotoLightbox({ photos, startIndex, onClose }) {
  const scrollRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(startIndex);

  /* Navigate to a specific photo (used by arrows + keyboard) */
  const goTo = useCallback((i) => {
    const target = Math.max(0, Math.min(photos.length - 1, i));
    const el = scrollRef.current;
    if (!el) return;
    const slide = el.children[target];
    if (slide) slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, [photos.length]);

  /* Lock body scroll, close on Escape, navigate with arrow keys */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      // In RTL: ArrowRight = previous photo, ArrowLeft = next photo
      if (e.key === "ArrowRight") goTo(currentIdx - 1);
      if (e.key === "ArrowLeft") goTo(currentIdx + 1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, goTo, currentIdx]);

  /* Scroll to the clicked photo on open */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const slide = el.children[startIndex];
    if (slide) slide.scrollIntoView({ behavior: "instant", inline: "start", block: "nearest" });
  }, [startIndex]);

  /* Track which photo is visible */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const w = el.clientWidth;
        const idx = Math.round(Math.abs(el.scrollLeft) / w);
        setCurrentIdx(Math.min(idx, photos.length - 1));
        ticking = false;
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [photos.length]);

  const isFirst = currentIdx === 0;
  const isLast = currentIdx === photos.length - 1;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(250,248,243,0.97)",
      backdropFilter: "blur(20px)",
      animation: "lbFadeIn .3s ease",
      display: "flex", flexDirection: "column",
    }}>
      {/* Top bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 20px", flexShrink: 0,
      }}>
        <button onClick={onClose} aria-label="סגירה" style={{
          background: "none", border: `1.5px solid ${C.sand}`, borderRadius: "50%",
          width: "40px", height: "40px", cursor: "pointer", display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.bark} strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <span style={{ fontSize: "14px", fontWeight: 600, color: C.barkLight }}>
          {currentIdx + 1} / {photos.length}
        </span>
      </div>

      {/* Scrollable photo strip - with arrow buttons */}
      <div style={{ position: "relative", flex: 1, display: "flex", minHeight: 0 }}>
        {/* Previous button - on the right in RTL */}
        <button
          onClick={() => goTo(currentIdx - 1)}
          disabled={isFirst}
          aria-label="התמונה הקודמת"
          className="lb-arrow lb-arrow-prev"
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.92)",
            border: `1px solid ${C.sand}`,
            cursor: isFirst ? "not-allowed" : "pointer",
            opacity: isFirst ? 0.3 : 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            transition: "all 0.2s ease",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.bark} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        {/* Next button - on the left in RTL */}
        <button
          onClick={() => goTo(currentIdx + 1)}
          disabled={isLast}
          aria-label="התמונה הבאה"
          className="lb-arrow lb-arrow-next"
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.92)",
            border: `1px solid ${C.sand}`,
            cursor: isLast ? "not-allowed" : "pointer",
            opacity: isLast ? 0.3 : 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            transition: "all 0.2s ease",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.bark} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="lb-scroll"
          style={{
            flex: 1,
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            // Disable iOS momentum scrolling - prevents skipping past photos
            WebkitOverflowScrolling: "auto",
            overscrollBehavior: "contain",
            scrollbarWidth: "none",
          }}
        >
          {photos.map((p) => (
            <div key={p.src} style={{
              flexShrink: 0, width: "100vw",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "0 16px",
              scrollSnapAlign: "start",
              // Force stop at every photo - critical fix for fast swipes
              scrollSnapStop: "always",
            }}>
              <img src={p.src} alt={p.alt} style={{
                maxWidth: "100%", maxHeight: "calc(100vh - 140px)",
                objectFit: "contain", borderRadius: "12px",
                userSelect: "none",
                boxShadow: "0 8px 40px rgba(44,42,38,0.12)",
              }} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{
        display: "flex", gap: "8px", justifyContent: "center",
        padding: "16px", flexShrink: 0,
      }}>
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`עבור לתמונה ${i + 1}`}
            style={{
              width: currentIdx === i ? "24px" : "8px", height: "8px",
              borderRadius: "4px",
              background: currentIdx === i ? C.sage : C.sand,
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .lb-scroll::-webkit-scrollbar { display: none; }
        .lb-arrow:hover:not(:disabled) {
          background: rgba(255,255,255,1) !important;
          transform: translateY(-50%) scale(1.08) !important;
          box-shadow: 0 6px 18px rgba(0,0,0,0.18) !important;
        }
        /* Hide arrows on small phones - use touch only */
        @media (max-width: 480px) {
          .lb-arrow {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
