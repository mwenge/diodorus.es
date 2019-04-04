'use strict';

var CACHE_NAME = 'Plutarch_Marcus_Cato';
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
urlsToCache.push("Plutarch_Marcus_Cato.html");
urlsToCache.push("Plutarch_Marcus_Cato_2.html");
urlsToCache.push("Plutarch_Marcus_Cato_3.html");
urlsToCache.push("Plutarch_Marcus_Cato_4.html");
urlsToCache.push("Plutarch_Marcus_Cato_5.html");
urlsToCache.push("Plutarch_Marcus_Cato_6.html");
urlsToCache.push("Plutarch_Marcus_Cato_7.html");
urlsToCache.push("Plutarch_Marcus_Cato_8.html");
urlsToCache.push("Plutarch_Marcus_Cato_9.html");
urlsToCache.push("Plutarch_Marcus_Cato_10.html");
urlsToCache.push("Plutarch_Marcus_Cato_11.html");
urlsToCache.push("Plutarch_Marcus_Cato_12.html");
urlsToCache.push("Plutarch_Marcus_Cato_13.html");
urlsToCache.push("Plutarch_Marcus_Cato_14.html");
urlsToCache.push("Plutarch_Marcus_Cato_15.html");
urlsToCache.push("Plutarch_Marcus_Cato_16.html");
urlsToCache.push("Plutarch_Marcus_Cato_17.html");
urlsToCache.push("Plutarch_Marcus_Cato_18.html");
urlsToCache.push("Plutarch_Marcus_Cato_19.html");
urlsToCache.push("Plutarch_Marcus_Cato_20.html");
urlsToCache.push("Plutarch_Marcus_Cato_21.html");
urlsToCache.push("Plutarch_Marcus_Cato_22.html");
urlsToCache.push("Plutarch_Marcus_Cato_23.html");
urlsToCache.push("Plutarch_Marcus_Cato_24.html");
urlsToCache.push("Plutarch_Marcus_Cato_25.html");
urlsToCache.push("Plutarch_Marcus_Cato_26.html");
urlsToCache.push("Plutarch_Marcus_Cato_27.html");
urlsToCache.push("translation.js");
