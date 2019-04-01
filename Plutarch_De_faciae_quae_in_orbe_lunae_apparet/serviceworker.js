'use strict';

var CACHE_NAME = 'Plutarch_De_faciae_quae_in_orbe_lunae_apparet';
var urlsToCache = [
  'Plutarch_De_faciae_quae_in_orbe_lunae_apparet.html',
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
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_2.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_3.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_4.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_5.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_6.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_7.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_8.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_9.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_10.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_11.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_12.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_13.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_14.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_15.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_16.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_17.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_18.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_19.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_20.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_21.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_22.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_23.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_24.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_25.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_26.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_27.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_28.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_29.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_30.html");
urlsToCache.push("Plutarch_De_faciae_quae_in_orbe_lunae_apparet_15.html");
