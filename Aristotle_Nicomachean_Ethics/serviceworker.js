'use strict';

var CACHE_NAME = 'Aristotle_Nicomachean_Ethics';
var urlsToCache = [
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
urlsToCache.push("Aristotle_Nicomachean_Ethics.html");
urlsToCache.push("Aristotle_Nicomachean_Ethics_2.html");
urlsToCache.push("Aristotle_Nicomachean_Ethics_3.html");
urlsToCache.push("Aristotle_Nicomachean_Ethics_4.html");
urlsToCache.push("Aristotle_Nicomachean_Ethics_5.html");
urlsToCache.push("Aristotle_Nicomachean_Ethics_6.html");
urlsToCache.push("Aristotle_Nicomachean_Ethics_7.html");
urlsToCache.push("Aristotle_Nicomachean_Ethics_8.html");
urlsToCache.push("Aristotle_Nicomachean_Ethics_9.html");
urlsToCache.push("Aristotle_Nicomachean_Ethics_10.html");
