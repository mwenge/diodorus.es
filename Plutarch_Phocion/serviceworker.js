'use strict';

var CACHE_NAME = 'Plutarch_Phocion';
var urlsToCache = [
  'Plutarch_Phocion.html',
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
urlsToCache.push("Plutarch_Phocion.html");
urlsToCache.push("Plutarch_Phocion_2.html");
urlsToCache.push("Plutarch_Phocion_3.html");
urlsToCache.push("Plutarch_Phocion_4.html");
urlsToCache.push("Plutarch_Phocion_5.html");
urlsToCache.push("Plutarch_Phocion_6.html");
urlsToCache.push("Plutarch_Phocion_7.html");
urlsToCache.push("Plutarch_Phocion_8.html");
urlsToCache.push("Plutarch_Phocion_9.html");
urlsToCache.push("Plutarch_Phocion_10.html");
urlsToCache.push("Plutarch_Phocion_11.html");
urlsToCache.push("Plutarch_Phocion_12.html");
urlsToCache.push("Plutarch_Phocion_13.html");
urlsToCache.push("Plutarch_Phocion_14.html");
urlsToCache.push("Plutarch_Phocion_15.html");
urlsToCache.push("Plutarch_Phocion_16.html");
urlsToCache.push("Plutarch_Phocion_17.html");
urlsToCache.push("Plutarch_Phocion_18.html");
urlsToCache.push("Plutarch_Phocion_19.html");
urlsToCache.push("Plutarch_Phocion_20.html");
urlsToCache.push("Plutarch_Phocion_21.html");
urlsToCache.push("Plutarch_Phocion_22.html");
urlsToCache.push("Plutarch_Phocion_23.html");
urlsToCache.push("Plutarch_Phocion_24.html");
urlsToCache.push("Plutarch_Phocion_25.html");
urlsToCache.push("Plutarch_Phocion_26.html");
urlsToCache.push("Plutarch_Phocion_27.html");
urlsToCache.push("Plutarch_Phocion_28.html");
urlsToCache.push("Plutarch_Phocion_29.html");
urlsToCache.push("Plutarch_Phocion_30.html");
urlsToCache.push("Plutarch_Phocion_31.html");
urlsToCache.push("Plutarch_Phocion_32.html");
urlsToCache.push("Plutarch_Phocion_33.html");
urlsToCache.push("Plutarch_Phocion_34.html");
urlsToCache.push("Plutarch_Phocion_35.html");
urlsToCache.push("Plutarch_Phocion_36.html");
urlsToCache.push("Plutarch_Phocion_37.html");
urlsToCache.push("Plutarch_Phocion_38.html");
