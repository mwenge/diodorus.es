'use strict';

var CACHE_NAME = 'Aelius Aristides_Orationes 25';
var urlsToCache = [
  'Aelius Aristides_Orationes 25.html',
  'book.css',
  'book.js',
  'atobAndBtoaTogether.min.js',
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
