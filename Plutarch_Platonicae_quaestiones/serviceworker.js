'use strict';

var CACHE_NAME = 'Plutarch_Platonicae_quaestiones';
var urlsToCache = [
  '../book.css',
  '../book.js',
  '../atobAndBtoaTogether.min.js',
  '../GFSDidot.css',
  '../GFSDidot.ttf',
  '../OpenSans.css',
  '../OpenSans.ttf',
  '../Cinzel.css',
  '../Cinzel.ttf',
  '../CormorantGaramond.css',
  '../CormorantGaramond.ttf',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
urlsToCache.push("Plutarch_Platonicae_quaestiones.html");
urlsToCache.push("Plutarch_Platonicae_quaestiones_2.html");
urlsToCache.push("Plutarch_Platonicae_quaestiones_3.html");
urlsToCache.push("Plutarch_Platonicae_quaestiones_4.html");
urlsToCache.push("Plutarch_Platonicae_quaestiones_5.html");
urlsToCache.push("Plutarch_Platonicae_quaestiones_6.html");
urlsToCache.push("Plutarch_Platonicae_quaestiones_7.html");
urlsToCache.push("Plutarch_Platonicae_quaestiones_8.html");
urlsToCache.push("Plutarch_Platonicae_quaestiones_9.html");
urlsToCache.push("Plutarch_Platonicae_quaestiones_10.html");
