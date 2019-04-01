'use strict';

var CACHE_NAME = 'Plutarch_De_sera_numinis_vindicta';
var urlsToCache = [
  'Plutarch_De_sera_numinis_vindicta.html',
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
urlsToCache.push("Plutarch_De_sera_numinis_vindicta.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_2.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_3.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_4.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_5.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_6.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_7.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_8.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_9.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_10.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_11.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_12.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_13.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_14.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_15.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_16.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_17.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_18.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_19.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_20.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_21.html");
urlsToCache.push("Plutarch_De_sera_numinis_vindicta_22.html");
