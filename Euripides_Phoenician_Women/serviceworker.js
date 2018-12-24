'use strict';

var CACHE_NAME = 'Euripides_Phoenician Women';
var urlsToCache = [
  'Euripides_Phoenician Women.html'
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
