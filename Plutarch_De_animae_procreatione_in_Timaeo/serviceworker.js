'use strict';

var CACHE_NAME = 'Plutarch_De_animae_procreatione_in_Timaeo';
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
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_2.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_3.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_4.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_5.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_6.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_7.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_8.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_9.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_10.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_21.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_22.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_23.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_24.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_25.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_26.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_27.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_28.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_29.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_30.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_11.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_12.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_13.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_14.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_15.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_16.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_17.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_18.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_19.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_20.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_31.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_32.html");
urlsToCache.push("Plutarch_De_animae_procreatione_in_Timaeo_33.html");
