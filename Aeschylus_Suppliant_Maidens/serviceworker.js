'use strict';

var CACHE_NAME = 'Aeschylus_Suppliant Maidens';
var urlsToCache = [
  'Aeschylus_Suppliant Maidens.html'
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
