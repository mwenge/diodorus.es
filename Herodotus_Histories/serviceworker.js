'use strict';

var CACHE_NAME = 'Herodotus_Histories';
var urlsToCache = [
  'Herodotus_Histories.html',
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
urlsToCache.push("Herodotus_Histories.html");
urlsToCache.push("Herodotus_Histories_2.html");
urlsToCache.push("Herodotus_Histories_3.html");
urlsToCache.push("Herodotus_Histories_4.html");
urlsToCache.push("Herodotus_Histories_5.html");
urlsToCache.push("Herodotus_Histories_6.html");
urlsToCache.push("Herodotus_Histories_7.html");
urlsToCache.push("Herodotus_Histories_8.html");
urlsToCache.push("Herodotus_Histories_9.html");
