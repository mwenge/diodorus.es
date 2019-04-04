'use strict';

var CACHE_NAME = 'Plato_Laws';
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
urlsToCache.push("Plato_Laws.html");
urlsToCache.push("Plato_Laws_2.html");
urlsToCache.push("Plato_Laws_3.html");
urlsToCache.push("Plato_Laws_4.html");
urlsToCache.push("Plato_Laws_5.html");
urlsToCache.push("Plato_Laws_6.html");
urlsToCache.push("Plato_Laws_7.html");
urlsToCache.push("Plato_Laws_8.html");
urlsToCache.push("Plato_Laws_9.html");
urlsToCache.push("Plato_Laws_10.html");
urlsToCache.push("Plato_Laws_11.html");
urlsToCache.push("Plato_Laws_12.html");
urlsToCache.push("translation.js");
