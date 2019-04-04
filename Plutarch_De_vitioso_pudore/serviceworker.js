'use strict';

var CACHE_NAME = 'Plutarch_De_vitioso_pudore';
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
urlsToCache.push("Plutarch_De_vitioso_pudore.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_2.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_3.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_4.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_5.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_6.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_7.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_8.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_9.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_10.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_11.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_12.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_13.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_14.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_15.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_16.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_17.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_18.html");
urlsToCache.push("Plutarch_De_vitioso_pudore_19.html");
