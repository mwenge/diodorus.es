'use strict';

var CACHE_NAME = 'Plutarch_De_E_apud_Delphos';
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
urlsToCache.push("Plutarch_De_E_apud_Delphos.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_2.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_3.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_4.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_5.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_6.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_7.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_8.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_9.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_10.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_11.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_12.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_13.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_14.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_15.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_16.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_17.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_18.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_19.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_20.html");
urlsToCache.push("Plutarch_De_E_apud_Delphos_21.html");
