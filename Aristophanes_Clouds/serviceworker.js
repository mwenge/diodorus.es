'use strict';

var CACHE_NAME = 'Aristophanes_Clouds';
var urlsToCache = [
  'Aristophanes_Clouds.html'
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
