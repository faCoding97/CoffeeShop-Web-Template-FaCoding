"use client";
// Map embed + 'Open in Maps' and 'Directions' helpers (graceful fallback)
import { useState } from "react";

type Props = {
  query: string;
  title?: string;
  className?: string;
};

export default function MapEmbed({
  query,
  title = "Map",
  className = "",
}: Props) {
  const [loading, setLoading] = useState(false);

  const openInMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      query
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const directionsFromHere = () => {
    if (!navigator.geolocation) {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
          query
        )}&travelmode=driving`,
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const origin = `${coords.latitude},${coords.longitude}`;
        window.open(
          `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
            origin
          )}&destination=${encodeURIComponent(query)}&travelmode=driving`,
          "_blank",
          "noopener,noreferrer"
        );
        setLoading(false);
      },
      () => {
        setLoading(false);
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            query
          )}&travelmode=driving`,
          "_blank",
          "noopener,noreferrer"
        );
      }
    );
  };

  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    query
  )}&z=15&output=embed`;

  return (
    <div className={className}>
      {/* This section renders a Google Maps iframe (no API key required) */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl border border-coffee-100">
        <iframe
          title={title}
          src={embedSrc}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex gap-3">
        <button className="btn-outline" onClick={openInMaps}>
          Open in Maps
        </button>
        <button
          className="btn-primary"
          onClick={directionsFromHere}
          disabled={loading}>
          {loading ? "Getting location..." : "Directions from here"}
        </button>
      </div>
    </div>
  );
}
