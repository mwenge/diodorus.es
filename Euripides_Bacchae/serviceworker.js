'use strict';

var CACHE_NAME = 'Euripides_Bacchae';
var urlsToCache = [
  'Euripides_Bacchae.html'
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
