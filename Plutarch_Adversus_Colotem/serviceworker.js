'use strict';

var CACHE_NAME = 'Plutarch_Adversus_Colotem';
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
urlsToCache.push("Plutarch_Adversus_Colotem.html");
urlsToCache.push("Plutarch_Adversus_Colotem_2.html");
urlsToCache.push("Plutarch_Adversus_Colotem_3.html");
urlsToCache.push("Plutarch_Adversus_Colotem_4.html");
urlsToCache.push("Plutarch_Adversus_Colotem_5.html");
urlsToCache.push("Plutarch_Adversus_Colotem_6.html");
urlsToCache.push("Plutarch_Adversus_Colotem_7.html");
urlsToCache.push("Plutarch_Adversus_Colotem_8.html");
urlsToCache.push("Plutarch_Adversus_Colotem_9.html");
urlsToCache.push("Plutarch_Adversus_Colotem_10.html");
urlsToCache.push("Plutarch_Adversus_Colotem_11.html");
urlsToCache.push("Plutarch_Adversus_Colotem_12.html");
urlsToCache.push("Plutarch_Adversus_Colotem_13.html");
urlsToCache.push("Plutarch_Adversus_Colotem_14.html");
urlsToCache.push("Plutarch_Adversus_Colotem_15.html");
urlsToCache.push("Plutarch_Adversus_Colotem_16.html");
urlsToCache.push("Plutarch_Adversus_Colotem_17.html");
urlsToCache.push("Plutarch_Adversus_Colotem_18.html");
urlsToCache.push("Plutarch_Adversus_Colotem_19.html");
urlsToCache.push("Plutarch_Adversus_Colotem_20.html");
urlsToCache.push("Plutarch_Adversus_Colotem_21.html");
urlsToCache.push("Plutarch_Adversus_Colotem_22.html");
urlsToCache.push("Plutarch_Adversus_Colotem_23.html");
urlsToCache.push("Plutarch_Adversus_Colotem_24.html");
urlsToCache.push("Plutarch_Adversus_Colotem_25.html");
urlsToCache.push("Plutarch_Adversus_Colotem_26.html");
urlsToCache.push("Plutarch_Adversus_Colotem_27.html");
urlsToCache.push("Plutarch_Adversus_Colotem_28.html");
urlsToCache.push("Plutarch_Adversus_Colotem_29.html");
urlsToCache.push("Plutarch_Adversus_Colotem_30.html");
urlsToCache.push("Plutarch_Adversus_Colotem_31.html");
urlsToCache.push("Plutarch_Adversus_Colotem_32.html");
urlsToCache.push("Plutarch_Adversus_Colotem_33.html");
urlsToCache.push("Plutarch_Adversus_Colotem_34.html");
