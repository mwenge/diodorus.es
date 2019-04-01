'use strict';

var CACHE_NAME = 'Plutarch_De_Iside_et_Osiride';
var urlsToCache = [
  'Plutarch_De_Iside_et_Osiride.html',
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
urlsToCache.push("Plutarch_De_Iside_et_Osiride.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_2.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_3.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_4.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_5.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_6.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_7.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_8.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_9.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_10.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_11.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_12.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_13.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_14.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_15.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_16.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_17.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_18.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_19.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_20.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_21.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_22.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_23.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_24.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_25.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_26.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_27.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_28.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_29.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_30.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_31.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_32.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_33.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_34.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_35.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_36.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_37.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_38.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_39.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_40.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_41.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_42.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_43.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_44.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_45.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_46.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_47.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_48.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_49.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_50.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_51.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_52.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_53.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_54.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_55.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_56.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_57.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_58.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_59.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_60.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_61.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_62.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_63.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_64.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_65.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_66.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_67.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_68.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_69.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_70.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_71.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_72.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_73.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_74.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_75.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_76.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_77.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_78.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_79.html");
urlsToCache.push("Plutarch_De_Iside_et_Osiride_80.html");
