'use strict';

var CACHE_NAME = 'Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus';
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
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_2.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_3.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_4.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_5.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_6.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_7.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_8.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_9.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_10.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_11.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_12.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_13.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_14.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_15.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_16.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydidis_idiomatibus_17.html");
