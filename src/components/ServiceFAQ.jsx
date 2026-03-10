"use client";
import { useState } from "react";
import { C } from "@/lib/constants";

export default function ServiceFAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {items.map((item, i) => (
        <div key={i} style={{
          background: "white", borderRadius: "16px",
          border: open === i ? `1.5px solid ${C.sage}50` : "1.5px solid transparent",
          boxShadow: open === i ? "0 4px 24px rgba(44,42,38,0.08)" : "0 1px 8px rgba(44,42,38,0.04)",
          overflow: "hidden", transition: "all 0.2s",
        }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%", background: "none", border: "none", cursor: "pointer",
              padding: "20px 24px", display: "flex", justifyContent: "space-between",
              alignItems: "center", gap: "16px", textAlign: "right",
            }}>
            <span style={{ fontSize: "16px", fontWeight: 700, color: C.bark, flex: 1 }}>{item.q}</span>
            <span style={{
              width: "28px", height: "28px", borderRadius: "50%",
              background: open === i ? C.sage : C.sand,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, transition: "all 0.3s", fontSize: "14px",
              color: open === i ? "white" : C.barkLight,
              transform: open === i ? "rotate(45deg)" : "none",
            }}>+</span>
          </button>
          <div style={{
            maxHeight: open === i ? "300px" : "0",
            overflow: "hidden", transition: "max-height 0.3s ease",
          }}>
            <div style={{ padding: "0 24px 20px", fontSize: "15px", color: C.barkLight, lineHeight: 1.8 }}>
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
