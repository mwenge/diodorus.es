'use strict';

var CACHE_NAME = 'Aristophanes_Acharnians';
var urlsToCache = [
  'Aristophanes_Acharnians.html'
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
