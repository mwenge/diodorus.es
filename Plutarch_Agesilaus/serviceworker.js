'use strict';

var CACHE_NAME = 'Plutarch_Agesilaus';
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
urlsToCache.push("Plutarch_Agesilaus.html");
urlsToCache.push("Plutarch_Agesilaus_2.html");
urlsToCache.push("Plutarch_Agesilaus_3.html");
urlsToCache.push("Plutarch_Agesilaus_4.html");
urlsToCache.push("Plutarch_Agesilaus_5.html");
urlsToCache.push("Plutarch_Agesilaus_6.html");
urlsToCache.push("Plutarch_Agesilaus_7.html");
urlsToCache.push("Plutarch_Agesilaus_8.html");
urlsToCache.push("Plutarch_Agesilaus_9.html");
urlsToCache.push("Plutarch_Agesilaus_10.html");
urlsToCache.push("Plutarch_Agesilaus_11.html");
urlsToCache.push("Plutarch_Agesilaus_12.html");
urlsToCache.push("Plutarch_Agesilaus_13.html");
urlsToCache.push("Plutarch_Agesilaus_14.html");
urlsToCache.push("Plutarch_Agesilaus_15.html");
urlsToCache.push("Plutarch_Agesilaus_16.html");
urlsToCache.push("Plutarch_Agesilaus_17.html");
urlsToCache.push("Plutarch_Agesilaus_18.html");
urlsToCache.push("Plutarch_Agesilaus_19.html");
urlsToCache.push("Plutarch_Agesilaus_20.html");
urlsToCache.push("Plutarch_Agesilaus_21.html");
urlsToCache.push("Plutarch_Agesilaus_22.html");
urlsToCache.push("Plutarch_Agesilaus_23.html");
urlsToCache.push("Plutarch_Agesilaus_24.html");
urlsToCache.push("Plutarch_Agesilaus_25.html");
urlsToCache.push("Plutarch_Agesilaus_26.html");
urlsToCache.push("Plutarch_Agesilaus_27.html");
urlsToCache.push("Plutarch_Agesilaus_28.html");
urlsToCache.push("Plutarch_Agesilaus_29.html");
urlsToCache.push("Plutarch_Agesilaus_30.html");
urlsToCache.push("Plutarch_Agesilaus_31.html");
urlsToCache.push("Plutarch_Agesilaus_32.html");
urlsToCache.push("Plutarch_Agesilaus_33.html");
urlsToCache.push("Plutarch_Agesilaus_34.html");
urlsToCache.push("Plutarch_Agesilaus_35.html");
urlsToCache.push("Plutarch_Agesilaus_36.html");
urlsToCache.push("Plutarch_Agesilaus_37.html");
urlsToCache.push("Plutarch_Agesilaus_38.html");
urlsToCache.push("Plutarch_Agesilaus_39.html");
urlsToCache.push("Plutarch_Agesilaus_40.html");
urlsToCache.push("translation.js");
