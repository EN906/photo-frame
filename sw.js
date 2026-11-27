// Offline cache for the photo frame app. Bump CACHE when you change any file.
const CACHE = 'pframe-126d74784d';
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./fonts/fonts.css",
  "./vendor/exifr.full.umd.js",
  "./vendor/stackblur.min.js",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./fonts/bebas-neue-latin-400-normal.woff2",
  "./fonts/ibm-plex-mono-latin-400-normal.woff2",
  "./fonts/ibm-plex-mono-latin-500-normal.woff2",
  "./fonts/montserrat-latin-400-normal.woff2",
  "./fonts/montserrat-latin-500-normal.woff2",
  "./fonts/montserrat-latin-600-normal.woff2",
  "./fonts/montserrat-latin-700-normal.woff2",
  "./fonts/montserrat-latin-800-normal.woff2",
  "./fonts/playfair-display-latin-400-normal.woff2",
  "./fonts/playfair-display-latin-600-normal.woff2",
  "./fonts/playfair-display-latin-700-normal.woff2",
  "./fonts/playfair-display-latin-800-normal.woff2"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    // Fresh page when online, cached page when offline.
    e.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./index.html', copy)); return res; })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
