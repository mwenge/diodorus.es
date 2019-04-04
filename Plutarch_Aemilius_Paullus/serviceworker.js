'use strict';

var CACHE_NAME = 'Plutarch_Aemilius_Paullus';
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
urlsToCache.push("Plutarch_Aemilius_Paullus.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_2.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_3.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_4.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_5.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_6.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_7.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_8.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_9.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_10.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_11.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_12.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_13.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_14.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_15.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_16.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_17.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_18.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_19.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_20.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_21.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_22.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_23.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_24.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_25.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_26.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_27.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_28.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_29.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_30.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_31.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_32.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_33.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_34.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_35.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_36.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_37.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_38.html");
urlsToCache.push("Plutarch_Aemilius_Paullus_39.html");
urlsToCache.push("translation.js");
