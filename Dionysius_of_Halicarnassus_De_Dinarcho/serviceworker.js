'use strict';

var CACHE_NAME = 'Dionysius_of_Halicarnassus_De_Dinarcho';
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
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho_2.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho_3.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho_4.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho_5.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho_6.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho_7.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho_8.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho_9.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho_10.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho_11.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Dinarcho.html");
