'use strict';

var CACHE_NAME = 'Seneca_the_Elder_Excerpta_Controversiae';
var urlsToCache = [
  'Seneca_the_Elder_Excerpta_Controversiae.html',
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

for (var i = 2; i <= 10; i++) {
  urlsToCache.push("Seneca_the_Elder_Excerpta_Controversiae_" + i + ".html");
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