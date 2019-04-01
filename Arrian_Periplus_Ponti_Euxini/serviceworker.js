'use strict';

var CACHE_NAME = 'Arrian_Periplus_Ponti_Euxini';
var urlsToCache = [
  'Arrian_Periplus_Ponti_Euxini.html',
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
urlsToCache.push("Arrian_Periplus_Ponti_Euxini.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_2.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_3.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_4.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_5.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_6.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_7.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_8.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_9.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_10.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_11.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_12.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_13.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_14.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_15.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_16.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_17.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_18.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_19.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_20.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_21.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_22.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_23.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_24.html");
urlsToCache.push("Arrian_Periplus_Ponti_Euxini_25.html");
