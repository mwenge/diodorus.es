'use strict';

var CACHE_NAME = 'Plutarch_Demosthenes';
var urlsToCache = [
  'Plutarch_Demosthenes.html',
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
urlsToCache.push("Plutarch_Demosthenes.html");
urlsToCache.push("Plutarch_Demosthenes_2.html");
urlsToCache.push("Plutarch_Demosthenes_3.html");
urlsToCache.push("Plutarch_Demosthenes_4.html");
urlsToCache.push("Plutarch_Demosthenes_5.html");
urlsToCache.push("Plutarch_Demosthenes_6.html");
urlsToCache.push("Plutarch_Demosthenes_7.html");
urlsToCache.push("Plutarch_Demosthenes_8.html");
urlsToCache.push("Plutarch_Demosthenes_9.html");
urlsToCache.push("Plutarch_Demosthenes_10.html");
urlsToCache.push("Plutarch_Demosthenes_11.html");
urlsToCache.push("Plutarch_Demosthenes_12.html");
urlsToCache.push("Plutarch_Demosthenes_13.html");
urlsToCache.push("Plutarch_Demosthenes_14.html");
urlsToCache.push("Plutarch_Demosthenes_15.html");
urlsToCache.push("Plutarch_Demosthenes_16.html");
urlsToCache.push("Plutarch_Demosthenes_17.html");
urlsToCache.push("Plutarch_Demosthenes_18.html");
urlsToCache.push("Plutarch_Demosthenes_19.html");
urlsToCache.push("Plutarch_Demosthenes_20.html");
urlsToCache.push("Plutarch_Demosthenes_21.html");
urlsToCache.push("Plutarch_Demosthenes_22.html");
urlsToCache.push("Plutarch_Demosthenes_23.html");
urlsToCache.push("Plutarch_Demosthenes_24.html");
urlsToCache.push("Plutarch_Demosthenes_25.html");
urlsToCache.push("Plutarch_Demosthenes_26.html");
urlsToCache.push("Plutarch_Demosthenes_27.html");
urlsToCache.push("Plutarch_Demosthenes_28.html");
urlsToCache.push("Plutarch_Demosthenes_29.html");
urlsToCache.push("Plutarch_Demosthenes_30.html");
urlsToCache.push("Plutarch_Demosthenes_31.html");
