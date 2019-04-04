'use strict';

var CACHE_NAME = 'Plutarch_De_genio_Socratis';
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
urlsToCache.push("Plutarch_De_genio_Socratis.html");
urlsToCache.push("Plutarch_De_genio_Socratis_2.html");
urlsToCache.push("Plutarch_De_genio_Socratis_3.html");
urlsToCache.push("Plutarch_De_genio_Socratis_4.html");
urlsToCache.push("Plutarch_De_genio_Socratis_5.html");
urlsToCache.push("Plutarch_De_genio_Socratis_6.html");
urlsToCache.push("Plutarch_De_genio_Socratis_7.html");
urlsToCache.push("Plutarch_De_genio_Socratis_8.html");
urlsToCache.push("Plutarch_De_genio_Socratis_9.html");
urlsToCache.push("Plutarch_De_genio_Socratis_10.html");
urlsToCache.push("Plutarch_De_genio_Socratis_11.html");
urlsToCache.push("Plutarch_De_genio_Socratis_12.html");
urlsToCache.push("Plutarch_De_genio_Socratis_13.html");
urlsToCache.push("Plutarch_De_genio_Socratis_14.html");
urlsToCache.push("Plutarch_De_genio_Socratis_15.html");
urlsToCache.push("Plutarch_De_genio_Socratis_16.html");
urlsToCache.push("Plutarch_De_genio_Socratis_17.html");
urlsToCache.push("Plutarch_De_genio_Socratis_18.html");
urlsToCache.push("Plutarch_De_genio_Socratis_19.html");
urlsToCache.push("Plutarch_De_genio_Socratis_20.html");
urlsToCache.push("Plutarch_De_genio_Socratis_21.html");
urlsToCache.push("Plutarch_De_genio_Socratis_22.html");
urlsToCache.push("Plutarch_De_genio_Socratis_23.html");
urlsToCache.push("Plutarch_De_genio_Socratis_24.html");
urlsToCache.push("Plutarch_De_genio_Socratis_25.html");
urlsToCache.push("Plutarch_De_genio_Socratis_26.html");
urlsToCache.push("Plutarch_De_genio_Socratis_27.html");
urlsToCache.push("Plutarch_De_genio_Socratis_28.html");
urlsToCache.push("Plutarch_De_genio_Socratis_29.html");
urlsToCache.push("Plutarch_De_genio_Socratis_30.html");
urlsToCache.push("Plutarch_De_genio_Socratis_31.html");
urlsToCache.push("Plutarch_De_genio_Socratis_32.html");
urlsToCache.push("Plutarch_De_genio_Socratis_33.html");
urlsToCache.push("Plutarch_De_genio_Socratis_34.html");
