'use strict';

var CACHE_NAME = 'Plutarch_Artaxerxes';
var urlsToCache = [
  'Plutarch_Artaxerxes.html',
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
urlsToCache.push("Plutarch_Artaxerxes.html");
urlsToCache.push("Plutarch_Artaxerxes_2.html");
urlsToCache.push("Plutarch_Artaxerxes_3.html");
urlsToCache.push("Plutarch_Artaxerxes_4.html");
urlsToCache.push("Plutarch_Artaxerxes_5.html");
urlsToCache.push("Plutarch_Artaxerxes_6.html");
urlsToCache.push("Plutarch_Artaxerxes_7.html");
urlsToCache.push("Plutarch_Artaxerxes_8.html");
urlsToCache.push("Plutarch_Artaxerxes_9.html");
urlsToCache.push("Plutarch_Artaxerxes_10.html");
urlsToCache.push("Plutarch_Artaxerxes_11.html");
urlsToCache.push("Plutarch_Artaxerxes_12.html");
urlsToCache.push("Plutarch_Artaxerxes_13.html");
urlsToCache.push("Plutarch_Artaxerxes_14.html");
urlsToCache.push("Plutarch_Artaxerxes_15.html");
urlsToCache.push("Plutarch_Artaxerxes_16.html");
urlsToCache.push("Plutarch_Artaxerxes_17.html");
urlsToCache.push("Plutarch_Artaxerxes_18.html");
urlsToCache.push("Plutarch_Artaxerxes_19.html");
urlsToCache.push("Plutarch_Artaxerxes_20.html");
urlsToCache.push("Plutarch_Artaxerxes_21.html");
urlsToCache.push("Plutarch_Artaxerxes_22.html");
urlsToCache.push("Plutarch_Artaxerxes_23.html");
urlsToCache.push("Plutarch_Artaxerxes_24.html");
urlsToCache.push("Plutarch_Artaxerxes_25.html");
urlsToCache.push("Plutarch_Artaxerxes_26.html");
urlsToCache.push("Plutarch_Artaxerxes_27.html");
urlsToCache.push("Plutarch_Artaxerxes_28.html");
urlsToCache.push("Plutarch_Artaxerxes_29.html");
urlsToCache.push("Plutarch_Artaxerxes_30.html");
