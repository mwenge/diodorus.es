'use strict';

var CACHE_NAME = 'Theocritus_Idylls';
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
urlsToCache.push("Theocritus_Idylls_1.html");
urlsToCache.push("Theocritus_Idylls_2.html");
urlsToCache.push("Theocritus_Idylls_3.html");
urlsToCache.push("Theocritus_Idylls_4.html");
urlsToCache.push("Theocritus_Idylls_5.html");
urlsToCache.push("Theocritus_Idylls_6.html");
urlsToCache.push("Theocritus_Idylls_7.html");
urlsToCache.push("Theocritus_Idylls_8.html");
urlsToCache.push("Theocritus_Idylls_9.html");
urlsToCache.push("Theocritus_Idylls_10.html");
urlsToCache.push("Theocritus_Idylls_11.html");
urlsToCache.push("Theocritus_Idylls_12.html");
urlsToCache.push("Theocritus_Idylls_13.html");
urlsToCache.push("Theocritus_Idylls_14.html");
urlsToCache.push("Theocritus_Idylls_15.html");
urlsToCache.push("Theocritus_Idylls_16.html");
urlsToCache.push("Theocritus_Idylls_17.html");
urlsToCache.push("Theocritus_Idylls_18.html");
urlsToCache.push("Theocritus_Idylls_19.html");
urlsToCache.push("Theocritus_Idylls_20.html");
urlsToCache.push("Theocritus_Idylls_21.html");
urlsToCache.push("Theocritus_Idylls_22.html");
urlsToCache.push("Theocritus_Idylls_23.html");
urlsToCache.push("Theocritus_Idylls_24.html");
urlsToCache.push("Theocritus_Idylls_25.html");
urlsToCache.push("Theocritus_Idylls_26.html");
urlsToCache.push("Theocritus_Idylls_27.html");
urlsToCache.push("Theocritus_Idylls_28.html");
urlsToCache.push("Theocritus_Idylls_29.html");
urlsToCache.push("Theocritus_Idylls_30.html");
urlsToCache.push("Theocritus_Idylls_1.html");
urlsToCache.push("Theocritus_Idylls_2.html");
urlsToCache.push("Theocritus_Idylls_3.html");
urlsToCache.push("Theocritus_Idylls_4.html");
urlsToCache.push("Theocritus_Idylls_5.html");
urlsToCache.push("Theocritus_Idylls_6.html");
urlsToCache.push("Theocritus_Idylls_7.html");
urlsToCache.push("Theocritus_Idylls_8.html");
urlsToCache.push("Theocritus_Idylls_9.html");
urlsToCache.push("Theocritus_Idylls_10.html");
urlsToCache.push("Theocritus_Idylls_11.html");
urlsToCache.push("Theocritus_Idylls_12.html");
urlsToCache.push("Theocritus_Idylls_13.html");
urlsToCache.push("Theocritus_Idylls_14.html");
urlsToCache.push("Theocritus_Idylls_15.html");
urlsToCache.push("Theocritus_Idylls_16.html");
urlsToCache.push("Theocritus_Idylls_17.html");
urlsToCache.push("Theocritus_Idylls_18.html");
urlsToCache.push("Theocritus_Idylls_19.html");
urlsToCache.push("Theocritus_Idylls_20.html");
urlsToCache.push("Theocritus_Idylls_21.html");
urlsToCache.push("Theocritus_Idylls_22.html");
urlsToCache.push("Theocritus_Idylls_23.html");
urlsToCache.push("Theocritus_Idylls_24.html");
