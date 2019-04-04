'use strict';

var CACHE_NAME = 'Plutarch_De_liberis_educandis';
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
urlsToCache.push("Plutarch_De_liberis_educandis.html");
urlsToCache.push("Plutarch_De_liberis_educandis_2.html");
urlsToCache.push("Plutarch_De_liberis_educandis_3.html");
urlsToCache.push("Plutarch_De_liberis_educandis_4.html");
urlsToCache.push("Plutarch_De_liberis_educandis_5.html");
urlsToCache.push("Plutarch_De_liberis_educandis_6.html");
urlsToCache.push("Plutarch_De_liberis_educandis_7.html");
urlsToCache.push("Plutarch_De_liberis_educandis_8.html");
urlsToCache.push("Plutarch_De_liberis_educandis_9.html");
urlsToCache.push("Plutarch_De_liberis_educandis_10.html");
urlsToCache.push("Plutarch_De_liberis_educandis_11.html");
urlsToCache.push("Plutarch_De_liberis_educandis_12.html");
urlsToCache.push("Plutarch_De_liberis_educandis_13.html");
urlsToCache.push("Plutarch_De_liberis_educandis_14.html");
urlsToCache.push("Plutarch_De_liberis_educandis_15.html");
urlsToCache.push("Plutarch_De_liberis_educandis_16.html");
urlsToCache.push("Plutarch_De_liberis_educandis_17.html");
urlsToCache.push("Plutarch_De_liberis_educandis_18.html");
urlsToCache.push("Plutarch_De_liberis_educandis_19.html");
urlsToCache.push("Plutarch_De_liberis_educandis_20.html");
