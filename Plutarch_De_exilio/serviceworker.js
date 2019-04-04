'use strict';

var CACHE_NAME = 'Plutarch_De_exilio';
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
urlsToCache.push("Plutarch_De_exilio.html");
urlsToCache.push("Plutarch_De_exilio_2.html");
urlsToCache.push("Plutarch_De_exilio_3.html");
urlsToCache.push("Plutarch_De_exilio_4.html");
urlsToCache.push("Plutarch_De_exilio_5.html");
urlsToCache.push("Plutarch_De_exilio_6.html");
urlsToCache.push("Plutarch_De_exilio_7.html");
urlsToCache.push("Plutarch_De_exilio_8.html");
urlsToCache.push("Plutarch_De_exilio_9.html");
urlsToCache.push("Plutarch_De_exilio_10.html");
urlsToCache.push("Plutarch_De_exilio_11.html");
urlsToCache.push("Plutarch_De_exilio_12.html");
urlsToCache.push("Plutarch_De_exilio_13.html");
urlsToCache.push("Plutarch_De_exilio_14.html");
urlsToCache.push("Plutarch_De_exilio_15.html");
urlsToCache.push("Plutarch_De_exilio_16.html");
urlsToCache.push("Plutarch_De_exilio_17.html");
