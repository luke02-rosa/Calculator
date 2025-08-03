const cacheName = 'calcolatrice-cache-v8'; // Cambia numero ad ogni modifica importante

const filesToCache = [
  './',
  './index.html',
  './css.css',
  './js.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Installa: salva i file nella nuova cache
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Attiva subito il nuovo service worker
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  );
});

// Attiva: cancella cache vecchie e prende il controllo subito
self.addEventListener('activate', (event) => {
  clients.claim(); // Forza controllo immediato delle tab aperte
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== cacheName)
          .map((name) => caches.delete(name))
      )
    )
  );
});

// Gestisce richieste: prova a servire dalla cache, altrimenti scarica
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
