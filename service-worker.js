self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("b3l-admin-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icons/icon.png",
        "./screenshot/screen1.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
