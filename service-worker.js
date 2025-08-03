const cacheName = 'calcolatrice-cache-v3'; // Cambia versione ogni volta che aggiorni i file

const filesToCache = [
  './',
  './index.html',
  './css.css',
  './js.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Installa il nuovo SW e salva i file nella cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

// Cancella cache vecchie
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== cacheName)
                  .map(name => caches.delete(name))
      );
    })
  );
});

// Servi dalla cache o dal network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
