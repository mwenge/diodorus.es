'use strict';

var CACHE_NAME = 'Arrian_Tactica';
var urlsToCache = [
  'Arrian_Tactica.html',
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
urlsToCache.push("Arrian_Tactica.html");
urlsToCache.push("Arrian_Tactica_2.html");
urlsToCache.push("Arrian_Tactica_3.html");
urlsToCache.push("Arrian_Tactica_4.html");
urlsToCache.push("Arrian_Tactica_5.html");
urlsToCache.push("Arrian_Tactica_6.html");
urlsToCache.push("Arrian_Tactica_7.html");
urlsToCache.push("Arrian_Tactica_8.html");
urlsToCache.push("Arrian_Tactica_9.html");
urlsToCache.push("Arrian_Tactica_10.html");
urlsToCache.push("Arrian_Tactica_11.html");
urlsToCache.push("Arrian_Tactica_12.html");
urlsToCache.push("Arrian_Tactica_13.html");
urlsToCache.push("Arrian_Tactica_14.html");
urlsToCache.push("Arrian_Tactica_15.html");
urlsToCache.push("Arrian_Tactica_16.html");
urlsToCache.push("Arrian_Tactica_17.html");
urlsToCache.push("Arrian_Tactica_18.html");
urlsToCache.push("Arrian_Tactica_19.html");
urlsToCache.push("Arrian_Tactica_20.html");
urlsToCache.push("Arrian_Tactica_21.html");
urlsToCache.push("Arrian_Tactica_22.html");
urlsToCache.push("Arrian_Tactica_23.html");
urlsToCache.push("Arrian_Tactica_24.html");
urlsToCache.push("Arrian_Tactica_25.html");
urlsToCache.push("Arrian_Tactica_26.html");
urlsToCache.push("Arrian_Tactica_27.html");
urlsToCache.push("Arrian_Tactica_28.html");
urlsToCache.push("Arrian_Tactica_29.html");
urlsToCache.push("Arrian_Tactica_30.html");
urlsToCache.push("Arrian_Tactica_31.html");
urlsToCache.push("Arrian_Tactica_32.html");
urlsToCache.push("Arrian_Tactica_33.html");
urlsToCache.push("Arrian_Tactica_34.html");
urlsToCache.push("Arrian_Tactica_35.html");
urlsToCache.push("Arrian_Tactica_36.html");
urlsToCache.push("Arrian_Tactica_37.html");
urlsToCache.push("Arrian_Tactica_38.html");
urlsToCache.push("Arrian_Tactica_39.html");
urlsToCache.push("Arrian_Tactica_40.html");
urlsToCache.push("Arrian_Tactica_41.html");
urlsToCache.push("Arrian_Tactica_42.html");
urlsToCache.push("Arrian_Tactica_43.html");
urlsToCache.push("Arrian_Tactica_44.html");
