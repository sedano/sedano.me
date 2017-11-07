/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["android-chrome-192x192.png","32a8139973cb26b2084258253f05e279"],["android-chrome-512x512.png","c009fdd6d3108dce52347626d674e7b8"],["apple-touch-icon.png","20b245df82fe323d1e9936d2fa4b0fe9"],["assets/css/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["assets/css/ie8.css","8c2242377f274e3760bde751a06cb927"],["assets/css/ie9.css","dc69a1c95f2c51b7ee5435dbae477865"],["assets/css/images/ie/grad0-15.svg","70cc9ebf9c4a65de3d628f31446e169f"],["assets/css/images/overlay.png","b0e594144f6569f9a9d4683ebb9f2da7"],["assets/css/main.css","0d4daf0ab46386c1272e86ca88d63d75"],["assets/fonts/FontAwesome.otf","5dc41d8fe329a22fa1ee9225571c843e"],["assets/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["assets/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["assets/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["assets/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["assets/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["assets/js/ie/PIE.htc","3b8fed93f46e41f2a69bd65c289de89b"],["assets/js/ie/backgroundsize.min.htc","b95536d0f83b653aeefe6068a1da1aaa"],["assets/js/ie/html5shiv.js","62ac572189514315ebfb31c43a225009"],["assets/js/ie/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["assets/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["assets/js/jquery.scrolly.min.js","1ed5a78bde1476875a40f6b9ff44fc14"],["assets/js/jquery.scrollzer.min.js","167fe166c34c05ffc149a1d6bb18b92d"],["assets/js/main.js","413680bd18217871146dbf779969608d"],["assets/js/service-worker-registration.js","56a0c578e45f06332d471e24bf9cfa24"],["assets/js/skel.min.js","93140e29fa68bab55ce6eae874ae674d"],["assets/js/util.js","fd2716a7b68ce7748c9676787b61db43"],["browserconfig.xml","805212e4ca906e1ebe6ccdabab6bcd0b"],["favicon-16x16.png","df7aa8d846025927ea015365ce4b34c6"],["favicon-32x32.png","5baa360b99ba54db337ae0e6b212f71d"],["favicon.ico","456b86864ac26d8974ec858509267639"],["gulpfile.js","b1f76181ead87edcbbd8e6798d135a53"],["images/GoogleBadge.png","483217e9d2ef95ca711db876083b87b0"],["images/avatar.png","939a419551eae4e276172bdc16f84302"],["images/banner.jpg","3088dc13ffd4cad5c7c2cea2a2f0480f"],["images/banner2.jpg","412383e1eca71e7fe2708e4cce47ebbb"],["images/biofilter.jpg","8a81b2c0f1408f8181f04b5a3148aec9"],["images/bitmoji.png","b44530d56219b7809f005f6c1775cfbe"],["images/cabin.jpg","1f6d1dcbb3d81e7349d355ef6fe87329"],["images/fraunhofer-logo.png","db4f001269992385d33b804a0a264220"],["images/ios.png","87625bbd165155e2c8b77543825f8192"],["images/logo.png","837970c06a68e2ddb7fe42555cb9b648"],["images/mars-logo.png","44ef336a9d2dccf2626aa8109ee35601"],["images/medical-devices.jpg","1524a42de32ebf7b5f32377157a1dc6b"],["images/microstrategy-logo.png","30c847e999cd647b78eea827a90ee089"],["images/myorobotics.jpg","fff4cd14849df74a73192a928944f9d8"],["images/onamis-eu.png","eafb439278f969005d7009765918bcc7"],["images/onamis-logo.png","9a98c3cbe18c9cff99a3b994a753e14e"],["images/onamis.jpg","ea64b8123b645f4574a41090def8d8c4"],["images/scopesheet.jpg","34b80d1d310babd1dfba37d424ebc2fa"],["images/seneka.jpg","6c5bbaa49716c79c0bfd5ed445ae4071"],["images/tdi-logo.png","f89f878142787da935c3547c20812858"],["index.html","82bbcdd6031cafc8900023873d52222b"],["manifest.json","e8d265ee5c9a40e0fff9e73ec0fec783"],["mstile-150x150.png","ae6a58415fe955b378882c4d9e7ba267"],["package-lock.json","ba628ef94675b875934936e1b54b01c4"],["package.json","4b6ad5435e54b8be1bcc0641ccd79794"],["safari-pinned-tab.svg","af32ef0cde16c29a22cea489a1faa56c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







