'use strict';

var CACHE_NAME = 'Aristophanes_Thesmophoriazusae';
var urlsToCache = [
  'Aristophanes_Thesmophoriazusae.html'
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
