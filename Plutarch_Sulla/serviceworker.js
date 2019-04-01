'use strict';

var CACHE_NAME = 'Plutarch_Sulla';
var urlsToCache = [
  'Plutarch_Sulla.html',
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
urlsToCache.push("Plutarch_Sulla.html");
urlsToCache.push("Plutarch_Sulla_2.html");
urlsToCache.push("Plutarch_Sulla_3.html");
urlsToCache.push("Plutarch_Sulla_4.html");
urlsToCache.push("Plutarch_Sulla_5.html");
urlsToCache.push("Plutarch_Sulla_6.html");
urlsToCache.push("Plutarch_Sulla_7.html");
urlsToCache.push("Plutarch_Sulla_8.html");
urlsToCache.push("Plutarch_Sulla_9.html");
urlsToCache.push("Plutarch_Sulla_10.html");
urlsToCache.push("Plutarch_Sulla_11.html");
urlsToCache.push("Plutarch_Sulla_12.html");
urlsToCache.push("Plutarch_Sulla_13.html");
urlsToCache.push("Plutarch_Sulla_14.html");
urlsToCache.push("Plutarch_Sulla_15.html");
urlsToCache.push("Plutarch_Sulla_16.html");
urlsToCache.push("Plutarch_Sulla_17.html");
urlsToCache.push("Plutarch_Sulla_18.html");
urlsToCache.push("Plutarch_Sulla_19.html");
urlsToCache.push("Plutarch_Sulla_20.html");
urlsToCache.push("Plutarch_Sulla_21.html");
urlsToCache.push("Plutarch_Sulla_22.html");
urlsToCache.push("Plutarch_Sulla_23.html");
urlsToCache.push("Plutarch_Sulla_24.html");
urlsToCache.push("Plutarch_Sulla_25.html");
urlsToCache.push("Plutarch_Sulla_26.html");
urlsToCache.push("Plutarch_Sulla_27.html");
urlsToCache.push("Plutarch_Sulla_28.html");
urlsToCache.push("Plutarch_Sulla_29.html");
urlsToCache.push("Plutarch_Sulla_30.html");
urlsToCache.push("Plutarch_Sulla_31.html");
urlsToCache.push("Plutarch_Sulla_32.html");
urlsToCache.push("Plutarch_Sulla_33.html");
urlsToCache.push("Plutarch_Sulla_34.html");
urlsToCache.push("Plutarch_Sulla_35.html");
urlsToCache.push("Plutarch_Sulla_36.html");
urlsToCache.push("Plutarch_Sulla_37.html");
urlsToCache.push("Plutarch_Sulla_38.html");
