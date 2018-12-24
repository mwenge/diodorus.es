'use strict';

var CACHE_NAME = 'Sophocles_Trachiniae';
var urlsToCache = [
  'Sophocles_Trachiniae.html'
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
