'use strict';

var CACHE_NAME = 'Plutarch_Fabius_Maximus';
var urlsToCache = [
  'Plutarch_Fabius_Maximus.html',
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
urlsToCache.push("Plutarch_Fabius_Maximus.html");
urlsToCache.push("Plutarch_Fabius_Maximus_2.html");
urlsToCache.push("Plutarch_Fabius_Maximus_3.html");
urlsToCache.push("Plutarch_Fabius_Maximus_4.html");
urlsToCache.push("Plutarch_Fabius_Maximus_5.html");
urlsToCache.push("Plutarch_Fabius_Maximus_6.html");
urlsToCache.push("Plutarch_Fabius_Maximus_7.html");
urlsToCache.push("Plutarch_Fabius_Maximus_8.html");
urlsToCache.push("Plutarch_Fabius_Maximus_9.html");
urlsToCache.push("Plutarch_Fabius_Maximus_10.html");
urlsToCache.push("Plutarch_Fabius_Maximus_11.html");
urlsToCache.push("Plutarch_Fabius_Maximus_12.html");
urlsToCache.push("Plutarch_Fabius_Maximus_13.html");
urlsToCache.push("Plutarch_Fabius_Maximus_14.html");
urlsToCache.push("Plutarch_Fabius_Maximus_15.html");
urlsToCache.push("Plutarch_Fabius_Maximus_16.html");
urlsToCache.push("Plutarch_Fabius_Maximus_17.html");
urlsToCache.push("Plutarch_Fabius_Maximus_18.html");
urlsToCache.push("Plutarch_Fabius_Maximus_19.html");
urlsToCache.push("Plutarch_Fabius_Maximus_20.html");
urlsToCache.push("Plutarch_Fabius_Maximus_21.html");
urlsToCache.push("Plutarch_Fabius_Maximus_22.html");
urlsToCache.push("Plutarch_Fabius_Maximus_23.html");
urlsToCache.push("Plutarch_Fabius_Maximus_24.html");
urlsToCache.push("Plutarch_Fabius_Maximus_25.html");
urlsToCache.push("Plutarch_Fabius_Maximus_26.html");
urlsToCache.push("Plutarch_Fabius_Maximus_27.html");
