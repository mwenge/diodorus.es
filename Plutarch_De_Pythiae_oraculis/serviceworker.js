'use strict';

var CACHE_NAME = 'Plutarch_De_Pythiae_oraculis';
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
urlsToCache.push("Plutarch_De_Pythiae_oraculis.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_2.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_3.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_4.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_5.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_6.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_7.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_8.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_9.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_10.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_11.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_12.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_13.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_14.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_15.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_16.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_17.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_18.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_19.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_20.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_21.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_22.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_23.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_24.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_25.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_26.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_27.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_28.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_29.html");
urlsToCache.push("Plutarch_De_Pythiae_oraculis_30.html");
