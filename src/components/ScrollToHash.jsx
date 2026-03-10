"use client";
import { useEffect } from "react";

/**
 * Handles scrolling to #hash on external entry (Google Ads sitelinks, shared links etc.)
 * The browser's native anchor-scroll fires before React finishes rendering,
 * so we retry several times until the layout stabilises.
 */
export default function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);
    const navbarHeight = 80;
    let attempts = 0;
    let lastTop = -1;

    function tryScroll() {
      const el = document.getElementById(id);
      if (!el) { if (attempts < 10) { attempts++; setTimeout(tryScroll, 300); } return; }

      const top = Math.round(el.getBoundingClientRect().top + window.scrollY - navbarHeight);
      window.scrollTo({ top, behavior: "instant" });

      if (top !== lastTop && attempts < 10) {
        lastTop = top;
        attempts++;
        setTimeout(tryScroll, 400);
      }
    }

    const timer = setTimeout(tryScroll, 500);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
