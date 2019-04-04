'use strict';

var CACHE_NAME = 'Plutarch_Tiberius_Gracchus';
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
urlsToCache.push("Plutarch_Tiberius_Gracchus.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_2.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_3.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_4.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_5.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_6.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_7.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_8.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_9.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_10.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_11.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_12.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_13.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_14.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_15.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_16.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_17.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_18.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_19.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_20.html");
urlsToCache.push("Plutarch_Tiberius_Gracchus_21.html");
urlsToCache.push("translation.js");
