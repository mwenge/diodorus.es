'use strict';

var CACHE_NAME = 'Aristophanes_Wasps';
var urlsToCache = [
  '/',
  'Aristophanes_Wasps.html'
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
