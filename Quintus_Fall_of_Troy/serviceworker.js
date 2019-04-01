'use strict';

var CACHE_NAME = 'Quintus_Fall_of_Troy';
var urlsToCache = [
  'Quintus_Fall_of_Troy.html',
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
  urlsToCache.push("Quintus_Fall_of_Troy_" + i + ".html");
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
urlsToCache.push("Quintus_Fall_of_Troy_1.html");
urlsToCache.push("commentary1.js");
urlsToCache.push("Quintus_Fall_of_Troy_2.html");
urlsToCache.push("commentary2.js");
urlsToCache.push("Quintus_Fall_of_Troy_3.html");
urlsToCache.push("commentary3.js");
urlsToCache.push("Quintus_Fall_of_Troy_4.html");
urlsToCache.push("commentary4.js");
urlsToCache.push("Quintus_Fall_of_Troy_5.html");
urlsToCache.push("commentary5.js");
urlsToCache.push("Quintus_Fall_of_Troy_6.html");
urlsToCache.push("commentary6.js");
urlsToCache.push("Quintus_Fall_of_Troy_7.html");
urlsToCache.push("commentary7.js");
urlsToCache.push("Quintus_Fall_of_Troy_8.html");
urlsToCache.push("commentary8.js");
urlsToCache.push("Quintus_Fall_of_Troy_9.html");
urlsToCache.push("commentary9.js");
urlsToCache.push("Quintus_Fall_of_Troy_10.html");
urlsToCache.push("commentary10.js");
urlsToCache.push("Quintus_Fall_of_Troy_11.html");
urlsToCache.push("commentary11.js");
urlsToCache.push("Quintus_Fall_of_Troy_12.html");
urlsToCache.push("commentary12.js");
urlsToCache.push("Quintus_Fall_of_Troy_13.html");
urlsToCache.push("commentary13.js");
urlsToCache.push("Quintus_Fall_of_Troy_14.html");
urlsToCache.push("commentary14.js");
