'use strict';

var CACHE_NAME = 'Plutarch_Otho';
var urlsToCache = [
  'Plutarch_Otho.html',
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
urlsToCache.push("Plutarch_Otho.html");
urlsToCache.push("Plutarch_Otho_2.html");
urlsToCache.push("Plutarch_Otho_3.html");
urlsToCache.push("Plutarch_Otho_4.html");
urlsToCache.push("Plutarch_Otho_5.html");
urlsToCache.push("Plutarch_Otho_6.html");
urlsToCache.push("Plutarch_Otho_7.html");
urlsToCache.push("Plutarch_Otho_8.html");
urlsToCache.push("Plutarch_Otho_9.html");
urlsToCache.push("Plutarch_Otho_10.html");
urlsToCache.push("Plutarch_Otho_11.html");
urlsToCache.push("Plutarch_Otho_12.html");
urlsToCache.push("Plutarch_Otho_13.html");
urlsToCache.push("Plutarch_Otho_14.html");
urlsToCache.push("Plutarch_Otho_15.html");
urlsToCache.push("Plutarch_Otho_16.html");
urlsToCache.push("Plutarch_Otho_17.html");
urlsToCache.push("Plutarch_Otho_18.html");
