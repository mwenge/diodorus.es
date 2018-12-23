'use strict';

var CACHE_NAME = 'Aristophanes_Frogs';
var urlsToCache = [
  '/',
  'Aristophanes_Frogs.html'
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
