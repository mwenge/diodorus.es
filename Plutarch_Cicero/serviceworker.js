'use strict';

var CACHE_NAME = 'Plutarch_Cicero';
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
urlsToCache.push("Plutarch_Cicero.html");
urlsToCache.push("Plutarch_Cicero_2.html");
urlsToCache.push("Plutarch_Cicero_3.html");
urlsToCache.push("Plutarch_Cicero_4.html");
urlsToCache.push("Plutarch_Cicero_5.html");
urlsToCache.push("Plutarch_Cicero_6.html");
urlsToCache.push("Plutarch_Cicero_7.html");
urlsToCache.push("Plutarch_Cicero_8.html");
urlsToCache.push("Plutarch_Cicero_9.html");
urlsToCache.push("Plutarch_Cicero_10.html");
urlsToCache.push("Plutarch_Cicero_11.html");
urlsToCache.push("Plutarch_Cicero_12.html");
urlsToCache.push("Plutarch_Cicero_13.html");
urlsToCache.push("Plutarch_Cicero_14.html");
urlsToCache.push("Plutarch_Cicero_15.html");
urlsToCache.push("Plutarch_Cicero_16.html");
urlsToCache.push("Plutarch_Cicero_17.html");
urlsToCache.push("Plutarch_Cicero_18.html");
urlsToCache.push("Plutarch_Cicero_19.html");
urlsToCache.push("Plutarch_Cicero_20.html");
urlsToCache.push("Plutarch_Cicero_21.html");
urlsToCache.push("Plutarch_Cicero_22.html");
urlsToCache.push("Plutarch_Cicero_23.html");
urlsToCache.push("Plutarch_Cicero_24.html");
urlsToCache.push("Plutarch_Cicero_25.html");
urlsToCache.push("Plutarch_Cicero_26.html");
urlsToCache.push("Plutarch_Cicero_27.html");
urlsToCache.push("Plutarch_Cicero_28.html");
urlsToCache.push("Plutarch_Cicero_29.html");
urlsToCache.push("Plutarch_Cicero_30.html");
urlsToCache.push("Plutarch_Cicero_31.html");
urlsToCache.push("Plutarch_Cicero_32.html");
urlsToCache.push("Plutarch_Cicero_33.html");
urlsToCache.push("Plutarch_Cicero_34.html");
urlsToCache.push("Plutarch_Cicero_35.html");
urlsToCache.push("Plutarch_Cicero_36.html");
urlsToCache.push("Plutarch_Cicero_37.html");
urlsToCache.push("Plutarch_Cicero_38.html");
urlsToCache.push("Plutarch_Cicero_39.html");
urlsToCache.push("Plutarch_Cicero_40.html");
urlsToCache.push("Plutarch_Cicero_41.html");
urlsToCache.push("Plutarch_Cicero_42.html");
urlsToCache.push("Plutarch_Cicero_43.html");
urlsToCache.push("Plutarch_Cicero_44.html");
urlsToCache.push("Plutarch_Cicero_45.html");
urlsToCache.push("Plutarch_Cicero_46.html");
urlsToCache.push("Plutarch_Cicero_47.html");
urlsToCache.push("Plutarch_Cicero_48.html");
urlsToCache.push("Plutarch_Cicero_49.html");
urlsToCache.push("translation.js");
