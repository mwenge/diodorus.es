'use strict';

var CACHE_NAME = 'Plutarch_Caius_Marius';
var urlsToCache = [
  'Plutarch_Caius_Marius.html',
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
urlsToCache.push("Plutarch_Caius_Marius.html");
urlsToCache.push("Plutarch_Caius_Marius_2.html");
urlsToCache.push("Plutarch_Caius_Marius_3.html");
urlsToCache.push("Plutarch_Caius_Marius_4.html");
urlsToCache.push("Plutarch_Caius_Marius_5.html");
urlsToCache.push("Plutarch_Caius_Marius_6.html");
urlsToCache.push("Plutarch_Caius_Marius_7.html");
urlsToCache.push("Plutarch_Caius_Marius_8.html");
urlsToCache.push("Plutarch_Caius_Marius_9.html");
urlsToCache.push("Plutarch_Caius_Marius_10.html");
urlsToCache.push("Plutarch_Caius_Marius_11.html");
urlsToCache.push("Plutarch_Caius_Marius_12.html");
urlsToCache.push("Plutarch_Caius_Marius_13.html");
urlsToCache.push("Plutarch_Caius_Marius_14.html");
urlsToCache.push("Plutarch_Caius_Marius_15.html");
urlsToCache.push("Plutarch_Caius_Marius_16.html");
urlsToCache.push("Plutarch_Caius_Marius_17.html");
urlsToCache.push("Plutarch_Caius_Marius_18.html");
urlsToCache.push("Plutarch_Caius_Marius_19.html");
urlsToCache.push("Plutarch_Caius_Marius_20.html");
urlsToCache.push("Plutarch_Caius_Marius_21.html");
urlsToCache.push("Plutarch_Caius_Marius_22.html");
urlsToCache.push("Plutarch_Caius_Marius_23.html");
urlsToCache.push("Plutarch_Caius_Marius_24.html");
urlsToCache.push("Plutarch_Caius_Marius_25.html");
urlsToCache.push("Plutarch_Caius_Marius_26.html");
urlsToCache.push("Plutarch_Caius_Marius_27.html");
urlsToCache.push("Plutarch_Caius_Marius_28.html");
urlsToCache.push("Plutarch_Caius_Marius_29.html");
urlsToCache.push("Plutarch_Caius_Marius_30.html");
urlsToCache.push("Plutarch_Caius_Marius_31.html");
urlsToCache.push("Plutarch_Caius_Marius_32.html");
urlsToCache.push("Plutarch_Caius_Marius_33.html");
urlsToCache.push("Plutarch_Caius_Marius_34.html");
urlsToCache.push("Plutarch_Caius_Marius_35.html");
urlsToCache.push("Plutarch_Caius_Marius_36.html");
urlsToCache.push("Plutarch_Caius_Marius_37.html");
urlsToCache.push("Plutarch_Caius_Marius_38.html");
urlsToCache.push("Plutarch_Caius_Marius_39.html");
urlsToCache.push("Plutarch_Caius_Marius_40.html");
urlsToCache.push("Plutarch_Caius_Marius_41.html");
urlsToCache.push("Plutarch_Caius_Marius_42.html");
urlsToCache.push("Plutarch_Caius_Marius_43.html");
urlsToCache.push("Plutarch_Caius_Marius_44.html");
urlsToCache.push("Plutarch_Caius_Marius_45.html");
urlsToCache.push("Plutarch_Caius_Marius_46.html");
