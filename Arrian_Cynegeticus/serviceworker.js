'use strict';

var CACHE_NAME = 'Arrian_Cynegeticus';
var urlsToCache = [
  'Arrian_Cynegeticus.html',
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
urlsToCache.push("Arrian_Cynegeticus_pr.html");
urlsToCache.push("Arrian_Cynegeticus.html");
urlsToCache.push("Arrian_Cynegeticus_2.html");
urlsToCache.push("Arrian_Cynegeticus_3.html");
urlsToCache.push("Arrian_Cynegeticus_4.html");
urlsToCache.push("Arrian_Cynegeticus_5.html");
urlsToCache.push("Arrian_Cynegeticus_6.html");
urlsToCache.push("Arrian_Cynegeticus_7.html");
urlsToCache.push("Arrian_Cynegeticus_8.html");
urlsToCache.push("Arrian_Cynegeticus_9.html");
urlsToCache.push("Arrian_Cynegeticus_10.html");
urlsToCache.push("Arrian_Cynegeticus_11.html");
urlsToCache.push("Arrian_Cynegeticus_12.html");
urlsToCache.push("Arrian_Cynegeticus_13.html");
urlsToCache.push("Arrian_Cynegeticus_14.html");
urlsToCache.push("Arrian_Cynegeticus_15.html");
urlsToCache.push("Arrian_Cynegeticus_16.html");
urlsToCache.push("Arrian_Cynegeticus_17.html");
urlsToCache.push("Arrian_Cynegeticus_18.html");
urlsToCache.push("Arrian_Cynegeticus_19.html");
urlsToCache.push("Arrian_Cynegeticus_20.html");
urlsToCache.push("Arrian_Cynegeticus_21.html");
urlsToCache.push("Arrian_Cynegeticus_22.html");
urlsToCache.push("Arrian_Cynegeticus_23.html");
urlsToCache.push("Arrian_Cynegeticus_24.html");
urlsToCache.push("Arrian_Cynegeticus_25.html");
urlsToCache.push("Arrian_Cynegeticus_26.html");
urlsToCache.push("Arrian_Cynegeticus_27.html");
urlsToCache.push("Arrian_Cynegeticus_28.html");
urlsToCache.push("Arrian_Cynegeticus_29.html");
urlsToCache.push("Arrian_Cynegeticus_30.html");
urlsToCache.push("Arrian_Cynegeticus_31.html");
urlsToCache.push("Arrian_Cynegeticus_32.html");
urlsToCache.push("Arrian_Cynegeticus_33.html");
urlsToCache.push("Arrian_Cynegeticus_34.html");
urlsToCache.push("Arrian_Cynegeticus_35.html");
urlsToCache.push("Arrian_Cynegeticus_36.html");
