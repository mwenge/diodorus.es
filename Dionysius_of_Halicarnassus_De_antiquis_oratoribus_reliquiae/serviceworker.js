'use strict';

var CACHE_NAME = 'Dionysius_of_Halicarnassus_De_antiquis_oratoribus_reliquiae';
var urlsToCache = [
  'Dionysius_of_Halicarnassus_De_antiquis_oratoribus_reliquiae.html',
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
urlsToCache.push("Dionysius_of_Halicarnassus_De_antiquis_oratoribus_reliquiae.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_antiquis_oratoribus_reliquiae_2.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_antiquis_oratoribus_reliquiae_3.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_antiquis_oratoribus_reliquiae_4.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_antiquis_oratoribus_reliquiae_5.html");
