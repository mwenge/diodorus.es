'use strict';

var CACHE_NAME = 'Plutarch_De_unius_in_republica_dominatione';
var urlsToCache = [
  'Plutarch_De_unius_in_republica_dominatione.html',
  'book.css',
  'book.js',
  'atobAndBtoaTogether.min.js',
  'GFSDidot.css',
  'GFSDidot.ttf',
  'OpenSans.css',
  'OpenSans.ttf',
  'Cinzel.css',
  'Cinzel.ttf',
  'CormorantGaramond.css',
  'CormorantGaramond.ttf',
];

for (var i = 2; i <= ; i++) {
  urlsToCache.push("Plutarch_De_unius_in_republica_dominatione_" + i + ".html");
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