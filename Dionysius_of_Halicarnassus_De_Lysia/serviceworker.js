'use strict';

var CACHE_NAME = 'Dionysius_of_Halicarnassus_De_Lysia';
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
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_2.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_3.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_4.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_5.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_6.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_7.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_8.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_9.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_10.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_11.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_12.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_13.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_15.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_15.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_16.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_17.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_18.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_19.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_20.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_21.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_22.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_23.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_24.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_25.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_26.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_27.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_28.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_29.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_30.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_31.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_32.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_33.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Lysia_34.html");
