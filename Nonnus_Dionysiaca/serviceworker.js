'use strict';

var CACHE_NAME = 'Nonnus_Dionysiaca';
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
urlsToCache.push("Nonnus_Dionysiaca_16.html");
urlsToCache.push("Nonnus_Dionysiaca_17.html");
urlsToCache.push("Nonnus_Dionysiaca_18.html");
urlsToCache.push("Nonnus_Dionysiaca_19.html");
urlsToCache.push("Nonnus_Dionysiaca_20.html");
urlsToCache.push("Nonnus_Dionysiaca_21.html");
urlsToCache.push("Nonnus_Dionysiaca_22.html");
urlsToCache.push("Nonnus_Dionysiaca_23.html");
urlsToCache.push("Nonnus_Dionysiaca_24.html");
urlsToCache.push("Nonnus_Dionysiaca_25.html");
urlsToCache.push("Nonnus_Dionysiaca_26.html");
urlsToCache.push("Nonnus_Dionysiaca_27.html");
urlsToCache.push("Nonnus_Dionysiaca_28.html");
urlsToCache.push("Nonnus_Dionysiaca_29.html");
urlsToCache.push("Nonnus_Dionysiaca_30.html");
urlsToCache.push("Nonnus_Dionysiaca_31.html");
urlsToCache.push("Nonnus_Dionysiaca_32.html");
urlsToCache.push("Nonnus_Dionysiaca_33.html");
urlsToCache.push("Nonnus_Dionysiaca_34.html");
urlsToCache.push("Nonnus_Dionysiaca_35.html");
urlsToCache.push("Nonnus_Dionysiaca_1.html");
urlsToCache.push("Nonnus_Dionysiaca_2.html");
urlsToCache.push("Nonnus_Dionysiaca_3.html");
urlsToCache.push("Nonnus_Dionysiaca_4.html");
urlsToCache.push("Nonnus_Dionysiaca_5.html");
urlsToCache.push("Nonnus_Dionysiaca_6.html");
urlsToCache.push("Nonnus_Dionysiaca_7.html");
urlsToCache.push("Nonnus_Dionysiaca_8.html");
urlsToCache.push("Nonnus_Dionysiaca_9.html");
urlsToCache.push("Nonnus_Dionysiaca_10.html");
urlsToCache.push("Nonnus_Dionysiaca_11.html");
urlsToCache.push("Nonnus_Dionysiaca_12.html");
urlsToCache.push("Nonnus_Dionysiaca_13.html");
urlsToCache.push("Nonnus_Dionysiaca_14.html");
urlsToCache.push("Nonnus_Dionysiaca_15.html");
