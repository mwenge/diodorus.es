'use strict';

var CACHE_NAME = 'Plutarch_Caius_Marcius_Coriolanus';
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
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_2.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_3.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_4.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_5.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_6.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_7.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_8.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_9.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_10.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_11.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_12.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_13.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_14.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_15.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_16.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_17.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_18.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_19.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_20.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_21.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_22.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_23.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_24.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_25.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_26.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_27.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_28.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_29.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_30.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_31.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_32.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_33.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_34.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_35.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_36.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_37.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_38.html");
urlsToCache.push("Plutarch_Caius_Marcius_Coriolanus_39.html");
urlsToCache.push("translation.js");
