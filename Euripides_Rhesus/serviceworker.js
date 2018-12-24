'use strict';

var CACHE_NAME = 'Euripides_Rhesus';
var urlsToCache = [
  'Euripides_Rhesus.html'
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
