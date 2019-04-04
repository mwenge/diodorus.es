'use strict';

var CACHE_NAME = 'Plutarch_Pompey';
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
urlsToCache.push("Plutarch_Pompey.html");
urlsToCache.push("Plutarch_Pompey_2.html");
urlsToCache.push("Plutarch_Pompey_3.html");
urlsToCache.push("Plutarch_Pompey_4.html");
urlsToCache.push("Plutarch_Pompey_5.html");
urlsToCache.push("Plutarch_Pompey_6.html");
urlsToCache.push("Plutarch_Pompey_7.html");
urlsToCache.push("Plutarch_Pompey_8.html");
urlsToCache.push("Plutarch_Pompey_9.html");
urlsToCache.push("Plutarch_Pompey_10.html");
urlsToCache.push("Plutarch_Pompey_11.html");
urlsToCache.push("Plutarch_Pompey_12.html");
urlsToCache.push("Plutarch_Pompey_13.html");
urlsToCache.push("Plutarch_Pompey_14.html");
urlsToCache.push("Plutarch_Pompey_15.html");
urlsToCache.push("Plutarch_Pompey_16.html");
urlsToCache.push("Plutarch_Pompey_17.html");
urlsToCache.push("Plutarch_Pompey_18.html");
urlsToCache.push("Plutarch_Pompey_19.html");
urlsToCache.push("Plutarch_Pompey_20.html");
urlsToCache.push("Plutarch_Pompey_21.html");
urlsToCache.push("Plutarch_Pompey_22.html");
urlsToCache.push("Plutarch_Pompey_23.html");
urlsToCache.push("Plutarch_Pompey_24.html");
urlsToCache.push("Plutarch_Pompey_25.html");
urlsToCache.push("Plutarch_Pompey_26.html");
urlsToCache.push("Plutarch_Pompey_27.html");
urlsToCache.push("Plutarch_Pompey_28.html");
urlsToCache.push("Plutarch_Pompey_29.html");
urlsToCache.push("Plutarch_Pompey_30.html");
urlsToCache.push("Plutarch_Pompey_31.html");
urlsToCache.push("Plutarch_Pompey_32.html");
urlsToCache.push("Plutarch_Pompey_33.html");
urlsToCache.push("Plutarch_Pompey_34.html");
urlsToCache.push("Plutarch_Pompey_35.html");
urlsToCache.push("Plutarch_Pompey_36.html");
urlsToCache.push("Plutarch_Pompey_37.html");
urlsToCache.push("Plutarch_Pompey_38.html");
urlsToCache.push("Plutarch_Pompey_39.html");
urlsToCache.push("Plutarch_Pompey_40.html");
urlsToCache.push("Plutarch_Pompey_41.html");
urlsToCache.push("Plutarch_Pompey_42.html");
urlsToCache.push("Plutarch_Pompey_43.html");
urlsToCache.push("Plutarch_Pompey_44.html");
urlsToCache.push("Plutarch_Pompey_45.html");
urlsToCache.push("Plutarch_Pompey_46.html");
urlsToCache.push("Plutarch_Pompey_47.html");
urlsToCache.push("Plutarch_Pompey_48.html");
urlsToCache.push("Plutarch_Pompey_49.html");
urlsToCache.push("Plutarch_Pompey_50.html");
urlsToCache.push("Plutarch_Pompey_51.html");
urlsToCache.push("Plutarch_Pompey_52.html");
urlsToCache.push("Plutarch_Pompey_53.html");
urlsToCache.push("Plutarch_Pompey_54.html");
urlsToCache.push("Plutarch_Pompey_55.html");
urlsToCache.push("Plutarch_Pompey_56.html");
urlsToCache.push("Plutarch_Pompey_57.html");
urlsToCache.push("Plutarch_Pompey_58.html");
urlsToCache.push("Plutarch_Pompey_59.html");
urlsToCache.push("Plutarch_Pompey_60.html");
urlsToCache.push("Plutarch_Pompey_61.html");
urlsToCache.push("Plutarch_Pompey_62.html");
urlsToCache.push("Plutarch_Pompey_63.html");
urlsToCache.push("Plutarch_Pompey_64.html");
urlsToCache.push("Plutarch_Pompey_65.html");
urlsToCache.push("Plutarch_Pompey_66.html");
urlsToCache.push("Plutarch_Pompey_67.html");
urlsToCache.push("Plutarch_Pompey_68.html");
urlsToCache.push("Plutarch_Pompey_69.html");
urlsToCache.push("Plutarch_Pompey_70.html");
urlsToCache.push("Plutarch_Pompey_71.html");
urlsToCache.push("Plutarch_Pompey_72.html");
urlsToCache.push("Plutarch_Pompey_73.html");
urlsToCache.push("Plutarch_Pompey_74.html");
urlsToCache.push("Plutarch_Pompey_75.html");
urlsToCache.push("Plutarch_Pompey_76.html");
urlsToCache.push("Plutarch_Pompey_77.html");
urlsToCache.push("Plutarch_Pompey_78.html");
urlsToCache.push("Plutarch_Pompey_79.html");
urlsToCache.push("Plutarch_Pompey_80.html");
urlsToCache.push("translation.js");
