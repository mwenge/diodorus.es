'use strict';

var CACHE_NAME = 'Plutarch_Publicola';
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
urlsToCache.push("Plutarch_Publicola.html");
urlsToCache.push("Plutarch_Publicola_2.html");
urlsToCache.push("Plutarch_Publicola_3.html");
urlsToCache.push("Plutarch_Publicola_4.html");
urlsToCache.push("Plutarch_Publicola_5.html");
urlsToCache.push("Plutarch_Publicola_6.html");
urlsToCache.push("Plutarch_Publicola_7.html");
urlsToCache.push("Plutarch_Publicola_8.html");
urlsToCache.push("Plutarch_Publicola_9.html");
urlsToCache.push("Plutarch_Publicola_10.html");
urlsToCache.push("Plutarch_Publicola_11.html");
urlsToCache.push("Plutarch_Publicola_12.html");
urlsToCache.push("Plutarch_Publicola_13.html");
urlsToCache.push("Plutarch_Publicola_14.html");
urlsToCache.push("Plutarch_Publicola_15.html");
urlsToCache.push("Plutarch_Publicola_16.html");
urlsToCache.push("Plutarch_Publicola_17.html");
urlsToCache.push("Plutarch_Publicola_18.html");
urlsToCache.push("Plutarch_Publicola_19.html");
urlsToCache.push("Plutarch_Publicola_20.html");
urlsToCache.push("Plutarch_Publicola_21.html");
urlsToCache.push("Plutarch_Publicola_22.html");
urlsToCache.push("Plutarch_Publicola_23.html");
urlsToCache.push("translation.js");
