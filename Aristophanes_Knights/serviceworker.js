'use strict';

var CACHE_NAME = 'Aristophanes_Knights';
var urlsToCache = [
  'Aristophanes_Knights.html'
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
