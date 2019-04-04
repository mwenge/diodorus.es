'use strict';

var CACHE_NAME = 'Plutarch_Dion';
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
urlsToCache.push("Plutarch_Dion.html");
urlsToCache.push("Plutarch_Dion_2.html");
urlsToCache.push("Plutarch_Dion_3.html");
urlsToCache.push("Plutarch_Dion_4.html");
urlsToCache.push("Plutarch_Dion_5.html");
urlsToCache.push("Plutarch_Dion_6.html");
urlsToCache.push("Plutarch_Dion_7.html");
urlsToCache.push("Plutarch_Dion_8.html");
urlsToCache.push("Plutarch_Dion_9.html");
urlsToCache.push("Plutarch_Dion_10.html");
urlsToCache.push("Plutarch_Dion_11.html");
urlsToCache.push("Plutarch_Dion_12.html");
urlsToCache.push("Plutarch_Dion_13.html");
urlsToCache.push("Plutarch_Dion_14.html");
urlsToCache.push("Plutarch_Dion_15.html");
urlsToCache.push("Plutarch_Dion_16.html");
urlsToCache.push("Plutarch_Dion_17.html");
urlsToCache.push("Plutarch_Dion_18.html");
urlsToCache.push("Plutarch_Dion_19.html");
urlsToCache.push("Plutarch_Dion_20.html");
urlsToCache.push("Plutarch_Dion_21.html");
urlsToCache.push("Plutarch_Dion_22.html");
urlsToCache.push("Plutarch_Dion_23.html");
urlsToCache.push("Plutarch_Dion_24.html");
urlsToCache.push("Plutarch_Dion_25.html");
urlsToCache.push("Plutarch_Dion_26.html");
urlsToCache.push("Plutarch_Dion_27.html");
urlsToCache.push("Plutarch_Dion_28.html");
urlsToCache.push("Plutarch_Dion_29.html");
urlsToCache.push("Plutarch_Dion_30.html");
urlsToCache.push("Plutarch_Dion_31.html");
urlsToCache.push("Plutarch_Dion_32.html");
urlsToCache.push("Plutarch_Dion_33.html");
urlsToCache.push("Plutarch_Dion_34.html");
urlsToCache.push("Plutarch_Dion_35.html");
urlsToCache.push("Plutarch_Dion_36.html");
urlsToCache.push("Plutarch_Dion_37.html");
urlsToCache.push("Plutarch_Dion_38.html");
urlsToCache.push("Plutarch_Dion_39.html");
urlsToCache.push("Plutarch_Dion_40.html");
urlsToCache.push("Plutarch_Dion_41.html");
urlsToCache.push("Plutarch_Dion_42.html");
urlsToCache.push("Plutarch_Dion_43.html");
urlsToCache.push("Plutarch_Dion_44.html");
urlsToCache.push("Plutarch_Dion_45.html");
urlsToCache.push("Plutarch_Dion_46.html");
urlsToCache.push("Plutarch_Dion_47.html");
urlsToCache.push("Plutarch_Dion_48.html");
urlsToCache.push("Plutarch_Dion_49.html");
urlsToCache.push("Plutarch_Dion_50.html");
urlsToCache.push("Plutarch_Dion_51.html");
urlsToCache.push("Plutarch_Dion_52.html");
urlsToCache.push("Plutarch_Dion_53.html");
urlsToCache.push("Plutarch_Dion_54.html");
urlsToCache.push("Plutarch_Dion_55.html");
urlsToCache.push("Plutarch_Dion_56.html");
urlsToCache.push("Plutarch_Dion_57.html");
urlsToCache.push("Plutarch_Dion_58.html");
urlsToCache.push("translation.js");
