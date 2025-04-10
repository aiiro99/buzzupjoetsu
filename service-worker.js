
const CACHE_NAME = 'buzzup-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.scss',
  '/assets/js/main.js',
  '/manifest.json'
];

// インストール時キャッシュ
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// リクエスト時キャッシュ優先
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
