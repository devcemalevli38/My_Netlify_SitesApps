const CACHE_NAME = 'cemal-evli-v2';
const ASSETS = [
  '/pwawebsite/',
  '/pwawebsite/index.html',
  '/pwawebsite/manifest.json',
  '/pwawebsite/projects.json',
  '/pwawebsite/games.json',
  '/pwawebsite/files.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
