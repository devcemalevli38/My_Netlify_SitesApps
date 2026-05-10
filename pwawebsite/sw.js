const CACHE_NAME = 'cemal-evli-v1';
const ASSETS = [
  './',
  './index.html',
  './projects.json',
  './games.json',
  './files.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});