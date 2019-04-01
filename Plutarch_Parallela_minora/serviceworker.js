'use strict';

var CACHE_NAME = 'Plutarch_Parallela_minora';
var urlsToCache = [
  'Plutarch_Parallela_minora.html',
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
urlsToCache.push("Plutarch_Parallela_minora_0.html");
urlsToCache.push("Plutarch_Parallela_minora.html");
urlsToCache.push("Plutarch_Parallela_minora_2.html");
urlsToCache.push("Plutarch_Parallela_minora_3.html");
urlsToCache.push("Plutarch_Parallela_minora_4.html");
urlsToCache.push("Plutarch_Parallela_minora_5.html");
urlsToCache.push("Plutarch_Parallela_minora_6.html");
urlsToCache.push("Plutarch_Parallela_minora_7.html");
urlsToCache.push("Plutarch_Parallela_minora_8.html");
urlsToCache.push("Plutarch_Parallela_minora_9.html");
urlsToCache.push("Plutarch_Parallela_minora_10.html");
urlsToCache.push("Plutarch_Parallela_minora_11.html");
urlsToCache.push("Plutarch_Parallela_minora_12.html");
urlsToCache.push("Plutarch_Parallela_minora_13.html");
urlsToCache.push("Plutarch_Parallela_minora_14.html");
urlsToCache.push("Plutarch_Parallela_minora_15.html");
urlsToCache.push("Plutarch_Parallela_minora_16.html");
urlsToCache.push("Plutarch_Parallela_minora_17.html");
urlsToCache.push("Plutarch_Parallela_minora_18.html");
urlsToCache.push("Plutarch_Parallela_minora_19.html");
urlsToCache.push("Plutarch_Parallela_minora_20.html");
urlsToCache.push("Plutarch_Parallela_minora_21.html");
urlsToCache.push("Plutarch_Parallela_minora_22.html");
urlsToCache.push("Plutarch_Parallela_minora_23.html");
urlsToCache.push("Plutarch_Parallela_minora_24.html");
urlsToCache.push("Plutarch_Parallela_minora_25.html");
urlsToCache.push("Plutarch_Parallela_minora_26.html");
urlsToCache.push("Plutarch_Parallela_minora_27.html");
urlsToCache.push("Plutarch_Parallela_minora_28.html");
urlsToCache.push("Plutarch_Parallela_minora_29.html");
urlsToCache.push("Plutarch_Parallela_minora_30.html");
urlsToCache.push("Plutarch_Parallela_minora_31.html");
urlsToCache.push("Plutarch_Parallela_minora_32.html");
urlsToCache.push("Plutarch_Parallela_minora_33.html");
urlsToCache.push("Plutarch_Parallela_minora_34.html");
urlsToCache.push("Plutarch_Parallela_minora_35.html");
urlsToCache.push("Plutarch_Parallela_minora_36.html");
urlsToCache.push("Plutarch_Parallela_minora_37.html");
urlsToCache.push("Plutarch_Parallela_minora_38.html");
urlsToCache.push("Plutarch_Parallela_minora_39.html");
urlsToCache.push("Plutarch_Parallela_minora_40.html");
urlsToCache.push("Plutarch_Parallela_minora_41.html");
