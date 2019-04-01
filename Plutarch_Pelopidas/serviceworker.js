'use strict';

var CACHE_NAME = 'Plutarch_Pelopidas';
var urlsToCache = [
  'Plutarch_Pelopidas.html',
  'translation.js',
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
urlsToCache.push("Plutarch_Pelopidas.html");
urlsToCache.push("Plutarch_Pelopidas_2.html");
urlsToCache.push("Plutarch_Pelopidas_3.html");
urlsToCache.push("Plutarch_Pelopidas_4.html");
urlsToCache.push("Plutarch_Pelopidas_5.html");
urlsToCache.push("Plutarch_Pelopidas_6.html");
urlsToCache.push("Plutarch_Pelopidas_7.html");
urlsToCache.push("Plutarch_Pelopidas_8.html");
urlsToCache.push("Plutarch_Pelopidas_9.html");
urlsToCache.push("Plutarch_Pelopidas_10.html");
urlsToCache.push("Plutarch_Pelopidas_11.html");
urlsToCache.push("Plutarch_Pelopidas_12.html");
urlsToCache.push("Plutarch_Pelopidas_13.html");
urlsToCache.push("Plutarch_Pelopidas_14.html");
urlsToCache.push("Plutarch_Pelopidas_15.html");
urlsToCache.push("Plutarch_Pelopidas_16.html");
urlsToCache.push("Plutarch_Pelopidas_17.html");
urlsToCache.push("Plutarch_Pelopidas_18.html");
urlsToCache.push("Plutarch_Pelopidas_19.html");
urlsToCache.push("Plutarch_Pelopidas_20.html");
urlsToCache.push("Plutarch_Pelopidas_21.html");
urlsToCache.push("Plutarch_Pelopidas_22.html");
urlsToCache.push("Plutarch_Pelopidas_23.html");
urlsToCache.push("Plutarch_Pelopidas_24.html");
urlsToCache.push("Plutarch_Pelopidas_25.html");
urlsToCache.push("Plutarch_Pelopidas_26.html");
urlsToCache.push("Plutarch_Pelopidas_27.html");
urlsToCache.push("Plutarch_Pelopidas_28.html");
urlsToCache.push("Plutarch_Pelopidas_29.html");
urlsToCache.push("Plutarch_Pelopidas_30.html");
urlsToCache.push("Plutarch_Pelopidas_31.html");
urlsToCache.push("Plutarch_Pelopidas_32.html");
urlsToCache.push("Plutarch_Pelopidas_33.html");
urlsToCache.push("Plutarch_Pelopidas_34.html");
urlsToCache.push("Plutarch_Pelopidas_35.html");
