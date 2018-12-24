'use strict';

var CACHE_NAME = 'Euripides_Iphigeneia in Taurus';
var urlsToCache = [
  'Euripides_Iphigeneia in Taurus.html'
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
