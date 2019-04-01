'use strict';

var CACHE_NAME = 'Oppian_Cynegetica';
var urlsToCache = [
  'Oppian_Cynegetica.html',
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

for (var i = 2; i <= 1; i++) {
  urlsToCache.push("Oppian_Cynegetica_" + i + ".html");
}

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
urlsToCache.push("Oppian_Cynegetica_1.html");
urlsToCache.push("commentary1.js");
urlsToCache.push("Oppian_Cynegetica_2.html");
urlsToCache.push("commentary2.js");
urlsToCache.push("Oppian_Cynegetica_3.html");
urlsToCache.push("commentary3.js");
urlsToCache.push("Oppian_Cynegetica_4.html");
urlsToCache.push("commentary4.js");
