'use strict';

var CACHE_NAME = 'Aristophanes_Ecclesiazusae';
var urlsToCache = [
  '/',
  'Aristophanes_Ecclesiazusae.html'
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
