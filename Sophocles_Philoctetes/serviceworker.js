'use strict';

var CACHE_NAME = 'Sophocles_Philoctetes';
var urlsToCache = [
  '/',
  'Sophocles_Philoctetes.html'
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
