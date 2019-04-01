'use strict';

var CACHE_NAME = 'Plutarch_Lucullus';
var urlsToCache = [
  'Plutarch_Lucullus.html',
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
urlsToCache.push("Plutarch_Lucullus.html");
urlsToCache.push("Plutarch_Lucullus_2.html");
urlsToCache.push("Plutarch_Lucullus_3.html");
urlsToCache.push("Plutarch_Lucullus_4.html");
urlsToCache.push("Plutarch_Lucullus_5.html");
urlsToCache.push("Plutarch_Lucullus_6.html");
urlsToCache.push("Plutarch_Lucullus_7.html");
urlsToCache.push("Plutarch_Lucullus_8.html");
urlsToCache.push("Plutarch_Lucullus_9.html");
urlsToCache.push("Plutarch_Lucullus_10.html");
urlsToCache.push("Plutarch_Lucullus_11.html");
urlsToCache.push("Plutarch_Lucullus_12.html");
urlsToCache.push("Plutarch_Lucullus_13.html");
urlsToCache.push("Plutarch_Lucullus_14.html");
urlsToCache.push("Plutarch_Lucullus_15.html");
urlsToCache.push("Plutarch_Lucullus_16.html");
urlsToCache.push("Plutarch_Lucullus_17.html");
urlsToCache.push("Plutarch_Lucullus_18.html");
urlsToCache.push("Plutarch_Lucullus_19.html");
urlsToCache.push("Plutarch_Lucullus_20.html");
urlsToCache.push("Plutarch_Lucullus_21.html");
urlsToCache.push("Plutarch_Lucullus_22.html");
urlsToCache.push("Plutarch_Lucullus_23.html");
urlsToCache.push("Plutarch_Lucullus_24.html");
urlsToCache.push("Plutarch_Lucullus_25.html");
urlsToCache.push("Plutarch_Lucullus_26.html");
urlsToCache.push("Plutarch_Lucullus_27.html");
urlsToCache.push("Plutarch_Lucullus_28.html");
urlsToCache.push("Plutarch_Lucullus_29.html");
urlsToCache.push("Plutarch_Lucullus_30.html");
urlsToCache.push("Plutarch_Lucullus_31.html");
urlsToCache.push("Plutarch_Lucullus_32.html");
urlsToCache.push("Plutarch_Lucullus_33.html");
urlsToCache.push("Plutarch_Lucullus_34.html");
urlsToCache.push("Plutarch_Lucullus_35.html");
urlsToCache.push("Plutarch_Lucullus_36.html");
urlsToCache.push("Plutarch_Lucullus_37.html");
urlsToCache.push("Plutarch_Lucullus_38.html");
urlsToCache.push("Plutarch_Lucullus_39.html");
urlsToCache.push("Plutarch_Lucullus_40.html");
urlsToCache.push("Plutarch_Lucullus_41.html");
urlsToCache.push("Plutarch_Lucullus_42.html");
urlsToCache.push("Plutarch_Lucullus_43.html");
