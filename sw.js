/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-62cbbc23900c52a36211.js"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js"
  },
  {
    "url": "app-bae3f612d5a38e6a6c40.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8008c812cb9363e04003ee3dc50fbe3e"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "polyfill-1c73eff1cb06dfe3be93.js"
  },
  {
    "url": "styles.73dd92976036552ecece.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "01f6d17db53167da3c8e76ece80f2168fb039962-d97bb7e86ed46046f747.js"
  },
  {
    "url": "dc389e94862d1bc536d0ebc364f0a7490ba7b454-50522e292f09dde741d5.js"
  },
  {
    "url": "component---src-pages-vision-js-d6541c340b4fc85ac731.js"
  },
  {
    "url": "page-data/vision/page-data.json",
    "revision": "ae99f4be896c1acae90b8d4956e19761"
  },
  {
    "url": "page-data/sq/d/2140534681.json",
    "revision": "70a7a21c366bdf83d2a83dbcbd231539"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "fa9afe23c2992c1b0b173f0c6193fbb3"
  },
  {
    "url": "bbb9d758df040dca054f7d984c21ef926603eeba-0674552d8fbfba1624e3.js"
  },
  {
    "url": "component---src-pages-solution-js-23f6e03446bd9b0ff34f.js"
  },
  {
    "url": "page-data/solution/page-data.json",
    "revision": "357654469f29e56b915ed36f00e46fb1"
  },
  {
    "url": "component---src-pages-business-js-45347ecb3c416a4ec0cb.js"
  },
  {
    "url": "page-data/business/page-data.json",
    "revision": "e4e3902e08977a51683b2ac6cfa64937"
  },
  {
    "url": "component---src-pages-contact-js-aa5a3a17f17225152e7a.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "0187e464d8baab788591bc499d042aee"
  },
  {
    "url": "component---src-pages-try-js-50217396b946cacc063b.js"
  },
  {
    "url": "page-data/try/page-data.json",
    "revision": "83a648f3bbc0e7751cd3afd8a1e80abc"
  },
  {
    "url": "component---src-pages-privacy-js-f87c5dbf19747a70662a.js"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "d6f37b17cfab6403fccf91820232a811"
  },
  {
    "url": "component---src-pages-terms-js-968e653e7cba7527d759.js"
  },
  {
    "url": "page-data/terms/page-data.json",
    "revision": "318811ddb70983cde21d61b4249a53f1"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3f69c18d6e9d4527ebfe449253fae1b4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-bae3f612d5a38e6a6c40.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
