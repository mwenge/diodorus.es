'use strict';

var CACHE_NAME = 'Plutarch_Timoleon';
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
urlsToCache.push("Plutarch_Timoleon_0.html");
urlsToCache.push("Plutarch_Timoleon.html");
urlsToCache.push("Plutarch_Timoleon_2.html");
urlsToCache.push("Plutarch_Timoleon_3.html");
urlsToCache.push("Plutarch_Timoleon_4.html");
urlsToCache.push("Plutarch_Timoleon_5.html");
urlsToCache.push("Plutarch_Timoleon_6.html");
urlsToCache.push("Plutarch_Timoleon_7.html");
urlsToCache.push("Plutarch_Timoleon_8.html");
urlsToCache.push("Plutarch_Timoleon_9.html");
urlsToCache.push("Plutarch_Timoleon_10.html");
urlsToCache.push("Plutarch_Timoleon_11.html");
urlsToCache.push("Plutarch_Timoleon_12.html");
urlsToCache.push("Plutarch_Timoleon_13.html");
urlsToCache.push("Plutarch_Timoleon_14.html");
urlsToCache.push("Plutarch_Timoleon_15.html");
urlsToCache.push("Plutarch_Timoleon_16.html");
urlsToCache.push("Plutarch_Timoleon_17.html");
urlsToCache.push("Plutarch_Timoleon_18.html");
urlsToCache.push("Plutarch_Timoleon_19.html");
urlsToCache.push("Plutarch_Timoleon_20.html");
urlsToCache.push("Plutarch_Timoleon_21.html");
urlsToCache.push("Plutarch_Timoleon_22.html");
urlsToCache.push("Plutarch_Timoleon_23.html");
urlsToCache.push("Plutarch_Timoleon_24.html");
urlsToCache.push("Plutarch_Timoleon_25.html");
urlsToCache.push("Plutarch_Timoleon_26.html");
urlsToCache.push("Plutarch_Timoleon_27.html");
urlsToCache.push("Plutarch_Timoleon_28.html");
urlsToCache.push("Plutarch_Timoleon_29.html");
urlsToCache.push("Plutarch_Timoleon_30.html");
urlsToCache.push("Plutarch_Timoleon_31.html");
urlsToCache.push("Plutarch_Timoleon_32.html");
urlsToCache.push("Plutarch_Timoleon_33.html");
urlsToCache.push("Plutarch_Timoleon_34.html");
urlsToCache.push("Plutarch_Timoleon_35.html");
urlsToCache.push("Plutarch_Timoleon_36.html");
urlsToCache.push("Plutarch_Timoleon_37.html");
urlsToCache.push("Plutarch_Timoleon_38.html");
urlsToCache.push("Plutarch_Timoleon_39.html");
urlsToCache.push("translation.js");
