'use strict';

var CACHE_NAME = 'Aeschylus_Libation Bearers';
var urlsToCache = [
  'Aeschylus_Libation Bearers.html'
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
