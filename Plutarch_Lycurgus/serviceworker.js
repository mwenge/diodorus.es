'use strict';

var CACHE_NAME = 'Plutarch_Lycurgus';
var urlsToCache = [
  'Plutarch_Lycurgus.html',
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
urlsToCache.push("Plutarch_Lycurgus.html");
urlsToCache.push("Plutarch_Lycurgus_2.html");
urlsToCache.push("Plutarch_Lycurgus_3.html");
urlsToCache.push("Plutarch_Lycurgus_4.html");
urlsToCache.push("Plutarch_Lycurgus_5.html");
urlsToCache.push("Plutarch_Lycurgus_6.html");
urlsToCache.push("Plutarch_Lycurgus_7.html");
urlsToCache.push("Plutarch_Lycurgus_8.html");
urlsToCache.push("Plutarch_Lycurgus_9.html");
urlsToCache.push("Plutarch_Lycurgus_10.html");
urlsToCache.push("Plutarch_Lycurgus_11.html");
urlsToCache.push("Plutarch_Lycurgus_12.html");
urlsToCache.push("Plutarch_Lycurgus_13.html");
urlsToCache.push("Plutarch_Lycurgus_14.html");
urlsToCache.push("Plutarch_Lycurgus_15.html");
urlsToCache.push("Plutarch_Lycurgus_16.html");
urlsToCache.push("Plutarch_Lycurgus_17.html");
urlsToCache.push("Plutarch_Lycurgus_18.html");
urlsToCache.push("Plutarch_Lycurgus_19.html");
urlsToCache.push("Plutarch_Lycurgus_20.html");
urlsToCache.push("Plutarch_Lycurgus_21.html");
urlsToCache.push("Plutarch_Lycurgus_22.html");
urlsToCache.push("Plutarch_Lycurgus_23.html");
urlsToCache.push("Plutarch_Lycurgus_24.html");
urlsToCache.push("Plutarch_Lycurgus_25.html");
urlsToCache.push("Plutarch_Lycurgus_26.html");
urlsToCache.push("Plutarch_Lycurgus_27.html");
urlsToCache.push("Plutarch_Lycurgus_28.html");
urlsToCache.push("Plutarch_Lycurgus_29.html");
urlsToCache.push("Plutarch_Lycurgus_30.html");
urlsToCache.push("Plutarch_Lycurgus_31.html");
