const CACHE = "bball-stats-v6";
const BASE = "/basketball-stats/";
const ASSETS = [
  BASE,
  BASE + "index.html",
  BASE + "manifest.json",
  BASE + "icons/icon-192.png",
  BASE + "icons/icon-512.png",
  BASE + "icons/apple-touch-icon.png",
  BASE + "icons/icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Firebase SDK files are versioned, so cache them for offline use.
  if (url.origin === "https://www.gstatic.com" && url.pathname.startsWith("/firebasejs/")) {
    event.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      }))
    );
    return;
  }
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(BASE)) return;

  const isPage = req.mode === "navigate" || url.pathname === BASE || url.pathname === BASE + "index.html";
  if (isPage) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(BASE + "index.html", copy));
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match(BASE + "index.html") || caches.match(BASE)))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((cache) => cache.put(req, copy));
        return res;
      });
    })
  );
});
