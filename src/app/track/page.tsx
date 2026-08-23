"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Search, ClipboardList } from "lucide-react";

export default function TrackPage() {
  const [invoiceNumber, setInvoiceNumber] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (invoiceNumber.trim()) {
      alert(`Searching for invoice: ${invoiceNumber}`);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#FFF7F7" }}>

      {/* ─── NAVBAR ─── */}
      <div style={{ position: "relative", zIndex: 50, background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.03)" }}>
        <Navbar activePage="consignment" />
      </div>

      {/* ─── HERO SECTION ─── */}
      <section className="track-hero" style={{
        position: "relative",
        width: "100%",
        minHeight: "580px",
        overflow: "hidden",
        flexShrink: 0,
        background: "#FFF7F7",
        display: "flex",
        alignItems: "center",
      }}>

        {/* Video container — Anchored to the RIGHT (occupies 62-65% of hero width) */}
        <div className="track-video-wrapper" style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "64%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
          background: "linear-gradient(135deg, #fef6f0 0%, #fdf0e9 40%, #e8cfc0 100%)",
        }}>
          <video
            autoPlay muted loop playsInline preload="auto"
            poster="/fallback_truck.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "68% center",
            }}
          >
            <source src="/TRACK.mp4" type="video/mp4" />
          </video>

          {/* Smooth subtle fade on the left part of the video for a seamless blend */}
          <div className="track-video-gradient" style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "linear-gradient(to right, #FFF7F7 0%, rgba(255,247,247,0.75) 4%, rgba(255,247,247,0.25) 12%, transparent 20%)",
            pointerEvents: "none",
          }} />
        </div>

        {/* ─── HERO CONTENT (LEFT SIDE) ─── */}
        <div className="track-hero-inner" style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "30px clamp(20px, 4vw, 55px) 50px",
          boxSizing: "border-box",
        }}>

          {/* ─── TRACKING CARD (LEFT 35-38%) ─── */}
          <div className="track-card" style={{
            width: "440px",
            maxWidth: "100%",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.95)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 1)",
            padding: "34px 36px",
            boxSizing: "border-box",
          }}>

            {/* Eyebrow */}
            <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" as const, margin: "0 0 8px 0" }}>
              <span style={{ color: "#111827" }}>DELIVERING TRUST.</span>{" "}
              <span style={{ color: "#D71920" }}>MOVING INDIA.</span>
            </p>

            {/* Heading */}
            <h1 style={{ margin: "0 0 10px 0", padding: 0, lineHeight: 1.06, fontWeight: 900, fontFamily: "var(--font-geist-sans), sans-serif" }}>
              <span className="track-heading-line" style={{ display: "block", fontSize: "40px", color: "#111827" }}>
                Track Your Shipment.
              </span>
              <span className="track-heading-line" style={{ display: "block", fontSize: "40px", color: "#D71920" }}>
                Stay Updated, Always.
              </span>
            </h1>

            {/* Description */}
            <p style={{ fontSize: "13.5px", color: "#4B5563", lineHeight: 1.6, margin: "0 0 20px 0" }}>
              Enter your invoice number below and press &ldquo;Search&rdquo;
              <br />
              to track position of your consignment.
            </p>

            {/* Search form — single row on desktop */}
            <form onSubmit={handleSearch} className="track-form" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#fff",
                border: "1px solid #E5E7EB",
                borderRadius: "10px",
                padding: "0 14px",
                height: "50px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                boxSizing: "border-box",
              }}>
                <ClipboardList style={{ width: "18px", height: "18px", color: "#9CA3AF", flexShrink: 0 }} strokeWidth={1.7} />
                <input
                  type="text"
                  id="invoice-input"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  placeholder="Enter your invoice number"
                  style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: "13.5px", color: "#111827" }}
                />
              </div>
              <button type="submit" id="btn-track-search" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                height: "50px", padding: "0 24px",
                background: "#D71920", color: "#fff", fontWeight: 700, fontSize: "14px",
                border: "none", borderRadius: "10px", cursor: "pointer",
                boxShadow: "0 4px 14px rgba(215,25,32,0.30)", flexShrink: 0,
                transition: "filter 0.15s, transform 0.15s",
              }}>
                <Search style={{ width: "15px", height: "15px" }} strokeWidth={2.5} />
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FEATURE CARDS ─── */}
      <div className="track-cards-wrapper" style={{
        position: "relative",
        zIndex: 20,
        marginTop: "-40px",
        padding: "0 clamp(20px, 4vw, 55px) 48px",
        boxSizing: "border-box",
      }}>
        <div className="track-cards-grid" style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}>
          <FeatureCard icon={<ShieldLockIcon />} title="Safe & Secure" description="Your goods are in safe hands with us." />
          <FeatureCard icon={<TruckClockIcon />} title="On-Time Delivery" description="We value time and ensure timely deliveries." />
          <FeatureCard icon={<NetworkMapIcon />} title="Pan India Network" description="Strong network across India with branches & agents." />
          <FeatureCard icon={<HeadsetIcon />} title="Customer Support" description="24/7 support for all your transport needs." />
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1280px) {
          .track-video-wrapper { width: 60% !important; }
          .track-card { width: 420px !important; padding: 28px 30px !important; }
          .track-heading-line { font-size: 36px !important; }
        }
        @media (max-width: 1024px) {
          .track-hero { min-height: 520px !important; }
          .track-video-wrapper { width: 56% !important; }
          .track-card { width: 380px !important; padding: 26px 24px !important; }
          .track-heading-line { font-size: 32px !important; }
          .track-cards-wrapper { margin-top: -30px !important; }
          .track-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .track-hero {
            display: flex !important;
            flex-direction: column !important;
            min-height: auto !important;
            background: #FFF7F7 !important;
          }
          .track-video-wrapper {
            position: relative !important;
            width: 100% !important;
            height: 300px !important;
            right: auto !important;
            top: auto !important;
          }
          .track-video-gradient {
            background: linear-gradient(to bottom, transparent 85%, rgba(255,247,247,0.4) 100%) !important;
          }
          .track-hero-inner {
            padding: 20px 20px 40px !important;
            justify-content: center !important;
          }
          .track-card {
            width: 100% !important;
            max-width: 480px !important;
            padding: 24px 20px !important;
          }
          .track-heading-line { font-size: 32px !important; }
          .track-cards-wrapper {
            margin-top: 0 !important;
            padding: 0 16px 32px !important;
          }
          .track-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .track-video-wrapper {
            height: 240px !important;
          }
          .track-heading-line { font-size: 28px !important; }
          .track-form {
            flex-direction: column !important;
          }
          .track-form button {
            width: 100% !important;
          }
          .track-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ──────────────────────────────────────────────
   FEATURE CARD — compact: ~220px tall
   ────────────────────────────────────────────── */
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        background: "#FFF7F7",
        borderRadius: "16px",
        border: "1px solid rgba(215,25,32,0.07)",
        boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
        padding: "22px 20px 26px",
        boxSizing: "border-box",
        transition: "transform 0.25s, box-shadow 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 14px 32px rgba(215,25,32,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.05)";
      }}
    >
      <DotPattern />

      {/* Red bottom bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "#D71920", borderRadius: "0 0 16px 16px" }} />

      {/* Icon circle */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", alignItems: "center", justifyContent: "center",
        width: "60px", height: "60px",
        borderRadius: "50%", background: "rgba(215,25,32,0.09)",
        marginBottom: "12px",
      }}>
        {icon}
      </div>

      {/* Title */}
      <h3 style={{ position: "relative", zIndex: 2, fontSize: "16px", fontWeight: 800, color: "#111827", margin: "0 0 5px 0" }}>
        {title}
      </h3>

      {/* Red accent line */}
      <div style={{ position: "relative", zIndex: 2, width: "28px", height: "2.5px", background: "#D71920", borderRadius: "2px", marginBottom: "8px" }} />

      {/* Description */}
      <p style={{ position: "relative", zIndex: 2, fontSize: "13.5px", color: "#6B7280", lineHeight: 1.5, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

/* Dot pattern (upper-left decoration) */
function DotPattern() {
  const dots: React.ReactNode[] = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      dots.push(<circle key={`${r}-${c}`} cx={c * 9 + 5} cy={r * 9 + 5} r="1.8" fill="#D71920" />);
    }
  }
  return (
    <svg style={{ position: "absolute", top: "8px", left: "8px", opacity: 0.18, pointerEvents: "none", userSelect: "none" }} width="50" height="50" viewBox="0 0 50 50" fill="none">
      {dots}
    </svg>
  );
}

/* ──── ICONS ──── */
function ShieldLockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D71920" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M12 11V9a2 2 0 0 0-4 0v2" />
    </svg>
  );
}

function TruckClockIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 36 32" fill="none" stroke="#D71920" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="26" cy="9" r="7" />
      <polyline points="26 6 26 9 28 11" />
      <rect x="1" y="16" width="15" height="11" rx="2" />
      <path d="M16 19h5l3.5 3.5V27H16V19z" />
      <circle cx="5.5" cy="27" r="2.5" />
      <circle cx="21.5" cy="27" r="2.5" />
    </svg>
  );
}

function NetworkMapIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D71920" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
      <circle cx="4" cy="20" r="1.8" />
      <circle cx="20" cy="20" r="1.8" />
      <line x1="4" y1="20" x2="12" y2="14" />
      <line x1="20" y1="20" x2="12" y2="14" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D71920" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}
