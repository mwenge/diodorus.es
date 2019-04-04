'use strict';

var CACHE_NAME = 'Plutarch_Philopoemen';
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
urlsToCache.push("Plutarch_Philopoemen.html");
urlsToCache.push("Plutarch_Philopoemen_2.html");
urlsToCache.push("Plutarch_Philopoemen_3.html");
urlsToCache.push("Plutarch_Philopoemen_4.html");
urlsToCache.push("Plutarch_Philopoemen_5.html");
urlsToCache.push("Plutarch_Philopoemen_6.html");
urlsToCache.push("Plutarch_Philopoemen_7.html");
urlsToCache.push("Plutarch_Philopoemen_8.html");
urlsToCache.push("Plutarch_Philopoemen_9.html");
urlsToCache.push("Plutarch_Philopoemen_10.html");
urlsToCache.push("Plutarch_Philopoemen_11.html");
urlsToCache.push("Plutarch_Philopoemen_12.html");
urlsToCache.push("Plutarch_Philopoemen_13.html");
urlsToCache.push("Plutarch_Philopoemen_14.html");
urlsToCache.push("Plutarch_Philopoemen_15.html");
urlsToCache.push("Plutarch_Philopoemen_16.html");
urlsToCache.push("Plutarch_Philopoemen_17.html");
urlsToCache.push("Plutarch_Philopoemen_18.html");
urlsToCache.push("Plutarch_Philopoemen_19.html");
urlsToCache.push("Plutarch_Philopoemen_20.html");
urlsToCache.push("Plutarch_Philopoemen_21.html");
urlsToCache.push("translation.js");
