'use strict';

var CACHE_NAME = 'Plutarch_De_cupiditate_divitiarum';
var urlsToCache = [
  'Plutarch_De_cupiditate_divitiarum.html',
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
urlsToCache.push("Plutarch_De_cupiditate_divitiarum.html");
urlsToCache.push("Plutarch_De_cupiditate_divitiarum_2.html");
urlsToCache.push("Plutarch_De_cupiditate_divitiarum_3.html");
urlsToCache.push("Plutarch_De_cupiditate_divitiarum_4.html");
urlsToCache.push("Plutarch_De_cupiditate_divitiarum_5.html");
urlsToCache.push("Plutarch_De_cupiditate_divitiarum_6.html");
urlsToCache.push("Plutarch_De_cupiditate_divitiarum_7.html");
urlsToCache.push("Plutarch_De_cupiditate_divitiarum_8.html");
urlsToCache.push("Plutarch_De_cupiditate_divitiarum_9.html");
urlsToCache.push("Plutarch_De_cupiditate_divitiarum_10.html");
