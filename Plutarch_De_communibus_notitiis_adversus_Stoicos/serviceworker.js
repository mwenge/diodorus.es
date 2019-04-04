'use strict';

var CACHE_NAME = 'Plutarch_De_communibus_notitiis_adversus_Stoicos';
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
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_2.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_3.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_4.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_5.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_6.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_7.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_8.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_9.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_10.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_11.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_12.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_13.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_14.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_15.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_16.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_17.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_18.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_19.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_20.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_21.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_22.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_23.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_24.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_25.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_26.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_27.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_28.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_5.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_29.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_30.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_31.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_32.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_33.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_34.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_35.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_36.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_37.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_38.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_39.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_40.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_41.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_42.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_43.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_44.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_45.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_46.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_47.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_48.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_49.html");
urlsToCache.push("Plutarch_De_communibus_notitiis_adversus_Stoicos_50.html");
