// Post-build step for the web/PWA export.
// Expo's SPA ("single") output ignores app/+html.tsx, so we inject the
// Add-to-Home-Screen meta tags into dist/index.html here, and create a
// 404.html fallback so client-side routes don't 404 on GitHub Pages refresh.
//
// Usage: node scripts/inject-pwa-meta.mjs   (run after `expo export --platform web`)
import { readFileSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const BASE_URL = "/Omnilingo"; // keep in sync with app.json experiments.baseUrl
const indexPath = join(DIST, "index.html");

if (!existsSync(indexPath)) {
  console.error(`✗ ${indexPath} not found — run \`expo export --platform web\` first.`);
  process.exit(1);
}

let html = readFileSync(indexPath, "utf8");

// 1) viewport-fit=cover so the app fills the notch area when launched fullscreen
html = html.replace(
  /<meta name="viewport"[^>]*>/,
  '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />'
);

// 2) Add-to-Home-Screen meta + icon, inserted right before </head> (idempotent)
const pwaTags = `
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Omnilingo" />
    <meta name="theme-color" content="#0f172a" />
    <link rel="apple-touch-icon" href="${BASE_URL}/apple-touch-icon.png" />
    <style>html, body { background-color: #0f172a; }</style>
  `;
if (!html.includes("apple-mobile-web-app-capable")) {
  html = html.replace("</head>", `${pwaTags}</head>`);
}

writeFileSync(indexPath, html);

// 3) SPA fallback for GitHub Pages (deep links / refresh)
copyFileSync(indexPath, join(DIST, "404.html"));

console.log("✓ Injected PWA meta tags and created dist/404.html");
