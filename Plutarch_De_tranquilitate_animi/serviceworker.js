'use strict';

var CACHE_NAME = 'Plutarch_De_tranquilitate_animi';
var urlsToCache = [
  'Plutarch_De_tranquilitate_animi.html',
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
urlsToCache.push("Plutarch_De_tranquilitate_animi.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_2.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_3.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_4.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_5.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_6.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_7.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_8.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_9.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_10.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_11.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_12.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_13.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_14.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_15.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_16.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_17.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_18.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_19.html");
urlsToCache.push("Plutarch_De_tranquilitate_animi_20.html");
