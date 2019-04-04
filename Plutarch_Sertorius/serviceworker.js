'use strict';

var CACHE_NAME = 'Plutarch_Sertorius';
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
urlsToCache.push("Plutarch_Sertorius.html");
urlsToCache.push("Plutarch_Sertorius_2.html");
urlsToCache.push("Plutarch_Sertorius_3.html");
urlsToCache.push("Plutarch_Sertorius_4.html");
urlsToCache.push("Plutarch_Sertorius_5.html");
urlsToCache.push("Plutarch_Sertorius_6.html");
urlsToCache.push("Plutarch_Sertorius_7.html");
urlsToCache.push("Plutarch_Sertorius_8.html");
urlsToCache.push("Plutarch_Sertorius_9.html");
urlsToCache.push("Plutarch_Sertorius_10.html");
urlsToCache.push("Plutarch_Sertorius_11.html");
urlsToCache.push("Plutarch_Sertorius_12.html");
urlsToCache.push("Plutarch_Sertorius_13.html");
urlsToCache.push("Plutarch_Sertorius_14.html");
urlsToCache.push("Plutarch_Sertorius_15.html");
urlsToCache.push("Plutarch_Sertorius_16.html");
urlsToCache.push("Plutarch_Sertorius_17.html");
urlsToCache.push("Plutarch_Sertorius_18.html");
urlsToCache.push("Plutarch_Sertorius_19.html");
urlsToCache.push("Plutarch_Sertorius_20.html");
urlsToCache.push("Plutarch_Sertorius_21.html");
urlsToCache.push("Plutarch_Sertorius_22.html");
urlsToCache.push("Plutarch_Sertorius_23.html");
urlsToCache.push("Plutarch_Sertorius_24.html");
urlsToCache.push("Plutarch_Sertorius_25.html");
urlsToCache.push("Plutarch_Sertorius_26.html");
urlsToCache.push("Plutarch_Sertorius_27.html");
urlsToCache.push("translation.js");
