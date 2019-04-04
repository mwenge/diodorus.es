'use strict';

var CACHE_NAME = 'Plutarch_Cato_Minor';
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
urlsToCache.push("Plutarch_Cato_Minor.html");
urlsToCache.push("Plutarch_Cato_Minor_2.html");
urlsToCache.push("Plutarch_Cato_Minor_3.html");
urlsToCache.push("Plutarch_Cato_Minor_4.html");
urlsToCache.push("Plutarch_Cato_Minor_5.html");
urlsToCache.push("Plutarch_Cato_Minor_6.html");
urlsToCache.push("Plutarch_Cato_Minor_7.html");
urlsToCache.push("Plutarch_Cato_Minor_8.html");
urlsToCache.push("Plutarch_Cato_Minor_9.html");
urlsToCache.push("Plutarch_Cato_Minor_10.html");
urlsToCache.push("Plutarch_Cato_Minor_11.html");
urlsToCache.push("Plutarch_Cato_Minor_12.html");
urlsToCache.push("Plutarch_Cato_Minor_13.html");
urlsToCache.push("Plutarch_Cato_Minor_14.html");
urlsToCache.push("Plutarch_Cato_Minor_15.html");
urlsToCache.push("Plutarch_Cato_Minor_16.html");
urlsToCache.push("Plutarch_Cato_Minor_17.html");
urlsToCache.push("Plutarch_Cato_Minor_18.html");
urlsToCache.push("Plutarch_Cato_Minor_19.html");
urlsToCache.push("Plutarch_Cato_Minor_20.html");
urlsToCache.push("Plutarch_Cato_Minor_21.html");
urlsToCache.push("Plutarch_Cato_Minor_22.html");
urlsToCache.push("Plutarch_Cato_Minor_23.html");
urlsToCache.push("Plutarch_Cato_Minor_24.html");
urlsToCache.push("Plutarch_Cato_Minor_25.html");
urlsToCache.push("Plutarch_Cato_Minor_26.html");
urlsToCache.push("Plutarch_Cato_Minor_27.html");
urlsToCache.push("Plutarch_Cato_Minor_28.html");
urlsToCache.push("Plutarch_Cato_Minor_29.html");
urlsToCache.push("Plutarch_Cato_Minor_30.html");
urlsToCache.push("Plutarch_Cato_Minor_31.html");
urlsToCache.push("Plutarch_Cato_Minor_32.html");
urlsToCache.push("Plutarch_Cato_Minor_33.html");
urlsToCache.push("Plutarch_Cato_Minor_34.html");
urlsToCache.push("Plutarch_Cato_Minor_35.html");
urlsToCache.push("Plutarch_Cato_Minor_36.html");
urlsToCache.push("Plutarch_Cato_Minor_37.html");
urlsToCache.push("Plutarch_Cato_Minor_38.html");
urlsToCache.push("Plutarch_Cato_Minor_39.html");
urlsToCache.push("Plutarch_Cato_Minor_40.html");
urlsToCache.push("Plutarch_Cato_Minor_41.html");
urlsToCache.push("Plutarch_Cato_Minor_42.html");
urlsToCache.push("Plutarch_Cato_Minor_43.html");
urlsToCache.push("Plutarch_Cato_Minor_44.html");
urlsToCache.push("Plutarch_Cato_Minor_45.html");
urlsToCache.push("Plutarch_Cato_Minor_46.html");
urlsToCache.push("Plutarch_Cato_Minor_47.html");
urlsToCache.push("Plutarch_Cato_Minor_48.html");
urlsToCache.push("Plutarch_Cato_Minor_49.html");
urlsToCache.push("Plutarch_Cato_Minor_50.html");
urlsToCache.push("Plutarch_Cato_Minor_51.html");
urlsToCache.push("Plutarch_Cato_Minor_52.html");
urlsToCache.push("Plutarch_Cato_Minor_53.html");
urlsToCache.push("Plutarch_Cato_Minor_54.html");
urlsToCache.push("Plutarch_Cato_Minor_55.html");
urlsToCache.push("Plutarch_Cato_Minor_56.html");
urlsToCache.push("Plutarch_Cato_Minor_57.html");
urlsToCache.push("Plutarch_Cato_Minor_58.html");
urlsToCache.push("Plutarch_Cato_Minor_59.html");
urlsToCache.push("Plutarch_Cato_Minor_60.html");
urlsToCache.push("Plutarch_Cato_Minor_61.html");
urlsToCache.push("Plutarch_Cato_Minor_62.html");
urlsToCache.push("Plutarch_Cato_Minor_63.html");
urlsToCache.push("Plutarch_Cato_Minor_64.html");
urlsToCache.push("Plutarch_Cato_Minor_65.html");
urlsToCache.push("Plutarch_Cato_Minor_66.html");
urlsToCache.push("Plutarch_Cato_Minor_67.html");
urlsToCache.push("Plutarch_Cato_Minor_68.html");
urlsToCache.push("Plutarch_Cato_Minor_69.html");
urlsToCache.push("Plutarch_Cato_Minor_70.html");
urlsToCache.push("Plutarch_Cato_Minor_71.html");
urlsToCache.push("Plutarch_Cato_Minor_72.html");
urlsToCache.push("Plutarch_Cato_Minor_73.html");
urlsToCache.push("translation.js");
