"use client";
import { useState } from "react";
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

// Portrait photos (indexes 3,4,5) focus on top so faces/hands stay visible after square crop
const portraitIndexes = new Set([3, 4, 5]);

export default function ClinicPhotos() {
  const [lbIndex, setLbIndex] = useState(null);

  return (
    <>
      <section
        style={{
          background: C.cream,
          padding: "60px 20px",
        }}
        aria-label="גלריית תמונות מהקליניקה"
      >
        <div
          className="clinic-photos-grid"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {ALL_PHOTOS.map((p, i) => {
            const objectPosition = portraitIndexes.has(i) ? "center top" : "center center";
            return (
              <button
                key={p.src}
                onClick={() => setLbIndex(i)}
                className="clinic-photo-tile"
                aria-label={`הצג תמונה גדולה: ${p.alt}`}
                style={{
                  position: "relative",
                  aspectRatio: "1 / 1",
                  borderRadius: "14px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "none",
                  padding: 0,
                  background: "none",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                  transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease",
                  display: "block",
                }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition,
                  }}
                />
              </button>
            );
          })}
        </div>
      </section>

      <style jsx>{`
        .clinic-photo-tile:hover {
          transform: translateY(-4px) scale(1.015);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
        }
        .clinic-photo-tile:focus-visible {
          outline: 3px solid ${C.gold};
          outline-offset: 3px;
        }
        @media (max-width: 768px) {
          .clinic-photos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .clinic-photo-tile {
            border-radius: 10px !important;
          }
        }
      `}</style>

      {lbIndex !== null && (
        <PhotoLightbox photos={ALL_PHOTOS} startIndex={lbIndex} onClose={() => setLbIndex(null)} />
      )}
    </>
  );
}
