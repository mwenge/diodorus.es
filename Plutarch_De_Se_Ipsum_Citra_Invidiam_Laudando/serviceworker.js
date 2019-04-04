'use strict';

var CACHE_NAME = 'Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando';
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
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_2.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_3.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_4.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_5.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_6.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_7.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_8.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_9.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_10.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_11.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_12.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_13.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_14.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_15.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_16.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_17.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_18.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_19.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_20.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_21.html");
urlsToCache.push("Plutarch_De_Se_Ipsum_Citra_Invidiam_Laudando_22.html");
