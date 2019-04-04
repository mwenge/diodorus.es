'use strict';

var CACHE_NAME = 'Theocritus_Epigrams';
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
urlsToCache.push("Theocritus_Epigrams_1.html");
urlsToCache.push("Theocritus_Epigrams_2.html");
urlsToCache.push("Theocritus_Epigrams_3.html");
urlsToCache.push("Theocritus_Epigrams_4.html");
urlsToCache.push("Theocritus_Epigrams_5.html");
urlsToCache.push("Theocritus_Epigrams_6.html");
urlsToCache.push("Theocritus_Epigrams_7.html");
urlsToCache.push("Theocritus_Epigrams_8.html");
urlsToCache.push("Theocritus_Epigrams_9.html");
urlsToCache.push("Theocritus_Epigrams_10.html");
urlsToCache.push("Theocritus_Epigrams_11.html");
urlsToCache.push("Theocritus_Epigrams_12.html");
urlsToCache.push("Theocritus_Epigrams_13.html");
urlsToCache.push("Theocritus_Epigrams_14.html");
urlsToCache.push("Theocritus_Epigrams_15.html");
urlsToCache.push("Theocritus_Epigrams_16.html");
urlsToCache.push("Theocritus_Epigrams_17.html");
urlsToCache.push("Theocritus_Epigrams_18.html");
urlsToCache.push("Theocritus_Epigrams_19.html");
urlsToCache.push("Theocritus_Epigrams_20.html");
urlsToCache.push("Theocritus_Epigrams_21.html");
urlsToCache.push("Theocritus_Epigrams_22.html");
urlsToCache.push("Theocritus_Epigrams_23.html");
urlsToCache.push("Theocritus_Epigrams_24.html");
