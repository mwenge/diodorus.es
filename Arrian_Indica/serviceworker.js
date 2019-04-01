'use strict';

var CACHE_NAME = 'Arrian_Indica';
var urlsToCache = [
  'Arrian_Indica.html',
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
urlsToCache.push("Arrian_Indica.html");
urlsToCache.push("Arrian_Indica_2.html");
urlsToCache.push("Arrian_Indica_3.html");
urlsToCache.push("Arrian_Indica_4.html");
urlsToCache.push("Arrian_Indica_5.html");
urlsToCache.push("Arrian_Indica_6.html");
urlsToCache.push("Arrian_Indica_7.html");
urlsToCache.push("Arrian_Indica_8.html");
urlsToCache.push("Arrian_Indica_9.html");
urlsToCache.push("Arrian_Indica_10.html");
urlsToCache.push("Arrian_Indica_11.html");
urlsToCache.push("Arrian_Indica_12.html");
urlsToCache.push("Arrian_Indica_13.html");
urlsToCache.push("Arrian_Indica_14.html");
urlsToCache.push("Arrian_Indica_15.html");
urlsToCache.push("Arrian_Indica_16.html");
urlsToCache.push("Arrian_Indica_17.html");
urlsToCache.push("Arrian_Indica_18.html");
urlsToCache.push("Arrian_Indica_19.html");
urlsToCache.push("Arrian_Indica_20.html");
urlsToCache.push("Arrian_Indica_21.html");
urlsToCache.push("Arrian_Indica_22.html");
urlsToCache.push("Arrian_Indica_23.html");
urlsToCache.push("Arrian_Indica_24.html");
urlsToCache.push("Arrian_Indica_25.html");
urlsToCache.push("Arrian_Indica_26.html");
urlsToCache.push("Arrian_Indica_27.html");
urlsToCache.push("Arrian_Indica_28.html");
urlsToCache.push("Arrian_Indica_29.html");
urlsToCache.push("Arrian_Indica_30.html");
urlsToCache.push("Arrian_Indica_31.html");
urlsToCache.push("Arrian_Indica_32.html");
urlsToCache.push("Arrian_Indica_33.html");
urlsToCache.push("Arrian_Indica_34.html");
urlsToCache.push("Arrian_Indica_35.html");
urlsToCache.push("Arrian_Indica_36.html");
urlsToCache.push("Arrian_Indica_37.html");
urlsToCache.push("Arrian_Indica_38.html");
urlsToCache.push("Arrian_Indica_39.html");
urlsToCache.push("Arrian_Indica_40.html");
urlsToCache.push("Arrian_Indica_41.html");
urlsToCache.push("Arrian_Indica_42.html");
urlsToCache.push("Arrian_Indica_43.html");
