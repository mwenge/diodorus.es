'use strict';

var CACHE_NAME = 'Theophrastus_Characters';
var urlsToCache = [
  'Theophrastus_Characters.html',
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
urlsToCache.push("Theophrastus_Characters_0.html");
urlsToCache.push("Theophrastus_Characters.html");
urlsToCache.push("Theophrastus_Characters_2.html");
urlsToCache.push("Theophrastus_Characters_3.html");
urlsToCache.push("Theophrastus_Characters_4.html");
urlsToCache.push("Theophrastus_Characters_5.html");
urlsToCache.push("Theophrastus_Characters_6.html");
urlsToCache.push("Theophrastus_Characters_7.html");
urlsToCache.push("Theophrastus_Characters_8.html");
urlsToCache.push("Theophrastus_Characters_9.html");
urlsToCache.push("Theophrastus_Characters_10.html");
urlsToCache.push("Theophrastus_Characters_11.html");
urlsToCache.push("Theophrastus_Characters_12.html");
urlsToCache.push("Theophrastus_Characters_13.html");
urlsToCache.push("Theophrastus_Characters_14.html");
urlsToCache.push("Theophrastus_Characters_15.html");
urlsToCache.push("Theophrastus_Characters_16.html");
urlsToCache.push("Theophrastus_Characters_17.html");
urlsToCache.push("Theophrastus_Characters_18.html");
urlsToCache.push("Theophrastus_Characters_19.html");
urlsToCache.push("Theophrastus_Characters_20.html");
urlsToCache.push("Theophrastus_Characters_21.html");
urlsToCache.push("Theophrastus_Characters_22.html");
urlsToCache.push("Theophrastus_Characters_23.html");
urlsToCache.push("Theophrastus_Characters_24.html");
urlsToCache.push("Theophrastus_Characters_25.html");
urlsToCache.push("Theophrastus_Characters_26.html");
urlsToCache.push("Theophrastus_Characters_27.html");
urlsToCache.push("Theophrastus_Characters_28.html");
urlsToCache.push("Theophrastus_Characters_29.html");
urlsToCache.push("Theophrastus_Characters_30.html");
