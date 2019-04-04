'use strict';

var CACHE_NAME = 'Plutarch_De_fraterno_amore';
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
urlsToCache.push("Plutarch_De_fraterno_amore.html");
urlsToCache.push("Plutarch_De_fraterno_amore_2.html");
urlsToCache.push("Plutarch_De_fraterno_amore_3.html");
urlsToCache.push("Plutarch_De_fraterno_amore_4.html");
urlsToCache.push("Plutarch_De_fraterno_amore_5.html");
urlsToCache.push("Plutarch_De_fraterno_amore_6.html");
urlsToCache.push("Plutarch_De_fraterno_amore_7.html");
urlsToCache.push("Plutarch_De_fraterno_amore_8.html");
urlsToCache.push("Plutarch_De_fraterno_amore_9.html");
urlsToCache.push("Plutarch_De_fraterno_amore_10.html");
urlsToCache.push("Plutarch_De_fraterno_amore_11.html");
urlsToCache.push("Plutarch_De_fraterno_amore_12.html");
urlsToCache.push("Plutarch_De_fraterno_amore_13.html");
urlsToCache.push("Plutarch_De_fraterno_amore_14.html");
urlsToCache.push("Plutarch_De_fraterno_amore_15.html");
urlsToCache.push("Plutarch_De_fraterno_amore_16.html");
urlsToCache.push("Plutarch_De_fraterno_amore_17.html");
urlsToCache.push("Plutarch_De_fraterno_amore_18.html");
urlsToCache.push("Plutarch_De_fraterno_amore_19.html");
urlsToCache.push("Plutarch_De_fraterno_amore_20.html");
urlsToCache.push("Plutarch_De_fraterno_amore_21.html");
