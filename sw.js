// 最小 SW：只為滿足「加到主畫面」條件，不做積極快取（避免舊版卡住）
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.clients.claim());
self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
