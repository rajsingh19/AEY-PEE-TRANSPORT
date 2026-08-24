"use client";

import { useEffect, useRef, useState } from "react";

/**
 * GlobalAssetPreloader
 *
 * Mounted in the root layout so it runs on EVERY route.
 * Eagerly preloads hero images, videos, and fully warms the Contact
 * Google Maps embed iframe so cross-page navigation feels instant.
 *
 * Strategy:
 *  1. Hero IMAGES       → <link rel="preload" as="image"> in <head> (immediate)
 *  2. Map DNS/TLS       → <link rel="preconnect"> + <link rel="dns-prefetch">
 *  3. Map FULL WARM-UP  → offscreen iframe with real dimensions so Google Maps
 *                         actually loads its JS bundle, geocodes, and fetches tiles.
 *                         The iframe is removed once loaded — browser HTTP cache
 *                         retains all sub-resources for the Contact page iframe.
 *  4. Hero VIDEOS       → low-priority fetch after page is interactive
 *  5. Mobile guard      → slow connections skip video preloading
 */

// ────────────────────────────────────────────────────────
// Assets to preload
// ────────────────────────────────────────────────────────
const HERO_IMAGES = [
  "/fallback_home.webp",
  "/fallback_truck.webp",
  "/services_hero.webp",
  "/contact_hero_visual.webp",
  "/TRACK_FALLBACK.webp",
  "/chatbot.gif",              // Chatbot floating icon
  "/logo.png",                 // Chatbot header logo
] as const;

const HERO_VIDEOS = [
  "/TRUCK-VIDEO.mp4",
  "/AP2.mp4",
  "/TRACK.mp4",
] as const;

// Default map URL matching the Contact page's initial state (Ulhasnagar Branch)
const DEFAULT_MAP_QUERY =
  "A/3-New Priya Darshani CHS, C-Block, Shahad Station Road, Ulhasnagar - 421003" +
  " (AEY-PEE TRANSPORT COMPANY PVT. LTD.)";
const DEFAULT_MAP_SRC =
  `https://maps.google.com/maps?q=${encodeURIComponent(DEFAULT_MAP_QUERY)}` +
  `&t=&z=15&ie=UTF8&iwloc=&output=embed`;

// ────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────

function isSlowConnection(): boolean {
  if (typeof navigator === "undefined") return false;
  const conn = (navigator as Navigator & {
    connection?: { effectiveType?: string; saveData?: boolean };
  }).connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  const ect = conn.effectiveType;
  return ect === "slow-2g" || ect === "2g" || ect === "3g";
}

function preloadImage(href: string) {
  if (document.querySelector(`link[rel="preload"][href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = href;
  document.head.appendChild(link);
}

function preconnectMapDomains() {
  const domains = [
    "https://maps.google.com",
    "https://maps.gstatic.com",
    "https://maps.googleapis.com",
  ];
  domains.forEach((href) => {
    if (!document.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      link.crossOrigin = "";
      document.head.appendChild(link);
    }
    if (!document.querySelector(`link[rel="dns-prefetch"][href="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = href;
      document.head.appendChild(link);
    }
  });
}

function preloadVideo(src: string) {
  fetch(src, { priority: "low", credentials: "same-origin" }).catch(() => {});
}

/**
 * Create an offscreen iframe that Google Maps will fully render inside.
 *
 * Key requirements for proper Google Maps initialization:
 *  - Real dimensions (not 1×1px) so Maps loads correct zoom-level tiles
 *  - NOT visibility:hidden / display:none — Maps skips rendering
 *  - NOT opacity:0 — some browsers skip compositing
 *  - Positioned far off-screen so it's invisible to the user
 *
 * Once loaded, the iframe is removed after a short delay.  The browser's
 * HTTP cache retains all fetched sub-resources (JS bundles, tiles, fonts,
 * geocoding response), so the Contact page's iframe hits cache on every
 * sub-request.
 */
function warmUpMapIframe() {
  // Don't double-warm
  if (document.getElementById("__map-warmup")) return;

  const iframe = document.createElement("iframe");
  iframe.id = "__map-warmup";
  iframe.src = DEFAULT_MAP_SRC;
  iframe.title = "Map Warmup";
  iframe.setAttribute("aria-hidden", "true");
  iframe.tabIndex = -1;

  // Offscreen but with real dimensions — Google Maps will fully init
  Object.assign(iframe.style, {
    position: "fixed",
    top: "0px",
    left: "-10000px",
    width: "600px",
    height: "400px",
    border: "0",
    pointerEvents: "none",
    zIndex: "-1",
  });

  // Remove the warm-up iframe once it's loaded — HTTP cache keeps the resources
  iframe.addEventListener("load", () => {
    // Give Google Maps a moment to finish its internal async initialization
    // (tile fetching, geocoding response, JS eval) before removing
    setTimeout(() => {
      iframe.remove();
    }, 4000);
  });

  document.body.appendChild(iframe);
}

// ────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────

export default function GlobalAssetPreloader() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    // 1. Preload hero images & preconnect map domains immediately
    HERO_IMAGES.forEach(preloadImage);
    preconnectMapDomains();

    // 2. Schedule heavier background work after page becomes interactive
    const scheduleBackground = () => {
      // Warm up the Google Maps iframe with real dimensions
      warmUpMapIframe();

      // Preload hero videos (skip on slow connections)
      if (!isSlowConnection()) {
        HERO_VIDEOS.forEach(preloadVideo);
      }
    };

    if ("requestIdleCallback" in window) {
      (window as Window & {
        requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
      }).requestIdleCallback(scheduleBackground, { timeout: 2000 });
    } else {
      setTimeout(scheduleBackground, 800);
    }
  }, []);

  // Renders nothing — all work is imperative DOM manipulation
  return null;
}
