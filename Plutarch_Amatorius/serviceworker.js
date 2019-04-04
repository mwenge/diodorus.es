'use strict';

var CACHE_NAME = 'Plutarch_Amatorius';
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
urlsToCache.push("Plutarch_Amatorius.html");
urlsToCache.push("Plutarch_Amatorius_2.html");
urlsToCache.push("Plutarch_Amatorius_3.html");
urlsToCache.push("Plutarch_Amatorius_4.html");
urlsToCache.push("Plutarch_Amatorius_5.html");
urlsToCache.push("Plutarch_Amatorius_6.html");
urlsToCache.push("Plutarch_Amatorius_7.html");
urlsToCache.push("Plutarch_Amatorius_8.html");
urlsToCache.push("Plutarch_Amatorius_9.html");
urlsToCache.push("Plutarch_Amatorius_10.html");
urlsToCache.push("Plutarch_Amatorius_11.html");
urlsToCache.push("Plutarch_Amatorius_12.html");
urlsToCache.push("Plutarch_Amatorius_13.html");
urlsToCache.push("Plutarch_Amatorius_14.html");
urlsToCache.push("Plutarch_Amatorius_15.html");
urlsToCache.push("Plutarch_Amatorius_16.html");
urlsToCache.push("Plutarch_Amatorius_17.html");
urlsToCache.push("Plutarch_Amatorius_18.html");
urlsToCache.push("Plutarch_Amatorius_19.html");
urlsToCache.push("Plutarch_Amatorius_20.html");
urlsToCache.push("Plutarch_Amatorius_21.html");
urlsToCache.push("Plutarch_Amatorius_22.html");
urlsToCache.push("Plutarch_Amatorius_23.html");
urlsToCache.push("Plutarch_Amatorius_24.html");
urlsToCache.push("Plutarch_Amatorius_25.html");
urlsToCache.push("Plutarch_Amatorius_26.html");
