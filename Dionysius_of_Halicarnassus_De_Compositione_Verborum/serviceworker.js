'use strict';

var CACHE_NAME = 'Dionysius_of_Halicarnassus_De_Compositione_Verborum';
var urlsToCache = [
  'Dionysius_of_Halicarnassus_De_Compositione_Verborum.html',
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
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_2.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_3.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_4.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_5.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_6.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_7.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_8.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_9.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_10.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_11.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_12.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_13.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_14.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_15.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_16.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_17.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_18.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_19.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_20.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_21.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_22.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_23.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_24.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_25.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Compositione_Verborum_26.html");
