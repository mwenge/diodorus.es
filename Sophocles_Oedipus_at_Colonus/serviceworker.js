'use strict';

var CACHE_NAME = 'Sophocles_Oedipus at Colonus';
var urlsToCache = [
  '/',
  'Sophocles_Oedipus at Colonus.html'
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
