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

// 3) Auto-update: stamp this build's version (the entry bundle hash) and inject a
// tiny poller. The running page checks version.json on load, on focus, and every
// few minutes; if the deployed version differs from the one baked in here, it
// reloads — so users pick up new deploys without manually clearing the PWA cache.
const hashMatch = html.match(/entry-([a-f0-9]+)\.js/);
const version = hashMatch ? hashMatch[1] : String(Date.now());
writeFileSync(join(DIST, "version.json"), JSON.stringify({ version }));

const updateScript = `
    <script>
      (function () {
        var BUILD = ${JSON.stringify(version)};
        function check() {
          fetch("${BASE_URL}/version.json?cb=" + Date.now(), { cache: "no-store" })
            .then(function (r) { return r.json(); })
            .then(function (j) {
              if (!j || !j.version || j.version === BUILD) return;
              // Guard against reload loops if the CDN lags: at most once / 60s.
              var last = +(sessionStorage.getItem("omni_reload") || 0);
              if (Date.now() - last < 60000) return;
              sessionStorage.setItem("omni_reload", String(Date.now()));
              location.reload();
            })
            .catch(function () {});
        }
        document.addEventListener("visibilitychange", function () {
          if (document.visibilityState === "visible") check();
        });
        window.addEventListener("load", check);
        setInterval(check, 5 * 60 * 1000);
      })();
    </script>
  `;
if (!html.includes("omni_reload")) {
  html = html.replace("</body>", `${updateScript}</body>`);
}

writeFileSync(indexPath, html);

// 4) SPA fallback for GitHub Pages (deep links / refresh) — gets the same scripts.
copyFileSync(indexPath, join(DIST, "404.html"));

console.log(`✓ Injected PWA meta + auto-update poller (build ${version}); wrote 404.html + version.json`);
