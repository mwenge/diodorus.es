'use strict';

var CACHE_NAME = 'Plutarch_Quaestiones_Naturales';
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
urlsToCache.push("Plutarch_Quaestiones_Naturales.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_2.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_3.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_4.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_5.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_6.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_7.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_8.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_9.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_10.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_11.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_12.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_13.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_14.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_15.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_16.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_17.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_18.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_19.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_20.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_21.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_22.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_23.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_24.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_25.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_26.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_27.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_28.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_29.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_30.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_31.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_32.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_33.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_34.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_35.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_36.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_37.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_38.html");
urlsToCache.push("Plutarch_Quaestiones_Naturales_39.html");
