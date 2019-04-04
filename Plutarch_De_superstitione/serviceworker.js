'use strict';

var CACHE_NAME = 'Plutarch_De_superstitione';
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
urlsToCache.push("Plutarch_De_superstitione.html");
urlsToCache.push("Plutarch_De_superstitione_2.html");
urlsToCache.push("Plutarch_De_superstitione_3.html");
urlsToCache.push("Plutarch_De_superstitione_4.html");
urlsToCache.push("Plutarch_De_superstitione_5.html");
urlsToCache.push("Plutarch_De_superstitione_6.html");
urlsToCache.push("Plutarch_De_superstitione_7.html");
urlsToCache.push("Plutarch_De_superstitione_8.html");
urlsToCache.push("Plutarch_De_superstitione_9.html");
urlsToCache.push("Plutarch_De_superstitione_10.html");
urlsToCache.push("Plutarch_De_superstitione_11.html");
urlsToCache.push("Plutarch_De_superstitione_12.html");
urlsToCache.push("Plutarch_De_superstitione_13.html");
urlsToCache.push("Plutarch_De_superstitione_14.html");
