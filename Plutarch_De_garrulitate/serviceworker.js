'use strict';

var CACHE_NAME = 'Plutarch_De_garrulitate';
var urlsToCache = [
  'Plutarch_De_garrulitate.html',
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
urlsToCache.push("Plutarch_De_garrulitate.html");
urlsToCache.push("Plutarch_De_garrulitate_2.html");
urlsToCache.push("Plutarch_De_garrulitate_3.html");
urlsToCache.push("Plutarch_De_garrulitate_4.html");
urlsToCache.push("Plutarch_De_garrulitate_5.html");
urlsToCache.push("Plutarch_De_garrulitate_6.html");
urlsToCache.push("Plutarch_De_garrulitate_7.html");
urlsToCache.push("Plutarch_De_garrulitate_8.html");
urlsToCache.push("Plutarch_De_garrulitate_9.html");
urlsToCache.push("Plutarch_De_garrulitate_10.html");
urlsToCache.push("Plutarch_De_garrulitate_11.html");
urlsToCache.push("Plutarch_De_garrulitate_12.html");
urlsToCache.push("Plutarch_De_garrulitate_13.html");
urlsToCache.push("Plutarch_De_garrulitate_14.html");
urlsToCache.push("Plutarch_De_garrulitate_15.html");
urlsToCache.push("Plutarch_De_garrulitate_16.html");
urlsToCache.push("Plutarch_De_garrulitate_17.html");
urlsToCache.push("Plutarch_De_garrulitate_18.html");
urlsToCache.push("Plutarch_De_garrulitate_19.html");
urlsToCache.push("Plutarch_De_garrulitate_20.html");
urlsToCache.push("Plutarch_De_garrulitate_21.html");
urlsToCache.push("Plutarch_De_garrulitate_22.html");
urlsToCache.push("Plutarch_De_garrulitate_23.html");
