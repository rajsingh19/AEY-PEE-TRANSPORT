"use client";

import { useEffect } from "react";

/**
 * GlobalAssetPreloader
 *
 * Mounted in the root layout so it runs on EVERY route.
 * It eagerly preloads the important hero images and videos for all 5 main pages
 * so that cross-page navigation feels instant.
 *
 * Strategy:
 *  1. Hero IMAGES   → injected as <link rel="preload" as="image"> in <head>
 *                      (highest browser priority, near-zero cost for small WebPs)
 *  2. Hero VIDEOS   → fetched via low-priority JS after the current page becomes
 *                      interactive (requestIdleCallback / setTimeout fallback).
 *                      This avoids blocking the main-thread paint.
 *  3. Mobile guard  → on slow connections (navigator.connection.effectiveType)
 *                      we skip video preloading entirely so mobile users aren't
 *                      penalised.
 */

// ────────────────────────────────────────────────────────
// Assets to preload
// ────────────────────────────────────────────────────────
const HERO_IMAGES = [
  "/fallback_home.webp",      // Home hero poster
  "/fallback_truck.webp",     // About hero poster
  "/services_hero.webp",      // Services hero
  "/contact_hero_visual.webp",// Contact hero
  "/TRACK_FALLBACK.webp",     // Track hero poster
] as const;

const HERO_VIDEOS = [
  "/TRUCK-VIDEO.mp4",  // Home hero video   (~3.7 MB)
  "/AP2.mp4",          // About hero video  (~2.1 MB)
  "/TRACK.mp4",        // Track hero video  (~1.3 MB)
] as const;

// ────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────

/** Returns true when the browser reports a slow / metered connection. */
function isSlowConnection(): boolean {
  if (typeof navigator === "undefined") return false;
  const conn = (navigator as Navigator & { connection?: { effectiveType?: string; saveData?: boolean } }).connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  if (conn.effectiveType === "slow-2g" || conn.effectiveType === "2g" || conn.effectiveType === "3g") return true;
  return false;
}

/** Inject a <link rel="preload"> into <head> if one doesn't already exist for `href`. */
function preloadImage(href: string) {
  if (document.querySelector(`link[rel="preload"][href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Fetch a video URL using a low-priority request.
 * We use `fetch` with `priority: "low"` (where supported) instead of a
 * hidden <video> element so we avoid creating unnecessary media decoders.
 * The response is simply consumed — the browser cache now holds the file.
 */
function preloadVideo(src: string) {
  fetch(src, {
    priority: "low",
    // Prevent CORS issues for same-origin static files
    credentials: "same-origin",
  }).catch(() => {
    // Silently swallow — preloading is best-effort
  });
}

// ────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────

export default function GlobalAssetPreloader() {
  useEffect(() => {
    // 1. Preload hero images immediately (cheap, high-priority)
    HERO_IMAGES.forEach(preloadImage);

    // 2. Preload hero videos after the page becomes interactive
    //    Use requestIdleCallback where supported, otherwise a
    //    short setTimeout to avoid contention with first-paint.
    const scheduleVideos = () => {
      if (isSlowConnection()) return; // skip on slow/metered connections

      HERO_VIDEOS.forEach(preloadVideo);
    };

    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(scheduleVideos, { timeout: 3000 });
    } else {
      setTimeout(scheduleVideos, 1500);
    }
  }, []);

  // This component renders nothing — it only triggers side-effects.
  return null;
}
