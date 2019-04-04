'use strict';

var CACHE_NAME = 'Plutarch_Titus_Flamininus';
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
urlsToCache.push("Plutarch_Titus_Flamininus.html");
urlsToCache.push("Plutarch_Titus_Flamininus_2.html");
urlsToCache.push("Plutarch_Titus_Flamininus_3.html");
urlsToCache.push("Plutarch_Titus_Flamininus_4.html");
urlsToCache.push("Plutarch_Titus_Flamininus_5.html");
urlsToCache.push("Plutarch_Titus_Flamininus_6.html");
urlsToCache.push("Plutarch_Titus_Flamininus_7.html");
urlsToCache.push("Plutarch_Titus_Flamininus_8.html");
urlsToCache.push("Plutarch_Titus_Flamininus_9.html");
urlsToCache.push("Plutarch_Titus_Flamininus_10.html");
urlsToCache.push("Plutarch_Titus_Flamininus_11.html");
urlsToCache.push("Plutarch_Titus_Flamininus_12.html");
urlsToCache.push("Plutarch_Titus_Flamininus_13.html");
urlsToCache.push("Plutarch_Titus_Flamininus_14.html");
urlsToCache.push("Plutarch_Titus_Flamininus_15.html");
urlsToCache.push("Plutarch_Titus_Flamininus_16.html");
urlsToCache.push("Plutarch_Titus_Flamininus_17.html");
urlsToCache.push("Plutarch_Titus_Flamininus_18.html");
urlsToCache.push("Plutarch_Titus_Flamininus_19.html");
urlsToCache.push("Plutarch_Titus_Flamininus_20.html");
urlsToCache.push("Plutarch_Titus_Flamininus_21.html");
urlsToCache.push("translation.js");
