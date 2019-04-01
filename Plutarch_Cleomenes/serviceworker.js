'use strict';

var CACHE_NAME = 'Plutarch_Cleomenes';
var urlsToCache = [
  'Plutarch_Cleomenes.html',
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
urlsToCache.push("Plutarch_Cleomenes.html");
urlsToCache.push("Plutarch_Cleomenes_2.html");
urlsToCache.push("Plutarch_Cleomenes_3.html");
urlsToCache.push("Plutarch_Cleomenes_4.html");
urlsToCache.push("Plutarch_Cleomenes_5.html");
urlsToCache.push("Plutarch_Cleomenes_6.html");
urlsToCache.push("Plutarch_Cleomenes_7.html");
urlsToCache.push("Plutarch_Cleomenes_8.html");
urlsToCache.push("Plutarch_Cleomenes_9.html");
urlsToCache.push("Plutarch_Cleomenes_10.html");
urlsToCache.push("Plutarch_Cleomenes_11.html");
urlsToCache.push("Plutarch_Cleomenes_12.html");
urlsToCache.push("Plutarch_Cleomenes_13.html");
urlsToCache.push("Plutarch_Cleomenes_14.html");
urlsToCache.push("Plutarch_Cleomenes_15.html");
urlsToCache.push("Plutarch_Cleomenes_16.html");
urlsToCache.push("Plutarch_Cleomenes_17.html");
urlsToCache.push("Plutarch_Cleomenes_18.html");
urlsToCache.push("Plutarch_Cleomenes_19.html");
urlsToCache.push("Plutarch_Cleomenes_20.html");
urlsToCache.push("Plutarch_Cleomenes_21.html");
urlsToCache.push("Plutarch_Cleomenes_22.html");
urlsToCache.push("Plutarch_Cleomenes_23.html");
urlsToCache.push("Plutarch_Cleomenes_24.html");
urlsToCache.push("Plutarch_Cleomenes_25.html");
urlsToCache.push("Plutarch_Cleomenes_26.html");
urlsToCache.push("Plutarch_Cleomenes_27.html");
urlsToCache.push("Plutarch_Cleomenes_28.html");
urlsToCache.push("Plutarch_Cleomenes_29.html");
urlsToCache.push("Plutarch_Cleomenes_30.html");
urlsToCache.push("Plutarch_Cleomenes_31.html");
urlsToCache.push("Plutarch_Cleomenes_32.html");
urlsToCache.push("Plutarch_Cleomenes_33.html");
urlsToCache.push("Plutarch_Cleomenes_34.html");
urlsToCache.push("Plutarch_Cleomenes_35.html");
urlsToCache.push("Plutarch_Cleomenes_36.html");
urlsToCache.push("Plutarch_Cleomenes_37.html");
urlsToCache.push("Plutarch_Cleomenes_38.html");
urlsToCache.push("Plutarch_Cleomenes_39.html");
