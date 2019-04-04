'use strict';

var CACHE_NAME = 'Plutarch_Mulierum_virtutes';
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
urlsToCache.push("Plutarch_Mulierum_virtutes_0.html");
urlsToCache.push("Plutarch_Mulierum_virtutes.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_2.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_3.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_4.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_5.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_6.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_7.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_8.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_9.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_10.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_11.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_12.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_13.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_14.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_15.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_16.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_17.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_18.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_19.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_20.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_21.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_22.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_23.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_24.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_25.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_26.html");
urlsToCache.push("Plutarch_Mulierum_virtutes_27.html");
