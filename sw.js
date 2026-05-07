const CACHE_NAME = 'bank-v2';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://unpkg.com/html5-qrcode'
];

// 安裝並快取資源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 攔截請求 (離線優先策略)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
