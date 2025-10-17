"use client";
// QR code generator for the site URL with PNG download
import React, { useRef } from "react";
import QRCode from "react-qr-code";
import { data } from "@/lib/data";

export default function QRSection() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Convert SVG QR to PNG and trigger download
  const downloadPng = () => {
    const svg = svgRef.current;
    if (!svg) return;
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);
    const img = new Image();
    const svgBlob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const size = 1024;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      const pngUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = pngUrl;
      a.download = "elixcode-coffee-qr.png";
      a.click();
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const qrValue = data.siteUrl || "https://coffee.elixflare.com";

  return (
    <section id="qr" className="section bg-white">
      <div className="container">
        {/* This section renders the QR code that links to the site */}
        <div className="card p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-extrabold text-coffee-900">
              Your Table QR
            </h3>
            <p className="mt-2 text-coffee-700">
              Print and place this QR on your tables. When scanned, it opens{" "}
              <span className="font-semibold">{qrValue}</span>. Edit the URL
              anytime in{" "}
              <code className="bg-coffee-50 px-2 py-1 rounded">
                data/data.json
              </code>
              .
            </p>
            <div className="mt-5 flex gap-3">
              <button className="btn-primary" onClick={downloadPng}>
                Download PNG
              </button>
              <a
                className="btn-outline"
                href={qrValue}
                target="_blank"
                rel="noopener noreferrer">
                Open Site
              </a>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-coffee-100">
            <QRCode
              ref={svgRef as any}
              value={qrValue}
              size={256}
              bgColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
