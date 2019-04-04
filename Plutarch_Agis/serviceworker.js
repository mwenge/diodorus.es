'use strict';

var CACHE_NAME = 'Plutarch_Agis';
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
urlsToCache.push("Plutarch_Agis.html");
urlsToCache.push("Plutarch_Agis_2.html");
urlsToCache.push("Plutarch_Agis_3.html");
urlsToCache.push("Plutarch_Agis_4.html");
urlsToCache.push("Plutarch_Agis_5.html");
urlsToCache.push("Plutarch_Agis_6.html");
urlsToCache.push("Plutarch_Agis_7.html");
urlsToCache.push("Plutarch_Agis_8.html");
urlsToCache.push("Plutarch_Agis_9.html");
urlsToCache.push("Plutarch_Agis_10.html");
urlsToCache.push("Plutarch_Agis_11.html");
urlsToCache.push("Plutarch_Agis_12.html");
urlsToCache.push("Plutarch_Agis_13.html");
urlsToCache.push("Plutarch_Agis_14.html");
urlsToCache.push("Plutarch_Agis_15.html");
urlsToCache.push("Plutarch_Agis_16.html");
urlsToCache.push("Plutarch_Agis_17.html");
urlsToCache.push("Plutarch_Agis_18.html");
urlsToCache.push("Plutarch_Agis_19.html");
urlsToCache.push("Plutarch_Agis_20.html");
urlsToCache.push("Plutarch_Agis_21.html");
urlsToCache.push("translation.js");
