'use strict';

var CACHE_NAME = 'Plutarch_Camillus';
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
urlsToCache.push("Plutarch_Camillus.html");
urlsToCache.push("Plutarch_Camillus_2.html");
urlsToCache.push("Plutarch_Camillus_3.html");
urlsToCache.push("Plutarch_Camillus_4.html");
urlsToCache.push("Plutarch_Camillus_5.html");
urlsToCache.push("Plutarch_Camillus_6.html");
urlsToCache.push("Plutarch_Camillus_7.html");
urlsToCache.push("Plutarch_Camillus_8.html");
urlsToCache.push("Plutarch_Camillus_9.html");
urlsToCache.push("Plutarch_Camillus_10.html");
urlsToCache.push("Plutarch_Camillus_11.html");
urlsToCache.push("Plutarch_Camillus_12.html");
urlsToCache.push("Plutarch_Camillus_13.html");
urlsToCache.push("Plutarch_Camillus_14.html");
urlsToCache.push("Plutarch_Camillus_15.html");
urlsToCache.push("Plutarch_Camillus_16.html");
urlsToCache.push("Plutarch_Camillus_17.html");
urlsToCache.push("Plutarch_Camillus_18.html");
urlsToCache.push("Plutarch_Camillus_19.html");
urlsToCache.push("Plutarch_Camillus_20.html");
urlsToCache.push("Plutarch_Camillus_21.html");
urlsToCache.push("Plutarch_Camillus_22.html");
urlsToCache.push("Plutarch_Camillus_23.html");
urlsToCache.push("Plutarch_Camillus_24.html");
urlsToCache.push("Plutarch_Camillus_25.html");
urlsToCache.push("Plutarch_Camillus_26.html");
urlsToCache.push("Plutarch_Camillus_27.html");
urlsToCache.push("Plutarch_Camillus_28.html");
urlsToCache.push("Plutarch_Camillus_29.html");
urlsToCache.push("Plutarch_Camillus_30.html");
urlsToCache.push("Plutarch_Camillus_31.html");
urlsToCache.push("Plutarch_Camillus_32.html");
urlsToCache.push("Plutarch_Camillus_33.html");
urlsToCache.push("Plutarch_Camillus_34.html");
urlsToCache.push("Plutarch_Camillus_35.html");
urlsToCache.push("Plutarch_Camillus_36.html");
urlsToCache.push("Plutarch_Camillus_37.html");
urlsToCache.push("Plutarch_Camillus_38.html");
urlsToCache.push("Plutarch_Camillus_39.html");
urlsToCache.push("Plutarch_Camillus_40.html");
urlsToCache.push("Plutarch_Camillus_41.html");
urlsToCache.push("Plutarch_Camillus_42.html");
urlsToCache.push("Plutarch_Camillus_43.html");
urlsToCache.push("translation.js");
