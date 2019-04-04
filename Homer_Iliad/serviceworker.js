'use strict';

var CACHE_NAME = 'Homer_Iliad';
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
urlsToCache.push("Homer_Iliad_1.html");
urlsToCache.push("commentary1.js");
urlsToCache.push("Homer_Iliad_2.html");
urlsToCache.push("commentary2.js");
urlsToCache.push("Homer_Iliad_3.html");
urlsToCache.push("commentary3.js");
urlsToCache.push("Homer_Iliad_4.html");
urlsToCache.push("commentary4.js");
urlsToCache.push("Homer_Iliad_5.html");
urlsToCache.push("commentary5.js");
urlsToCache.push("Homer_Iliad_6.html");
urlsToCache.push("commentary6.js");
urlsToCache.push("Homer_Iliad_7.html");
urlsToCache.push("commentary7.js");
urlsToCache.push("Homer_Iliad_8.html");
urlsToCache.push("commentary8.js");
urlsToCache.push("Homer_Iliad_9.html");
urlsToCache.push("commentary9.js");
urlsToCache.push("Homer_Iliad_10.html");
urlsToCache.push("commentary10.js");
urlsToCache.push("Homer_Iliad_11.html");
urlsToCache.push("commentary11.js");
urlsToCache.push("Homer_Iliad_12.html");
urlsToCache.push("commentary12.js");
urlsToCache.push("Homer_Iliad_13.html");
urlsToCache.push("commentary13.js");
urlsToCache.push("Homer_Iliad_14.html");
urlsToCache.push("commentary14.js");
urlsToCache.push("Homer_Iliad_15.html");
urlsToCache.push("commentary15.js");
urlsToCache.push("Homer_Iliad_16.html");
urlsToCache.push("commentary16.js");
urlsToCache.push("Homer_Iliad_17.html");
urlsToCache.push("commentary17.js");
urlsToCache.push("Homer_Iliad_18.html");
urlsToCache.push("commentary18.js");
urlsToCache.push("Homer_Iliad_19.html");
urlsToCache.push("commentary19.js");
urlsToCache.push("Homer_Iliad_20.html");
urlsToCache.push("commentary20.js");
urlsToCache.push("Homer_Iliad_21.html");
urlsToCache.push("commentary21.js");
urlsToCache.push("Homer_Iliad_22.html");
urlsToCache.push("commentary22.js");
urlsToCache.push("Homer_Iliad_23.html");
urlsToCache.push("commentary23.js");
urlsToCache.push("Homer_Iliad_24.html");
urlsToCache.push("commentary24.js");
