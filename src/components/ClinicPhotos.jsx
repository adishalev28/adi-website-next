"use client";
import { useState, useRef, useEffect } from "react";
import { C } from "@/lib/constants";
import PhotoLightbox from "./PhotoLightbox";

const ALL_PHOTOS = [
  { src: "/clinic-room.jpg", alt: "חדר טיפולים בקליניקה לרפואה סינית בראשון לציון" },
  { src: "/adi-acupuncture.jpg", alt: "עדי שלו מבצע טיפול דיקור סיני בקליניקה בראשון לציון" },
  { src: "/adi-desk.jpg", alt: "חדר ייעוץ ואבחון בקליניקה לרפואה סינית - עדי שלו" },
  { src: "/clinic-entrance.jpg", alt: "כניסה לקליניקת רפואה סינית עדי שלו בראשון לציון" },
  { src: "/adi-treatment.jpg", alt: "טיפול בכוסות רוח בקליניקה לרפואה סינית בראשון לציון" },
  { src: "/adi-shiatsu.jpg", alt: "טיפול שיאצו - עיסוי יפני מקצועי בקליניקת עדי שלו" },
];

function useAutoScroll(ref, touched, interval) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let startX = 0, startY = 0;
    const onDown = (e) => { startX = e.clientX || e.touches?.[0]?.clientX || 0; startY = e.clientY || e.touches?.[0]?.clientY || 0; };
    const onMove = (e) => {
      if (touched.current) return;
      const cx = e.clientX || e.touches?.[0]?.clientX || 0;
      const cy = e.clientY || e.touches?.[0]?.clientY || 0;
      const dx = Math.abs(cx - startX), dy = Math.abs(cy - startY);
      if (dx > 15 && dx > dy) touched.current = true;
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);

    let iv = null;
    const startScroll = () => {
      if (iv) return;
      iv = setInterval(() => {
        if (touched.current) return;
        const card = el.querySelector(".clinic-photo-l, .clinic-photo-p");
        if (!card) return;
        const step = card.offsetWidth + 16;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft <= -maxScroll + 10) el.scrollTo({ left: 0, behavior: "smooth" });
        else el.scrollBy({ left: -step, behavior: "smooth" });
      }, interval);
    };
    const stopScroll = () => { clearInterval(iv); iv = null; };

    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) startScroll(); else stopScroll(); },
      { threshold: 0.3 }
    );
    obs.observe(el);

    return () => { stopScroll(); obs.disconnect(); el.removeEventListener("pointerdown", onDown); el.removeEventListener("pointermove", onMove); };
  }, [ref, touched, interval]);
}

export default function ClinicPhotos() {
  const landscape = ALL_PHOTOS.filter((_, i) => [0, 1, 2].includes(i));
  const portrait  = ALL_PHOTOS.filter((_, i) => [3, 4, 5].includes(i));

  const scrollRefL = useRef(null);
  const scrollRefP = useRef(null);
  const userTouchedL = useRef(false);
  const userTouchedP = useRef(false);
  const [lbIndex, setLbIndex] = useState(null);

  useAutoScroll(scrollRefL, userTouchedL, 2500);
  useAutoScroll(scrollRefP, userTouchedP, 3000);

  return (
    <>
      <div style={{ background: C.cream, padding: "40px 0 0" }}>
        {/* Landscape carousel */}
        <div ref={scrollRefL} className="clinic-carousel" style={{
          display: "flex", gap: "16px", overflowX: "auto",
          padding: "0 24px 20px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}>
          {landscape.map((p) => {
            const allIdx = ALL_PHOTOS.findIndex(a => a.src === p.src);
            return (
              <div key={p.src} className="clinic-photo-l" onClick={() => setLbIndex(allIdx)} style={{
                flexShrink: 0, scrollSnapAlign: "start",
                borderRadius: "12px", overflow: "hidden",
                width: "420px", height: "280px", cursor: "pointer",
              }}>
                <img src={p.src} alt={p.alt} loading="lazy" style={{
                  width: "100%", height: "100%",
                  display: "block", objectFit: "cover",
                }} />
              </div>
            );
          })}
        </div>

        {/* Portrait carousel */}
        <div ref={scrollRefP} className="clinic-carousel" style={{
          display: "flex", gap: "16px", overflowX: "auto",
          padding: "0 24px 40px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}>
          {portrait.map((p) => {
            const allIdx = ALL_PHOTOS.findIndex(a => a.src === p.src);
            return (
              <div key={p.src} className="clinic-photo-p" onClick={() => setLbIndex(allIdx)} style={{
                flexShrink: 0, scrollSnapAlign: "start",
                borderRadius: "12px", overflow: "hidden",
                width: "240px", height: "340px", cursor: "pointer",
              }}>
                <img src={p.src} alt={p.alt} loading="lazy" style={{
                  width: "100%", height: "100%",
                  display: "block", objectFit: "cover", objectPosition: "top",
                }} />
              </div>
            );
          })}
        </div>
      </div>

      {lbIndex !== null && (
        <PhotoLightbox photos={ALL_PHOTOS} startIndex={lbIndex} onClose={() => setLbIndex(null)} />
      )}
    </>
  );
}
