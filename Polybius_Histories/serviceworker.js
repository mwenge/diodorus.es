'use strict';

var CACHE_NAME = 'Polybius_Histories';
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
urlsToCache.push("Polybius_Histories.html");
urlsToCache.push("Polybius_Histories_2.html");
urlsToCache.push("Polybius_Histories_3.html");
urlsToCache.push("Polybius_Histories_4.html");
urlsToCache.push("Polybius_Histories_5.html");
urlsToCache.push("Polybius_Histories_6.html");
urlsToCache.push("Polybius_Histories_7.html");
urlsToCache.push("Polybius_Histories_8.html");
urlsToCache.push("Polybius_Histories_9.html");
urlsToCache.push("Polybius_Histories_10.html");
urlsToCache.push("Polybius_Histories_11.html");
urlsToCache.push("Polybius_Histories_12.html");
urlsToCache.push("Polybius_Histories_13.html");
urlsToCache.push("Polybius_Histories_14.html");
urlsToCache.push("Polybius_Histories_15.html");
urlsToCache.push("Polybius_Histories_16.html");
urlsToCache.push("Polybius_Histories_17.html");
urlsToCache.push("Polybius_Histories_18.html");
urlsToCache.push("Polybius_Histories_19.html");
urlsToCache.push("Polybius_Histories_20.html");
urlsToCache.push("Polybius_Histories_21.html");
urlsToCache.push("Polybius_Histories_22.html");
urlsToCache.push("Polybius_Histories_23.html");
urlsToCache.push("Polybius_Histories_24.html");
urlsToCache.push("Polybius_Histories_25.html");
urlsToCache.push("Polybius_Histories_26.html");
urlsToCache.push("Polybius_Histories_27.html");
urlsToCache.push("Polybius_Histories_28.html");
urlsToCache.push("Polybius_Histories_29.html");
urlsToCache.push("Polybius_Histories_30.html");
urlsToCache.push("Polybius_Histories_31.html");
urlsToCache.push("Polybius_Histories_32.html");
urlsToCache.push("Polybius_Histories_33.html");
urlsToCache.push("Polybius_Histories_34.html");
urlsToCache.push("Polybius_Histories_35.html");
urlsToCache.push("Polybius_Histories_36.html");
urlsToCache.push("Polybius_Histories_37.html");
urlsToCache.push("Polybius_Histories_38.html");
urlsToCache.push("Polybius_Histories_39.html");
