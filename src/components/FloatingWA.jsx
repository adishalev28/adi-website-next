"use client";
import { useRef, useEffect } from "react";
import { PHONE, WA_URL } from "@/lib/constants";
import WaSvg from "./WaSvg";

export default function FloatingWA() {
  const elRef = useRef(null);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const el = elRef.current;
    if (!el) return;

    if (!heroCta) {
      el.style.opacity = "1";
      el.style.pointerEvents = "auto";
      return;
    }

    let hoverTimer = null;

    const obs = new IntersectionObserver(([entry]) => {
      const bw = el.offsetWidth, bh = el.offsetHeight;
      const anchorX = 28 + bw / 2;
      const anchorY = window.innerHeight - 28 - bh / 2;

      if (!entry.isIntersecting) {
        const cta = heroCta.getBoundingClientRect();
        const fromX = cta.left + cta.width / 2;
        const fromY = Math.max(cta.top + cta.height / 2, 60);
        const dx = fromX - anchorX;
        const dy = fromY - anchorY;

        clearTimeout(hoverTimer);
        el.style.transition = "none";
        el.style.transform = `translate(${dx}px, ${dy}px) scale(1.08)`;
        el.style.opacity = "0.8";
        void el.offsetHeight;

        el.style.transition = "opacity 0.35s ease-out, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s";
        el.style.transform = "translate(0, 0) scale(1)";
        el.style.opacity = "1";
        el.style.pointerEvents = "auto";
        hoverTimer = setTimeout(() => {
          el.style.transition = "transform 0.2s ease, box-shadow 0.3s";
        }, 750);
      } else {
        clearTimeout(hoverTimer);
        const cta = heroCta.getBoundingClientRect();
        const toX = cta.left + cta.width / 2;
        const toY = Math.min(cta.top + cta.height / 2, window.innerHeight - 60);
        const dx = toX - anchorX;
        const dy = toY - anchorY;

        el.style.transition = "opacity 0.4s ease-in, transform 0.5s cubic-bezier(0.55, 0, 1, 0.45)";
        el.style.transform = `translate(${dx}px, ${dy}px) scale(1.08)`;
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
      }
    }, { threshold: 0 });

    obs.observe(heroCta);
    return () => { obs.disconnect(); clearTimeout(hoverTimer); };
  }, []);

  return (
    <div ref={elRef} className="float-buttons">
      <a href={`tel:+${PHONE}`} className="float-btn float-btn-phone" aria-label="התקשרו אלי">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span className="float-label">התקשרו אלי</span>
      </a>
      <a href={WA_URL} target="_blank" rel="noreferrer" className="float-btn float-btn-wa" aria-label="שלחו הודעה בוואטסאפ">
        <WaSvg size={26} />
        <span className="float-label">WhatsApp</span>
      </a>
    </div>
  );
}
