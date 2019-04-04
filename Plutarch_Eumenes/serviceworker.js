'use strict';

var CACHE_NAME = 'Plutarch_Eumenes';
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
urlsToCache.push("Plutarch_Eumenes.html");
urlsToCache.push("Plutarch_Eumenes_2.html");
urlsToCache.push("Plutarch_Eumenes_3.html");
urlsToCache.push("Plutarch_Eumenes_4.html");
urlsToCache.push("Plutarch_Eumenes_5.html");
urlsToCache.push("Plutarch_Eumenes_6.html");
urlsToCache.push("Plutarch_Eumenes_7.html");
urlsToCache.push("Plutarch_Eumenes_8.html");
urlsToCache.push("Plutarch_Eumenes_9.html");
urlsToCache.push("Plutarch_Eumenes_10.html");
urlsToCache.push("Plutarch_Eumenes_11.html");
urlsToCache.push("Plutarch_Eumenes_12.html");
urlsToCache.push("Plutarch_Eumenes_13.html");
urlsToCache.push("Plutarch_Eumenes_14.html");
urlsToCache.push("Plutarch_Eumenes_15.html");
urlsToCache.push("Plutarch_Eumenes_16.html");
urlsToCache.push("Plutarch_Eumenes_17.html");
urlsToCache.push("Plutarch_Eumenes_18.html");
urlsToCache.push("Plutarch_Eumenes_19.html");
urlsToCache.push("translation.js");
