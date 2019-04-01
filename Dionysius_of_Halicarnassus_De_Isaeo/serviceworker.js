'use strict';

var CACHE_NAME = 'Dionysius_of_Halicarnassus_De_Isaeo';
var urlsToCache = [
  'Dionysius_of_Halicarnassus_De_Isaeo.html',
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
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_2.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_3.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_4.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_5.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_6.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_7.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_8.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_9.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_10.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_11.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_12.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_13.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_14.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_15.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_16.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_17.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_18.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_19.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Isaeo_20.html");
