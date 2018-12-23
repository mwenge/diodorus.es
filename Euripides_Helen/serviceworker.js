'use strict';

var CACHE_NAME = 'Euripides_Helen';
var urlsToCache = [
  '/',
  'Euripides_Helen.html'
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
