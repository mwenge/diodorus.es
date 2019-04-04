'use strict';

var CACHE_NAME = 'Plutarch_Marcellus';
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
urlsToCache.push("Plutarch_Marcellus.html");
urlsToCache.push("Plutarch_Marcellus_2.html");
urlsToCache.push("Plutarch_Marcellus_3.html");
urlsToCache.push("Plutarch_Marcellus_4.html");
urlsToCache.push("Plutarch_Marcellus_5.html");
urlsToCache.push("Plutarch_Marcellus_6.html");
urlsToCache.push("Plutarch_Marcellus_7.html");
urlsToCache.push("Plutarch_Marcellus_8.html");
urlsToCache.push("Plutarch_Marcellus_9.html");
urlsToCache.push("Plutarch_Marcellus_10.html");
urlsToCache.push("Plutarch_Marcellus_11.html");
urlsToCache.push("Plutarch_Marcellus_12.html");
urlsToCache.push("Plutarch_Marcellus_13.html");
urlsToCache.push("Plutarch_Marcellus_14.html");
urlsToCache.push("Plutarch_Marcellus_15.html");
urlsToCache.push("Plutarch_Marcellus_16.html");
urlsToCache.push("Plutarch_Marcellus_17.html");
urlsToCache.push("Plutarch_Marcellus_18.html");
urlsToCache.push("Plutarch_Marcellus_19.html");
urlsToCache.push("Plutarch_Marcellus_20.html");
urlsToCache.push("Plutarch_Marcellus_21.html");
urlsToCache.push("Plutarch_Marcellus_22.html");
urlsToCache.push("Plutarch_Marcellus_23.html");
urlsToCache.push("Plutarch_Marcellus_24.html");
urlsToCache.push("Plutarch_Marcellus_25.html");
urlsToCache.push("Plutarch_Marcellus_26.html");
urlsToCache.push("Plutarch_Marcellus_27.html");
urlsToCache.push("Plutarch_Marcellus_28.html");
urlsToCache.push("Plutarch_Marcellus_29.html");
urlsToCache.push("Plutarch_Marcellus_30.html");
urlsToCache.push("translation.js");
