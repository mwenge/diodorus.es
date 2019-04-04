'use strict';

var CACHE_NAME = 'Plutarch_Caesar';
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
urlsToCache.push("Plutarch_Caesar.html");
urlsToCache.push("Plutarch_Caesar_2.html");
urlsToCache.push("Plutarch_Caesar_3.html");
urlsToCache.push("Plutarch_Caesar_4.html");
urlsToCache.push("Plutarch_Caesar_5.html");
urlsToCache.push("Plutarch_Caesar_6.html");
urlsToCache.push("Plutarch_Caesar_7.html");
urlsToCache.push("Plutarch_Caesar_8.html");
urlsToCache.push("Plutarch_Caesar_9.html");
urlsToCache.push("Plutarch_Caesar_10.html");
urlsToCache.push("Plutarch_Caesar_11.html");
urlsToCache.push("Plutarch_Caesar_12.html");
urlsToCache.push("Plutarch_Caesar_13.html");
urlsToCache.push("Plutarch_Caesar_14.html");
urlsToCache.push("Plutarch_Caesar_15.html");
urlsToCache.push("Plutarch_Caesar_16.html");
urlsToCache.push("Plutarch_Caesar_17.html");
urlsToCache.push("Plutarch_Caesar_18.html");
urlsToCache.push("Plutarch_Caesar_19.html");
urlsToCache.push("Plutarch_Caesar_20.html");
urlsToCache.push("Plutarch_Caesar_21.html");
urlsToCache.push("Plutarch_Caesar_22.html");
urlsToCache.push("Plutarch_Caesar_23.html");
urlsToCache.push("Plutarch_Caesar_24.html");
urlsToCache.push("Plutarch_Caesar_25.html");
urlsToCache.push("Plutarch_Caesar_26.html");
urlsToCache.push("Plutarch_Caesar_27.html");
urlsToCache.push("Plutarch_Caesar_28.html");
urlsToCache.push("Plutarch_Caesar_29.html");
urlsToCache.push("Plutarch_Caesar_30.html");
urlsToCache.push("Plutarch_Caesar_31.html");
urlsToCache.push("Plutarch_Caesar_32.html");
urlsToCache.push("Plutarch_Caesar_33.html");
urlsToCache.push("Plutarch_Caesar_34.html");
urlsToCache.push("Plutarch_Caesar_35.html");
urlsToCache.push("Plutarch_Caesar_36.html");
urlsToCache.push("Plutarch_Caesar_37.html");
urlsToCache.push("Plutarch_Caesar_38.html");
urlsToCache.push("Plutarch_Caesar_39.html");
urlsToCache.push("Plutarch_Caesar_40.html");
urlsToCache.push("Plutarch_Caesar_41.html");
urlsToCache.push("Plutarch_Caesar_42.html");
urlsToCache.push("Plutarch_Caesar_43.html");
urlsToCache.push("Plutarch_Caesar_44.html");
urlsToCache.push("Plutarch_Caesar_45.html");
urlsToCache.push("Plutarch_Caesar_46.html");
urlsToCache.push("Plutarch_Caesar_47.html");
urlsToCache.push("Plutarch_Caesar_48.html");
urlsToCache.push("Plutarch_Caesar_49.html");
urlsToCache.push("Plutarch_Caesar_50.html");
urlsToCache.push("Plutarch_Caesar_51.html");
urlsToCache.push("Plutarch_Caesar_52.html");
urlsToCache.push("Plutarch_Caesar_53.html");
urlsToCache.push("Plutarch_Caesar_54.html");
urlsToCache.push("Plutarch_Caesar_55.html");
urlsToCache.push("Plutarch_Caesar_56.html");
urlsToCache.push("Plutarch_Caesar_57.html");
urlsToCache.push("Plutarch_Caesar_58.html");
urlsToCache.push("Plutarch_Caesar_59.html");
urlsToCache.push("Plutarch_Caesar_60.html");
urlsToCache.push("Plutarch_Caesar_61.html");
urlsToCache.push("Plutarch_Caesar_62.html");
urlsToCache.push("Plutarch_Caesar_63.html");
urlsToCache.push("Plutarch_Caesar_64.html");
urlsToCache.push("Plutarch_Caesar_65.html");
urlsToCache.push("Plutarch_Caesar_66.html");
urlsToCache.push("Plutarch_Caesar_67.html");
urlsToCache.push("Plutarch_Caesar_68.html");
urlsToCache.push("Plutarch_Caesar_69.html");
urlsToCache.push("translation.js");
