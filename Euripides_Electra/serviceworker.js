'use strict';

var CACHE_NAME = 'Euripides_Electra';
var urlsToCache = [
  '/',
  'Euripides_Electra.html'
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
