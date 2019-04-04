'use strict';

var CACHE_NAME = 'Plutarch_Regum_et_imperatorum_apophthegmata';
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
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_2.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_3.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_4.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_5.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_6.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_7.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_8.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_9.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_10.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_11.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_12.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_13.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_14.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_15.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_16.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_17.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_18.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_19.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_20.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_21.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_22.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_23.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_24.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_25.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_26.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_27.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_28.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_29.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_30.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_31.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_32.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_33.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_34.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_36.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_37.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_38.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_39.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_40.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_41.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_42.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_43.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_44.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_45.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_46.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_47.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_48.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_49.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_50.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_51.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_52.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_53.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_54.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_55.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_56.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_57.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_58.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_59.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_60.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_61.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_62.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_63.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_64.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_65.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_66.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_67.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_68.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_69.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_70.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_71.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_72.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_73.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_74.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_75.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_76.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_77.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_78.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_79.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_80.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_81.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_82.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_83.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_84.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_85.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_86.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_87.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_88.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_89.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_90.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_91.html");
urlsToCache.push("Plutarch_Regum_et_imperatorum_apophthegmata_92.html");
