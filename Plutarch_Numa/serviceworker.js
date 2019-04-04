'use strict';

var CACHE_NAME = 'Plutarch_Numa';
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
urlsToCache.push("Plutarch_Numa.html");
urlsToCache.push("Plutarch_Numa_2.html");
urlsToCache.push("Plutarch_Numa_3.html");
urlsToCache.push("Plutarch_Numa_4.html");
urlsToCache.push("Plutarch_Numa_5.html");
urlsToCache.push("Plutarch_Numa_6.html");
urlsToCache.push("Plutarch_Numa_7.html");
urlsToCache.push("Plutarch_Numa_8.html");
urlsToCache.push("Plutarch_Numa_9.html");
urlsToCache.push("Plutarch_Numa_10.html");
urlsToCache.push("Plutarch_Numa_11.html");
urlsToCache.push("Plutarch_Numa_12.html");
urlsToCache.push("Plutarch_Numa_13.html");
urlsToCache.push("Plutarch_Numa_14.html");
urlsToCache.push("Plutarch_Numa_15.html");
urlsToCache.push("Plutarch_Numa_16.html");
urlsToCache.push("Plutarch_Numa_17.html");
urlsToCache.push("Plutarch_Numa_18.html");
urlsToCache.push("Plutarch_Numa_19.html");
urlsToCache.push("Plutarch_Numa_20.html");
urlsToCache.push("Plutarch_Numa_21.html");
urlsToCache.push("Plutarch_Numa_22.html");
urlsToCache.push("translation.js");
