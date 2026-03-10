"use client";
import { useState } from "react";
import { C } from "@/lib/constants";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.sage}15`, padding: "0" }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 0", border: "none", background: "none", cursor: "pointer",
        textAlign: "right", fontFamily: "'Heebo', sans-serif",
      }}>
        <span style={{ fontSize: "15px", fontWeight: 600, color: C.bark, lineHeight: 1.5, paddingLeft: "12px" }}>
          {q}
        </span>
        <span style={{
          fontSize: "20px", color: C.sage, transition: "transform 0.3s",
          transform: open ? "rotate(45deg)" : "none", flexShrink: 0,
        }}>+</span>
      </button>
      {open && (
        <div style={{
          padding: "0 0 16px", fontSize: "14px", lineHeight: 1.7,
          color: C.barkLight, animation: "fadeDown 0.3s ease",
        }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FaqAccordion({ items }) {
  return (
    <div style={{
      background: "white", borderRadius: "16px", padding: "4px 20px",
      border: `1px solid ${C.sage}15`,
      boxShadow: "0 2px 8px rgba(44,42,38,0.03)",
    }}>
      {items.map((item, i) => (
        <FaqItem key={i} q={item.q} a={item.a} />
      ))}
    </div>
  );
}
