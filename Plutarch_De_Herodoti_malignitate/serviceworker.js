'use strict';

var CACHE_NAME = 'Plutarch_De_Herodoti_malignitate';
var urlsToCache = [
  'Plutarch_De_Herodoti_malignitate.html',
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
urlsToCache.push("Plutarch_De_Herodoti_malignitate.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_2.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_3.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_4.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_5.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_6.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_7.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_8.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_9.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_10.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_11.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_12.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_13.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_14.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_15.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_16.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_17.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_18.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_19.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_20.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_21.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_22.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_23.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_24.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_25.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_26.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_27.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_28.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_29.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_30.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_31.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_32.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_33.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_34.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_35.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_36.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_37.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_38.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_39.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_40.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_41.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_42.html");
urlsToCache.push("Plutarch_De_Herodoti_malignitate_43.html");
