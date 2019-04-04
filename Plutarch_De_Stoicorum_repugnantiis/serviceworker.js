'use strict';

var CACHE_NAME = 'Plutarch_De_Stoicorum_repugnantiis';
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
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_2.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_3.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_4.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_5.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_6.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_7.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_8.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_9.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_10.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_11.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_12.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_13.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_14.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_15.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_16.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_17.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_18.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_19.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_20.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_21.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_22.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_23.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_24.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_25.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_26.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_27.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_28.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_29.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_30.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_31.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_32.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_33.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_34.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_35.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_36.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_37.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_38.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_39.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_40.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_41.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_42.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_43.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_44.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_45.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_46.html");
urlsToCache.push("Plutarch_De_Stoicorum_repugnantiis_47.html");
