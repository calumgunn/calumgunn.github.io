"use strict";var precacheConfig=[["/index.html","c9d413c30a55dd5d4f51ae43d7282e5e"],["/static/css/main.81f8d5dd.css","4e27f4cf9c48cafbce323eafa343c4ca"],["/static/js/main.288e197f.js","559d2b112f294d1d50ba89ad70060812"],["/static/media/ANM019-Cameron-Shafii01.d5a89486.jpg","d5a894863d6bfadd3459c02e50f0979c"],["/static/media/ANM019-Cameron-Shafii02.ce099f77.jpg","ce099f7755db97058a5e25794a8c780b"],["/static/media/ANM019-Cameron-Shafii03.588b8766.jpg","588b87662e22a794eae34925e0be7c7d"],["/static/media/ANM019-Cameron-Shafii04.297471d3.jpg","297471d3837a926cc166effaf4c22559"],["/static/media/ANM019-Cameron-Shafii05.1af5d918.jpg","1af5d918cfb0a1c352b5e8c425271409"],["/static/media/CS-Suzy_Poling.bb8b237a.jpg","bb8b237afc0038d811d96d3b71848227"],["/static/media/CorporaVilia-1.705994f6.JPG","705994f6df197813bc8f692a76c4d0aa"],["/static/media/CorporaVilia-2.d0c2af3a.JPG","d0c2af3a81dc19b20c7a078f99d2716d"],["/static/media/CorporaVilia-3.e196b673.JPG","e196b673a5bc525281ccb5181efec2a9"],["/static/media/CorporaVilia-4.8d356e19.JPG","8d356e1930c6098c4651c0e2375abf03"],["/static/media/CorporaVilia-Boomkat.4baf147c.jpg","4baf147cec7141103452fbd2fa17d0ed"],["/static/media/agipo_regular.7b242984.otf","7b242984016154aef7c1fa90037bc42a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});