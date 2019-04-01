'use strict';

var CACHE_NAME = 'Pindar_Odes';
var urlsToCache = [
  'Pindar_Odes.html',
  'translation.js',
  '../book.css',
  '../book.js',
  '../atobAndBtoaTogether.min.js',
  '../GFSDidot.css',
  '../GFSDidot.ttf',
  '../OpenSans.css',
  '../OpenSans.ttf',
  '../Cinzel.css',
  '../Cinzel.ttf',
  '../CormorantGaramond.css',
  '../CormorantGaramond.ttf',
];

for (var i = 2; i <= 1; i++) {
  urlsToCache.push("Pindar_Odes_" + i + ".html");
}

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

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
urlsToCache.push("Pindar_Odes_O..html");
urlsToCache.push("commentaryO..js");
urlsToCache.push("Pindar_Odes_P..html");
urlsToCache.push("commentaryP..js");
urlsToCache.push("Pindar_Odes_N..html");
urlsToCache.push("commentaryN..js");
urlsToCache.push("Pindar_Odes_I..html");
urlsToCache.push("commentaryI..js");
