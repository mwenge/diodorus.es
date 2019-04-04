'use strict';

var CACHE_NAME = 'Dionysius_of_Halicarnassus_De_Isocrate';
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
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_2.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_3.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_4.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_5.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_6.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_7.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_8.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_9.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_10.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_11.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_12.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_13.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_14.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_15.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_16.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_17.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_18.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_19.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isocrate_20.html");
