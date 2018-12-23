'use strict';

var CACHE_NAME = 'Euripides_Hecuba';
var urlsToCache = [
  '/',
  'Euripides_Hecuba.html'
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
