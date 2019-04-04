'use strict';

var CACHE_NAME = 'Plutarch_Instituta_Laconica';
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
urlsToCache.push("Plutarch_Instituta_Laconica.html");
urlsToCache.push("Plutarch_Instituta_Laconica_2.html");
urlsToCache.push("Plutarch_Instituta_Laconica_3.html");
urlsToCache.push("Plutarch_Instituta_Laconica_4.html");
urlsToCache.push("Plutarch_Instituta_Laconica_5.html");
urlsToCache.push("Plutarch_Instituta_Laconica_6.html");
urlsToCache.push("Plutarch_Instituta_Laconica_7.html");
urlsToCache.push("Plutarch_Instituta_Laconica_8.html");
urlsToCache.push("Plutarch_Instituta_Laconica_9.html");
urlsToCache.push("Plutarch_Instituta_Laconica_10.html");
urlsToCache.push("Plutarch_Instituta_Laconica_11.html");
urlsToCache.push("Plutarch_Instituta_Laconica_12.html");
urlsToCache.push("Plutarch_Instituta_Laconica_13.html");
urlsToCache.push("Plutarch_Instituta_Laconica_14.html");
urlsToCache.push("Plutarch_Instituta_Laconica_15.html");
urlsToCache.push("Plutarch_Instituta_Laconica_16.html");
urlsToCache.push("Plutarch_Instituta_Laconica_17.html");
urlsToCache.push("Plutarch_Instituta_Laconica_18.html");
urlsToCache.push("Plutarch_Instituta_Laconica_19.html");
urlsToCache.push("Plutarch_Instituta_Laconica_20.html");
urlsToCache.push("Plutarch_Instituta_Laconica_21.html");
urlsToCache.push("Plutarch_Instituta_Laconica_22.html");
urlsToCache.push("Plutarch_Instituta_Laconica_23.html");
urlsToCache.push("Plutarch_Instituta_Laconica_24.html");
urlsToCache.push("Plutarch_Instituta_Laconica_25.html");
urlsToCache.push("Plutarch_Instituta_Laconica_26.html");
urlsToCache.push("Plutarch_Instituta_Laconica_27.html");
urlsToCache.push("Plutarch_Instituta_Laconica_28.html");
urlsToCache.push("Plutarch_Instituta_Laconica_29.html");
urlsToCache.push("Plutarch_Instituta_Laconica_30.html");
urlsToCache.push("Plutarch_Instituta_Laconica_31.html");
urlsToCache.push("Plutarch_Instituta_Laconica_32.html");
urlsToCache.push("Plutarch_Instituta_Laconica_33.html");
urlsToCache.push("Plutarch_Instituta_Laconica_34.html");
urlsToCache.push("Plutarch_Instituta_Laconica_35.html");
urlsToCache.push("Plutarch_Instituta_Laconica_36.html");
urlsToCache.push("Plutarch_Instituta_Laconica_37.html");
urlsToCache.push("Plutarch_Instituta_Laconica_38.html");
urlsToCache.push("Plutarch_Instituta_Laconica_39.html");
urlsToCache.push("Plutarch_Instituta_Laconica_40.html");
urlsToCache.push("Plutarch_Instituta_Laconica_41.html");
urlsToCache.push("Plutarch_Instituta_Laconica_42.html");
