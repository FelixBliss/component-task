self.options = {
  domain: "3nbf4.com",
  zoneId: 12086670
};
self.lary = "";
importScripts("https://3nbf4.com/act/files/service-worker.min.js?r=sw");

const CACHE_NAME = "component-task-shell-v3";
const APP_SHELL = [
  "/",
  "/manifest.json",
  "/unnamed.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith("component-task-shell-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).then(async (response) => {
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put("./", response.clone());
        }
        return response;
      }).catch(async () => {
        return (await caches.match(request)) || (await caches.match("./"));
      })
    );
    return;
  }

  // Cache static assets after a successful network response. Content/data
  // requests remain network-first and are never treated as offline records.
  if (/\.(?:js|css|svg|png|jpe?g|webp|woff2?)$/i.test(url.pathname) ||
      url.pathname.endsWith("/manifest.json")) {
    event.respondWith(
      caches.match(request).then(async (cached) => {
        if (cached) return cached;
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }
        return response;
      })
    );
  }
});
