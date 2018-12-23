'use strict';

var CACHE_NAME = 'Aeschylus_Agamemnon';
var urlsToCache = [
  '/',
  'Aeschylus_Agamemnon.html'
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
