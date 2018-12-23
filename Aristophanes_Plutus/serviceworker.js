'use strict';

var CACHE_NAME = 'Aristophanes_Plutus';
var urlsToCache = [
  '/',
  'Aristophanes_Plutus.html'
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
