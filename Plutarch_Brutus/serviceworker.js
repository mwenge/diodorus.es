'use strict';

var CACHE_NAME = 'Plutarch_Brutus';
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
urlsToCache.push("Plutarch_Brutus.html");
urlsToCache.push("Plutarch_Brutus_2.html");
urlsToCache.push("Plutarch_Brutus_3.html");
urlsToCache.push("Plutarch_Brutus_4.html");
urlsToCache.push("Plutarch_Brutus_5.html");
urlsToCache.push("Plutarch_Brutus_6.html");
urlsToCache.push("Plutarch_Brutus_7.html");
urlsToCache.push("Plutarch_Brutus_8.html");
urlsToCache.push("Plutarch_Brutus_9.html");
urlsToCache.push("Plutarch_Brutus_10.html");
urlsToCache.push("Plutarch_Brutus_11.html");
urlsToCache.push("Plutarch_Brutus_12.html");
urlsToCache.push("Plutarch_Brutus_13.html");
urlsToCache.push("Plutarch_Brutus_14.html");
urlsToCache.push("Plutarch_Brutus_15.html");
urlsToCache.push("Plutarch_Brutus_16.html");
urlsToCache.push("Plutarch_Brutus_17.html");
urlsToCache.push("Plutarch_Brutus_18.html");
urlsToCache.push("Plutarch_Brutus_19.html");
urlsToCache.push("Plutarch_Brutus_20.html");
urlsToCache.push("Plutarch_Brutus_21.html");
urlsToCache.push("Plutarch_Brutus_22.html");
urlsToCache.push("Plutarch_Brutus_23.html");
urlsToCache.push("Plutarch_Brutus_24.html");
urlsToCache.push("Plutarch_Brutus_25.html");
urlsToCache.push("Plutarch_Brutus_26.html");
urlsToCache.push("Plutarch_Brutus_27.html");
urlsToCache.push("Plutarch_Brutus_28.html");
urlsToCache.push("Plutarch_Brutus_29.html");
urlsToCache.push("Plutarch_Brutus_30.html");
urlsToCache.push("Plutarch_Brutus_31.html");
urlsToCache.push("Plutarch_Brutus_32.html");
urlsToCache.push("Plutarch_Brutus_33.html");
urlsToCache.push("Plutarch_Brutus_34.html");
urlsToCache.push("Plutarch_Brutus_35.html");
urlsToCache.push("Plutarch_Brutus_36.html");
urlsToCache.push("Plutarch_Brutus_37.html");
urlsToCache.push("Plutarch_Brutus_38.html");
urlsToCache.push("Plutarch_Brutus_39.html");
urlsToCache.push("Plutarch_Brutus_40.html");
urlsToCache.push("Plutarch_Brutus_41.html");
urlsToCache.push("Plutarch_Brutus_42.html");
urlsToCache.push("Plutarch_Brutus_43.html");
urlsToCache.push("Plutarch_Brutus_44.html");
urlsToCache.push("Plutarch_Brutus_45.html");
urlsToCache.push("Plutarch_Brutus_46.html");
urlsToCache.push("Plutarch_Brutus_47.html");
urlsToCache.push("Plutarch_Brutus_48.html");
urlsToCache.push("Plutarch_Brutus_49.html");
urlsToCache.push("Plutarch_Brutus_50.html");
urlsToCache.push("Plutarch_Brutus_51.html");
urlsToCache.push("Plutarch_Brutus_52.html");
urlsToCache.push("Plutarch_Brutus_53.html");
urlsToCache.push("translation.js");
