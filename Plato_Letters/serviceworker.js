'use strict';

var CACHE_NAME = 'Plato_Letters';
var urlsToCache = [
  'Plato_Letters.html',
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
urlsToCache.push("Plato_Letters.html");
urlsToCache.push("Plato_Letters_2.html");
urlsToCache.push("Plato_Letters_3.html");
urlsToCache.push("Plato_Letters_4.html");
urlsToCache.push("Plato_Letters_5.html");
urlsToCache.push("Plato_Letters_6.html");
urlsToCache.push("Plato_Letters_7.html");
urlsToCache.push("Plato_Letters_8.html");
urlsToCache.push("Plato_Letters_9.html");
urlsToCache.push("Plato_Letters_10.html");
urlsToCache.push("Plato_Letters_11.html");
urlsToCache.push("Plato_Letters_12.html");
urlsToCache.push("Plato_Letters_13.html");
