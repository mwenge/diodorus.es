'use strict';

var CACHE_NAME = 'Dionysius_of_Halicarnassus_De_Thucydide';
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
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_2.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_3.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_4.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_5.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_6.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_7.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_8.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_9.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_10.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_11.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_12.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_13.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_14.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_15.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_16.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_17.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_18.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_19.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_20.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_21.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_22.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_23.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_24.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_25.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_26.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_27.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_28.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_29.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_30.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_31.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_32.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_33.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_34.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_35.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_36.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_37.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_38.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_39.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_40.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_41.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_42.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_43.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_44.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_45.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_46.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_47.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_48.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_49.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_50.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_51.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_52.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_53.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_54.html");
urlsToCache.push("Dionysius_of_Halicarnassus_De_Thucydide_55.html");
