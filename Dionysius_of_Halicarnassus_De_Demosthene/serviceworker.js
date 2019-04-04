'use strict';

var CACHE_NAME = 'Dionysius_of_Halicarnassus_De_Demosthene';
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
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_2.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_3.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_4.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_5.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_6.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_7.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_8.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_9.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_10.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_11.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_12.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_13.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_14.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_15.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_16.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_17.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_18.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_19.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_21.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_22.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_23.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_24.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_25.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_26.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_27.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_28.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_29.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_30.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_31.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_32.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_33.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_34.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_35.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_36.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_37.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_38.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_39.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_40.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_41.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_42.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_43.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_44.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_45.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_46.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_47.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_48.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_49.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_50.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_51.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_52.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_53.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_54.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_55.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_56.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_57.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Demosthene_58.html");
