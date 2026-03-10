"use client";
import { useState, useRef } from "react";

export default function MagnifyImage({ src, alt }) {
  const [lens, setLens] = useState(null);
  const containerRef = useRef(null);
  const ZOOM = 2.5;
  const LENS_SIZE = 150;
  const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const handleMove = (e) => {
    if (isTouchDevice) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;
    setLens({ x, y, bgX, bgY });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setLens(null)}
      style={{
        borderRadius: "20px", overflow: "hidden",
        boxShadow: "0 4px 24px rgba(44,42,38,0.1)",
        position: "relative", cursor: isTouchDevice ? "default" : "zoom-in",
      }}
    >
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
      {lens && !isTouchDevice && (
        <div style={{
          position: "absolute",
          left: lens.x - LENS_SIZE / 2,
          top: lens.y - LENS_SIZE / 2,
          width: LENS_SIZE, height: LENS_SIZE,
          borderRadius: "50%",
          border: "3px solid rgba(255,255,255,0.8)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          backgroundImage: `url(${src})`,
          backgroundSize: `${containerRef.current.offsetWidth * ZOOM}px ${containerRef.current.offsetHeight * ZOOM}px`,
          backgroundPosition: `${lens.bgX}% ${lens.bgY}%`,
          pointerEvents: "none",
        }} />
      )}
    </div>
  );
}
