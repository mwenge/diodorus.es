'use strict';

var CACHE_NAME = 'Xenophon_Hellenica';
var urlsToCache = [
  'Xenophon_Hellenica.html',
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
urlsToCache.push("Xenophon_Hellenica.html");
urlsToCache.push("Xenophon_Hellenica_2.html");
urlsToCache.push("Xenophon_Hellenica_3.html");
urlsToCache.push("Xenophon_Hellenica_4.html");
urlsToCache.push("Xenophon_Hellenica_5.html");
urlsToCache.push("Xenophon_Hellenica_6.html");
urlsToCache.push("Xenophon_Hellenica_7.html");
