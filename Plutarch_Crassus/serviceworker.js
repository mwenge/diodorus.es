'use strict';

var CACHE_NAME = 'Plutarch_Crassus';
var urlsToCache = [
  'Plutarch_Crassus.html',
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
urlsToCache.push("Plutarch_Crassus.html");
urlsToCache.push("Plutarch_Crassus_2.html");
urlsToCache.push("Plutarch_Crassus_3.html");
urlsToCache.push("Plutarch_Crassus_4.html");
urlsToCache.push("Plutarch_Crassus_5.html");
urlsToCache.push("Plutarch_Crassus_6.html");
urlsToCache.push("Plutarch_Crassus_7.html");
urlsToCache.push("Plutarch_Crassus_8.html");
urlsToCache.push("Plutarch_Crassus_9.html");
urlsToCache.push("Plutarch_Crassus_10.html");
urlsToCache.push("Plutarch_Crassus_11.html");
urlsToCache.push("Plutarch_Crassus_12.html");
urlsToCache.push("Plutarch_Crassus_13.html");
urlsToCache.push("Plutarch_Crassus_14.html");
urlsToCache.push("Plutarch_Crassus_15.html");
urlsToCache.push("Plutarch_Crassus_16.html");
urlsToCache.push("Plutarch_Crassus_17.html");
urlsToCache.push("Plutarch_Crassus_18.html");
urlsToCache.push("Plutarch_Crassus_19.html");
urlsToCache.push("Plutarch_Crassus_20.html");
urlsToCache.push("Plutarch_Crassus_21.html");
urlsToCache.push("Plutarch_Crassus_22.html");
urlsToCache.push("Plutarch_Crassus_23.html");
urlsToCache.push("Plutarch_Crassus_24.html");
urlsToCache.push("Plutarch_Crassus_25.html");
urlsToCache.push("Plutarch_Crassus_26.html");
urlsToCache.push("Plutarch_Crassus_27.html");
urlsToCache.push("Plutarch_Crassus_28.html");
urlsToCache.push("Plutarch_Crassus_29.html");
urlsToCache.push("Plutarch_Crassus_30.html");
urlsToCache.push("Plutarch_Crassus_31.html");
urlsToCache.push("Plutarch_Crassus_32.html");
urlsToCache.push("Plutarch_Crassus_33.html");
