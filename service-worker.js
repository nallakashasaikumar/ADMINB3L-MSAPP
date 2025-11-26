const CACHE_NAME = "admin-app-cache-v1";

const FILES_TO_CACHE = [
  "/ADMINB3L-MSAPP/",
  "/ADMINB3L-MSAPP/index.html",
  "/ADMINB3L-MSAPP/admin.html",
  "/ADMINB3L-MSAPP/manifest.json",
  "/ADMINB3L-MSAPP/icons/icon-192.png",
  "/ADMINB3L-MSAPP/icons/icon-512.png",
  "/ADMINB3L-MSAPP/style.css",
  "/ADMINB3L-MSAPP/script.js"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Fetch Cached Files
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

