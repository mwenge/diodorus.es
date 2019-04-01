'use strict';

var CACHE_NAME = 'Plutarch_Alexander';
var urlsToCache = [
  'Plutarch_Alexander.html',
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
urlsToCache.push("Plutarch_Alexander.html");
urlsToCache.push("Plutarch_Alexander_2.html");
urlsToCache.push("Plutarch_Alexander_3.html");
urlsToCache.push("Plutarch_Alexander_4.html");
urlsToCache.push("Plutarch_Alexander_5.html");
urlsToCache.push("Plutarch_Alexander_6.html");
urlsToCache.push("Plutarch_Alexander_7.html");
urlsToCache.push("Plutarch_Alexander_8.html");
urlsToCache.push("Plutarch_Alexander_9.html");
urlsToCache.push("Plutarch_Alexander_10.html");
urlsToCache.push("Plutarch_Alexander_11.html");
urlsToCache.push("Plutarch_Alexander_12.html");
urlsToCache.push("Plutarch_Alexander_13.html");
urlsToCache.push("Plutarch_Alexander_14.html");
urlsToCache.push("Plutarch_Alexander_15.html");
urlsToCache.push("Plutarch_Alexander_16.html");
urlsToCache.push("Plutarch_Alexander_17.html");
urlsToCache.push("Plutarch_Alexander_18.html");
urlsToCache.push("Plutarch_Alexander_19.html");
urlsToCache.push("Plutarch_Alexander_20.html");
urlsToCache.push("Plutarch_Alexander_21.html");
urlsToCache.push("Plutarch_Alexander_22.html");
urlsToCache.push("Plutarch_Alexander_23.html");
urlsToCache.push("Plutarch_Alexander_24.html");
urlsToCache.push("Plutarch_Alexander_25.html");
urlsToCache.push("Plutarch_Alexander_26.html");
urlsToCache.push("Plutarch_Alexander_27.html");
urlsToCache.push("Plutarch_Alexander_28.html");
urlsToCache.push("Plutarch_Alexander_29.html");
urlsToCache.push("Plutarch_Alexander_30.html");
urlsToCache.push("Plutarch_Alexander_31.html");
urlsToCache.push("Plutarch_Alexander_32.html");
urlsToCache.push("Plutarch_Alexander_33.html");
urlsToCache.push("Plutarch_Alexander_34.html");
urlsToCache.push("Plutarch_Alexander_35.html");
urlsToCache.push("Plutarch_Alexander_36.html");
urlsToCache.push("Plutarch_Alexander_37.html");
urlsToCache.push("Plutarch_Alexander_38.html");
urlsToCache.push("Plutarch_Alexander_39.html");
urlsToCache.push("Plutarch_Alexander_40.html");
urlsToCache.push("Plutarch_Alexander_41.html");
urlsToCache.push("Plutarch_Alexander_42.html");
urlsToCache.push("Plutarch_Alexander_43.html");
urlsToCache.push("Plutarch_Alexander_44.html");
urlsToCache.push("Plutarch_Alexander_45.html");
urlsToCache.push("Plutarch_Alexander_46.html");
urlsToCache.push("Plutarch_Alexander_47.html");
urlsToCache.push("Plutarch_Alexander_48.html");
urlsToCache.push("Plutarch_Alexander_49.html");
urlsToCache.push("Plutarch_Alexander_50.html");
urlsToCache.push("Plutarch_Alexander_51.html");
urlsToCache.push("Plutarch_Alexander_52.html");
urlsToCache.push("Plutarch_Alexander_53.html");
urlsToCache.push("Plutarch_Alexander_54.html");
urlsToCache.push("Plutarch_Alexander_55.html");
urlsToCache.push("Plutarch_Alexander_56.html");
urlsToCache.push("Plutarch_Alexander_57.html");
urlsToCache.push("Plutarch_Alexander_58.html");
urlsToCache.push("Plutarch_Alexander_59.html");
urlsToCache.push("Plutarch_Alexander_60.html");
urlsToCache.push("Plutarch_Alexander_61.html");
urlsToCache.push("Plutarch_Alexander_62.html");
urlsToCache.push("Plutarch_Alexander_63.html");
urlsToCache.push("Plutarch_Alexander_64.html");
urlsToCache.push("Plutarch_Alexander_65.html");
urlsToCache.push("Plutarch_Alexander_66.html");
urlsToCache.push("Plutarch_Alexander_67.html");
urlsToCache.push("Plutarch_Alexander_68.html");
urlsToCache.push("Plutarch_Alexander_69.html");
urlsToCache.push("Plutarch_Alexander_70.html");
urlsToCache.push("Plutarch_Alexander_71.html");
urlsToCache.push("Plutarch_Alexander_72.html");
urlsToCache.push("Plutarch_Alexander_73.html");
urlsToCache.push("Plutarch_Alexander_74.html");
urlsToCache.push("Plutarch_Alexander_75.html");
urlsToCache.push("Plutarch_Alexander_76.html");
urlsToCache.push("Plutarch_Alexander_77.html");
