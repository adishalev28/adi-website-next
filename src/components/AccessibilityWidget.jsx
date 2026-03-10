"use client";
import { useState, useEffect, useRef } from "react";
import { C } from "@/lib/constants";

const STORAGE_KEY = "a11ySettings";

const FEATURES = [
  { key: "textSize", label: "הגדלת טקסט", icon: "א+", type: "cycle", values: [0, 1, 2], labels: ["רגיל", "גדול", "גדול מאוד"] },
  { key: "highContrast", label: "ניגודיות גבוהה", icon: "◐", type: "toggle" },
  { key: "noAnimations", label: "עצירת אנימציות", icon: "▣", type: "toggle" },
  { key: "highlightLinks", label: "הדגשת קישורים", icon: "🔗", type: "toggle" },
  { key: "largeCursor", label: "סמן מוגדל", icon: "⇗", type: "toggle" },
];

const CLASS_MAP = {
  textSize: ["", "a11y-text-lg", "a11y-text-xl"],
  highContrast: "a11y-high-contrast",
  noAnimations: "a11y-no-animations",
  highlightLinks: "a11y-highlight-links",
  largeCursor: "a11y-large-cursor",
};

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { textSize: 0, highContrast: false, noAnimations: false, highlightLinks: false, largeCursor: false };
}

function saveSettings(s) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

function applySettings(settings) {
  const html = document.documentElement.classList;
  html.remove("a11y-text-lg", "a11y-text-xl");
  if (settings.textSize > 0) html.add(CLASS_MAP.textSize[settings.textSize]);
  const cl = document.body.classList;
  ["highContrast", "noAnimations", "highlightLinks", "largeCursor"].forEach(k => {
    cl.toggle(CLASS_MAP[k], !!settings[k]);
  });
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(loadSettings);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    applySettings(settings);
    saveSettings(settings);
  }, [settings]);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    if (!heroCta) { setScrolled(true); return; }
    const obs = new IntersectionObserver(([entry]) => {
      setScrolled(!entry.isIntersecting);
    }, { threshold: 0 });
    obs.observe(heroCta);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    setTimeout(() => document.addEventListener("click", handler), 0);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const toggle = (key) => {
    setSettings(prev => {
      const feat = FEATURES.find(f => f.key === key);
      if (feat.type === "cycle") {
        return { ...prev, [key]: (prev[key] + 1) % feat.values.length };
      }
      return { ...prev, [key]: !prev[key] };
    });
  };

  const resetAll = () => {
    setSettings({ textSize: 0, highContrast: false, noAnimations: false, highlightLinks: false, largeCursor: false });
  };

  const isActive = (key) => {
    const feat = FEATURES.find(f => f.key === key);
    if (feat.type === "cycle") return settings[key] > 0;
    return !!settings[key];
  };

  const hasAny = Object.entries(settings).some(([k, v]) => v && v !== 0);

  return (
    <>
      {/* Floating button */}
      <button
        className="a11y-btn-float"
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        aria-label="פתיחת תפריט נגישות"
        title="נגישות"
        style={{
          ...(scrolled
            ? { bottom: "28px", top: "auto", right: "28px" }
            : { top: "90px", bottom: "auto", right: "14px" }),
          transition: "top 0.5s ease, bottom 0.5s ease, right 0.5s ease, transform 0.2s ease, box-shadow 0.3s",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4.5" r="2.5" fill="currentColor" stroke="none" />
          <path d="M12 7.5v4m0 0l-3.5 5.5m3.5-5.5l3.5 5.5" />
          <path d="M7 10h10" />
        </svg>
        {hasAny && (
          <span style={{
            position: "absolute", top: -2, right: -2,
            width: 14, height: 14, borderRadius: "50%",
            background: C.gold, border: "2px solid white",
          }} />
        )}
      </button>

      {/* Overlay */}
      <div
        className={`a11y-overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div ref={panelRef} className={`a11y-panel${open ? " open" : ""}`} role="dialog" aria-label="הגדרות נגישות">
        <div style={{
          padding: "20px 24px 16px",
          borderBottom: `1px solid ${C.sage}20`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 800, color: C.bark }}>
            נגישות
          </h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="סגירת תפריט נגישות"
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "24px", color: C.barkLight, padding: "4px", lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: "16px 24px", flex: 1 }}>
          {FEATURES.map(feat => {
            const active = isActive(feat.key);
            const cycleLabel = feat.type === "cycle" ? feat.labels[settings[feat.key]] : null;
            return (
              <button
                key={feat.key}
                onClick={() => toggle(feat.key)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: "14px",
                  padding: "14px 16px", marginBottom: "8px",
                  background: active ? `${C.sage}15` : "transparent",
                  border: `1.5px solid ${active ? C.sage : "#e5e5e5"}`,
                  borderRadius: "12px", cursor: "pointer",
                  transition: "all 0.2s", textAlign: "right",
                }}
              >
                <span style={{
                  width: 40, height: 40, borderRadius: "10px",
                  background: active ? C.sage : C.sand,
                  color: active ? "white" : C.bark,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px", fontWeight: 700, flexShrink: 0,
                  transition: "all 0.2s",
                }}>
                  {feat.icon}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: C.bark }}>
                    {feat.label}
                  </div>
                  {cycleLabel && (
                    <div style={{ fontSize: "12px", color: C.barkLight, marginTop: "2px" }}>
                      {cycleLabel}
                    </div>
                  )}
                </div>
                <span style={{
                  width: 20, height: 20, borderRadius: "50%",
                  background: active ? C.sage : "#ddd",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px", color: "white", flexShrink: 0,
                }}>
                  {active ? "✓" : ""}
                </span>
              </button>
            );
          })}

          {hasAny && (
            <button
              onClick={resetAll}
              style={{
                width: "100%", padding: "12px",
                background: "none", border: "1px dashed #ccc",
                borderRadius: "10px", cursor: "pointer",
                fontSize: "14px", color: C.barkLight, marginTop: "8px",
              }}
            >
              איפוס כל ההגדרות
            </button>
          )}
        </div>

        <div style={{
          padding: "16px 24px",
          borderTop: `1px solid ${C.sage}20`,
          textAlign: "center",
        }}>
          <a href="/accessibility/" style={{
            fontSize: "13px", color: C.sage, textDecoration: "underline",
          }}>
            הצהרת נגישות מלאה
          </a>
        </div>
      </div>
    </>
  );
}
