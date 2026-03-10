"use client";
import { useState, useRef, useEffect } from "react";
import { C } from "@/lib/constants";

export default function PhotoLightbox({ photos, startIndex, onClose }) {
  const scrollRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(startIndex);

  /* Lock body scroll, close on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

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
        <button onClick={onClose} style={{
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

      {/* Scrollable photo strip */}
      <div ref={scrollRef} className="lb-scroll" style={{
        flex: 1, display: "flex", overflowX: "auto",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
      }}>
        {photos.map((p) => (
          <div key={p.src} style={{
            flexShrink: 0, width: "100vw",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "0 16px",
            scrollSnapAlign: "start",
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

      {/* Dot indicators */}
      <div style={{
        display: "flex", gap: "8px", justifyContent: "center",
        padding: "16px", flexShrink: 0,
      }}>
        {photos.map((_, i) => (
          <div key={i} style={{
            width: currentIdx === i ? "24px" : "8px", height: "8px",
            borderRadius: "4px",
            background: currentIdx === i ? C.sage : C.sand,
            transition: "all 0.3s ease",
          }} />
        ))}
      </div>
    </div>
  );
}
