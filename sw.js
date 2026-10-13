// Service Worker untuk cache offline website pembelajaran
const CACHE_NAME = 'jago-ngiklan-banyumas-v5';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/app.js',
  './manifest.json',
  './assets/maskot/bawor-menyapa.svg',
  './assets/maskot/bawor-berpikir.svg',
  './assets/maskot/bawor-semangat.svg',
  './assets/maskot/bawor-kreasi.svg',
  './assets/maskot/bawor-bangga.svg',
  './assets/maskot/bawor-senang.svg',
  './assets/maskot/bawor-semangati.svg',
  './assets/maskot/bawor-favicon.svg',
  './assets/maskot/bawor-icon-192.svg',
  './assets/maskot/bawor-icon-512.svg',
  './assets/icons/peta-banyumas.svg',
  './assets/icons/medal-level1.svg',
  './assets/icons/medal-level2.svg',
  './assets/icons/medal-level3.svg',
  './assets/icons/medal-level4.svg',
  './assets/icons/medal-level5.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
