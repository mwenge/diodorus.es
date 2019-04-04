'use strict';

var CACHE_NAME = 'Homer_Homeric_Hymns';
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
urlsToCache.push("Homer_Homeric_Hymns_1.html");
urlsToCache.push("Homer_Homeric_Hymns_2.html");
urlsToCache.push("Homer_Homeric_Hymns_3.html");
urlsToCache.push("Homer_Homeric_Hymns_4.html");
urlsToCache.push("Homer_Homeric_Hymns_5.html");
urlsToCache.push("Homer_Homeric_Hymns_6.html");
urlsToCache.push("Homer_Homeric_Hymns_7.html");
urlsToCache.push("Homer_Homeric_Hymns_8.html");
urlsToCache.push("Homer_Homeric_Hymns_9.html");
urlsToCache.push("Homer_Homeric_Hymns_10.html");
urlsToCache.push("Homer_Homeric_Hymns_11.html");
urlsToCache.push("Homer_Homeric_Hymns_12.html");
urlsToCache.push("Homer_Homeric_Hymns_13.html");
urlsToCache.push("Homer_Homeric_Hymns_14.html");
urlsToCache.push("Homer_Homeric_Hymns_15.html");
urlsToCache.push("Homer_Homeric_Hymns_16.html");
urlsToCache.push("Homer_Homeric_Hymns_17.html");
urlsToCache.push("Homer_Homeric_Hymns_18.html");
urlsToCache.push("Homer_Homeric_Hymns_19.html");
urlsToCache.push("Homer_Homeric_Hymns_20.html");
urlsToCache.push("Homer_Homeric_Hymns_21.html");
urlsToCache.push("Homer_Homeric_Hymns_22.html");
urlsToCache.push("Homer_Homeric_Hymns_23.html");
urlsToCache.push("Homer_Homeric_Hymns_24.html");
urlsToCache.push("Homer_Homeric_Hymns_25.html");
urlsToCache.push("Homer_Homeric_Hymns_26.html");
urlsToCache.push("Homer_Homeric_Hymns_27.html");
urlsToCache.push("Homer_Homeric_Hymns_28.html");
urlsToCache.push("Homer_Homeric_Hymns_29.html");
urlsToCache.push("Homer_Homeric_Hymns_30.html");
urlsToCache.push("Homer_Homeric_Hymns_31.html");
urlsToCache.push("Homer_Homeric_Hymns_32.html");
urlsToCache.push("Homer_Homeric_Hymns_33.html");
