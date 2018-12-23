'use strict';

var CACHE_NAME = 'Euripides_Iphigeneia in Aulis';
var urlsToCache = [
  '/',
  'Euripides_Iphigeneia in Aulis.html'
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
