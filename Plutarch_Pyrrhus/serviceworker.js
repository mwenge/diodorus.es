'use strict';

var CACHE_NAME = 'Plutarch_Pyrrhus';
var urlsToCache = [
  'Plutarch_Pyrrhus.html',
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
urlsToCache.push("Plutarch_Pyrrhus.html");
urlsToCache.push("Plutarch_Pyrrhus_2.html");
urlsToCache.push("Plutarch_Pyrrhus_3.html");
urlsToCache.push("Plutarch_Pyrrhus_4.html");
urlsToCache.push("Plutarch_Pyrrhus_5.html");
urlsToCache.push("Plutarch_Pyrrhus_6.html");
urlsToCache.push("Plutarch_Pyrrhus_7.html");
urlsToCache.push("Plutarch_Pyrrhus_8.html");
urlsToCache.push("Plutarch_Pyrrhus_9.html");
urlsToCache.push("Plutarch_Pyrrhus_10.html");
urlsToCache.push("Plutarch_Pyrrhus_11.html");
urlsToCache.push("Plutarch_Pyrrhus_12.html");
urlsToCache.push("Plutarch_Pyrrhus_13.html");
urlsToCache.push("Plutarch_Pyrrhus_14.html");
urlsToCache.push("Plutarch_Pyrrhus_15.html");
urlsToCache.push("Plutarch_Pyrrhus_16.html");
urlsToCache.push("Plutarch_Pyrrhus_17.html");
urlsToCache.push("Plutarch_Pyrrhus_18.html");
urlsToCache.push("Plutarch_Pyrrhus_19.html");
urlsToCache.push("Plutarch_Pyrrhus_20.html");
urlsToCache.push("Plutarch_Pyrrhus_21.html");
urlsToCache.push("Plutarch_Pyrrhus_22.html");
urlsToCache.push("Plutarch_Pyrrhus_23.html");
urlsToCache.push("Plutarch_Pyrrhus_24.html");
urlsToCache.push("Plutarch_Pyrrhus_25.html");
urlsToCache.push("Plutarch_Pyrrhus_26.html");
urlsToCache.push("Plutarch_Pyrrhus_27.html");
urlsToCache.push("Plutarch_Pyrrhus_28.html");
urlsToCache.push("Plutarch_Pyrrhus_29.html");
urlsToCache.push("Plutarch_Pyrrhus_30.html");
urlsToCache.push("Plutarch_Pyrrhus_31.html");
urlsToCache.push("Plutarch_Pyrrhus_32.html");
urlsToCache.push("Plutarch_Pyrrhus_33.html");
urlsToCache.push("Plutarch_Pyrrhus_34.html");
