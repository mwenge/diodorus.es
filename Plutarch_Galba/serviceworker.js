'use strict';

var CACHE_NAME = 'Plutarch_Galba';
var urlsToCache = [
  'Plutarch_Galba.html',
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
urlsToCache.push("Plutarch_Galba.html");
urlsToCache.push("Plutarch_Galba_2.html");
urlsToCache.push("Plutarch_Galba_3.html");
urlsToCache.push("Plutarch_Galba_4.html");
urlsToCache.push("Plutarch_Galba_5.html");
urlsToCache.push("Plutarch_Galba_6.html");
urlsToCache.push("Plutarch_Galba_7.html");
urlsToCache.push("Plutarch_Galba_8.html");
urlsToCache.push("Plutarch_Galba_9.html");
urlsToCache.push("Plutarch_Galba_10.html");
urlsToCache.push("Plutarch_Galba_11.html");
urlsToCache.push("Plutarch_Galba_12.html");
urlsToCache.push("Plutarch_Galba_13.html");
urlsToCache.push("Plutarch_Galba_14.html");
urlsToCache.push("Plutarch_Galba_15.html");
urlsToCache.push("Plutarch_Galba_16.html");
urlsToCache.push("Plutarch_Galba_17.html");
urlsToCache.push("Plutarch_Galba_18.html");
urlsToCache.push("Plutarch_Galba_19.html");
urlsToCache.push("Plutarch_Galba_20.html");
urlsToCache.push("Plutarch_Galba_21.html");
urlsToCache.push("Plutarch_Galba_22.html");
urlsToCache.push("Plutarch_Galba_23.html");
urlsToCache.push("Plutarch_Galba_24.html");
urlsToCache.push("Plutarch_Galba_25.html");
urlsToCache.push("Plutarch_Galba_26.html");
urlsToCache.push("Plutarch_Galba_27.html");
urlsToCache.push("Plutarch_Galba_28.html");
urlsToCache.push("Plutarch_Galba_29.html");
