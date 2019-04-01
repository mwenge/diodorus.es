'use strict';

var CACHE_NAME = 'Plutarch_Quaestiones_Graecae';
var urlsToCache = [
  'Plutarch_Quaestiones_Graecae.html',
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
urlsToCache.push("Plutarch_Quaestiones_Graecae.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_2.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_3.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_4.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_5.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_6.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_7.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_8.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_9.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_10.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_11.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_12.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_13.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_14.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_15.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_16.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_17.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_18.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_19.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_20.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_21.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_22.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_23.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_24.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_25.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_26.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_27.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_28.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_29.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_30.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_31.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_32.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_33.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_34.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_35.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_36.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_37.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_38.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_39.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_40.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_41.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_42.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_43.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_44.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_45.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_46.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_47.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_48.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_49.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_50.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_51.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_52.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_53.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_54.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_55.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_56.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_57.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_58.html");
urlsToCache.push("Plutarch_Quaestiones_Graecae_59.html");
