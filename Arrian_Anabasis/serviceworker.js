'use strict';

var CACHE_NAME = 'Arrian_Anabasis';
var urlsToCache = [
  'Arrian_Anabasis.html',
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
urlsToCache.push("Arrian_Anabasis.html");
urlsToCache.push("Arrian_Anabasis_2.html");
urlsToCache.push("Arrian_Anabasis_3.html");
urlsToCache.push("Arrian_Anabasis_4.html");
urlsToCache.push("Arrian_Anabasis_5.html");
urlsToCache.push("Arrian_Anabasis_6.html");
urlsToCache.push("Arrian_Anabasis_7.html");
