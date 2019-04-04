'use strict';

var CACHE_NAME = 'Callimachus_Epigrams';
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
urlsToCache.push("Callimachus_Epigrams_1.html");
urlsToCache.push("Callimachus_Epigrams_2.html");
urlsToCache.push("Callimachus_Epigrams_4.html");
urlsToCache.push("Callimachus_Epigrams_5.html");
urlsToCache.push("Callimachus_Epigrams_6.html");
urlsToCache.push("Callimachus_Epigrams_7.html");
urlsToCache.push("Callimachus_Epigrams_8.html");
urlsToCache.push("Callimachus_Epigrams_9.html");
urlsToCache.push("Callimachus_Epigrams_10.html");
urlsToCache.push("Callimachus_Epigrams_11.html");
urlsToCache.push("Callimachus_Epigrams_12.html");
urlsToCache.push("Callimachus_Epigrams_13.html");
urlsToCache.push("Callimachus_Epigrams_14.html");
urlsToCache.push("Callimachus_Epigrams_15.html");
urlsToCache.push("Callimachus_Epigrams_16.html");
urlsToCache.push("Callimachus_Epigrams_17.html");
urlsToCache.push("Callimachus_Epigrams_18.html");
urlsToCache.push("Callimachus_Epigrams_19.html");
urlsToCache.push("Callimachus_Epigrams_20.html");
urlsToCache.push("Callimachus_Epigrams_21.html");
urlsToCache.push("Callimachus_Epigrams_22.html");
urlsToCache.push("Callimachus_Epigrams_23.html");
urlsToCache.push("Callimachus_Epigrams_24.html");
urlsToCache.push("Callimachus_Epigrams_25.html");
urlsToCache.push("Callimachus_Epigrams_26.html");
urlsToCache.push("Callimachus_Epigrams_27.html");
urlsToCache.push("Callimachus_Epigrams_28.html");
urlsToCache.push("Callimachus_Epigrams_29.html");
urlsToCache.push("Callimachus_Epigrams_30.html");
urlsToCache.push("Callimachus_Epigrams_31.html");
urlsToCache.push("Callimachus_Epigrams_32.html");
urlsToCache.push("Callimachus_Epigrams_33.html");
urlsToCache.push("Callimachus_Epigrams_34.html");
urlsToCache.push("Callimachus_Epigrams_35.html");
urlsToCache.push("Callimachus_Epigrams_37.html");
urlsToCache.push("Callimachus_Epigrams_38.html");
urlsToCache.push("Callimachus_Epigrams_39.html");
urlsToCache.push("Callimachus_Epigrams_40.html");
urlsToCache.push("Callimachus_Epigrams_41.html");
urlsToCache.push("Callimachus_Epigrams_42.html");
urlsToCache.push("Callimachus_Epigrams_43.html");
urlsToCache.push("Callimachus_Epigrams_44.html");
urlsToCache.push("Callimachus_Epigrams_45.html");
urlsToCache.push("Callimachus_Epigrams_46.html");
urlsToCache.push("Callimachus_Epigrams_47.html");
urlsToCache.push("Callimachus_Epigrams_48.html");
urlsToCache.push("Callimachus_Epigrams_49.html");
urlsToCache.push("Callimachus_Epigrams_50.html");
urlsToCache.push("Callimachus_Epigrams_51.html");
urlsToCache.push("Callimachus_Epigrams_52.html");
urlsToCache.push("Callimachus_Epigrams_53.html");
urlsToCache.push("Callimachus_Epigrams_54.html");
urlsToCache.push("Callimachus_Epigrams_55.html");
urlsToCache.push("Callimachus_Epigrams_56.html");
urlsToCache.push("Callimachus_Epigrams_57.html");
urlsToCache.push("Callimachus_Epigrams_58.html");
urlsToCache.push("Callimachus_Epigrams_59.html");
urlsToCache.push("Callimachus_Epigrams_60.html");
urlsToCache.push("Callimachus_Epigrams_61.html");
urlsToCache.push("Callimachus_Epigrams_62.html");
urlsToCache.push("Callimachus_Epigrams_63.html");
