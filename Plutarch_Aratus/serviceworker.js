'use strict';

var CACHE_NAME = 'Plutarch_Aratus';
var urlsToCache = [
  'Plutarch_Aratus.html',
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
urlsToCache.push("Plutarch_Aratus.html");
urlsToCache.push("Plutarch_Aratus_2.html");
urlsToCache.push("Plutarch_Aratus_3.html");
urlsToCache.push("Plutarch_Aratus_4.html");
urlsToCache.push("Plutarch_Aratus_5.html");
urlsToCache.push("Plutarch_Aratus_6.html");
urlsToCache.push("Plutarch_Aratus_7.html");
urlsToCache.push("Plutarch_Aratus_8.html");
urlsToCache.push("Plutarch_Aratus_9.html");
urlsToCache.push("Plutarch_Aratus_10.html");
urlsToCache.push("Plutarch_Aratus_11.html");
urlsToCache.push("Plutarch_Aratus_12.html");
urlsToCache.push("Plutarch_Aratus_13.html");
urlsToCache.push("Plutarch_Aratus_14.html");
urlsToCache.push("Plutarch_Aratus_15.html");
urlsToCache.push("Plutarch_Aratus_16.html");
urlsToCache.push("Plutarch_Aratus_17.html");
urlsToCache.push("Plutarch_Aratus_18.html");
urlsToCache.push("Plutarch_Aratus_19.html");
urlsToCache.push("Plutarch_Aratus_20.html");
urlsToCache.push("Plutarch_Aratus_21.html");
urlsToCache.push("Plutarch_Aratus_22.html");
urlsToCache.push("Plutarch_Aratus_23.html");
urlsToCache.push("Plutarch_Aratus_24.html");
urlsToCache.push("Plutarch_Aratus_25.html");
urlsToCache.push("Plutarch_Aratus_26.html");
urlsToCache.push("Plutarch_Aratus_27.html");
urlsToCache.push("Plutarch_Aratus_28.html");
urlsToCache.push("Plutarch_Aratus_29.html");
urlsToCache.push("Plutarch_Aratus_30.html");
urlsToCache.push("Plutarch_Aratus_31.html");
urlsToCache.push("Plutarch_Aratus_32.html");
urlsToCache.push("Plutarch_Aratus_33.html");
urlsToCache.push("Plutarch_Aratus_34.html");
urlsToCache.push("Plutarch_Aratus_35.html");
urlsToCache.push("Plutarch_Aratus_36.html");
urlsToCache.push("Plutarch_Aratus_37.html");
urlsToCache.push("Plutarch_Aratus_38.html");
urlsToCache.push("Plutarch_Aratus_39.html");
urlsToCache.push("Plutarch_Aratus_40.html");
urlsToCache.push("Plutarch_Aratus_41.html");
urlsToCache.push("Plutarch_Aratus_42.html");
urlsToCache.push("Plutarch_Aratus_43.html");
urlsToCache.push("Plutarch_Aratus_44.html");
urlsToCache.push("Plutarch_Aratus_45.html");
urlsToCache.push("Plutarch_Aratus_46.html");
urlsToCache.push("Plutarch_Aratus_47.html");
urlsToCache.push("Plutarch_Aratus_48.html");
urlsToCache.push("Plutarch_Aratus_49.html");
urlsToCache.push("Plutarch_Aratus_50.html");
urlsToCache.push("Plutarch_Aratus_51.html");
urlsToCache.push("Plutarch_Aratus_52.html");
urlsToCache.push("Plutarch_Aratus_53.html");
urlsToCache.push("Plutarch_Aratus_54.html");
