'use strict';

var CACHE_NAME = 'Aeschylus_Seven Against Thebes';
var urlsToCache = [
  'Aeschylus_Seven Against Thebes.html'
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
