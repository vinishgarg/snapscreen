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
    "url": "webpack-runtime-8111c734aa9c1f57c0f1.js"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js"
  },
  {
    "url": "app-300b2669226983fac1b3.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d19b094d2f27de73dfcd68b222e31cb9"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "polyfill-1c73eff1cb06dfe3be93.js"
  },
  {
    "url": "styles.e75fed05a27702b53eb4.css"
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
    "url": "component---src-pages-vision-js-82ac9f68a537dcd8e16e.js"
  },
  {
    "url": "page-data/vision/page-data.json",
    "revision": "aa675904fade91a5fad9a54a02952964"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "118540702d8bd1ffae71683bf8247568"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6389436350be3a4a2e81890de40c5583"
  },
  {
    "url": "bbb9d758df040dca054f7d984c21ef926603eeba-0674552d8fbfba1624e3.js"
  },
  {
    "url": "component---src-pages-solution-js-5f35fbca5f5668bad83e.js"
  },
  {
    "url": "page-data/solution/page-data.json",
    "revision": "7bae94e3ed2d5edbc689b7da1f8c162b"
  },
  {
    "url": "component---src-pages-business-js-325d04e2c229f392c53e.js"
  },
  {
    "url": "page-data/business/page-data.json",
    "revision": "52c6da5e1a9b54e3e322656e2669c239"
  },
  {
    "url": "component---src-pages-contact-js-ac557b92019f1f64e222.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "8c091092563b0d918481288cfee250e7"
  },
  {
    "url": "component---src-pages-try-js-ee82de03990dda4b9bf6.js"
  },
  {
    "url": "page-data/try/page-data.json",
    "revision": "3c8262e7bc3c8eebdbe29e47fb91aa0e"
  },
  {
    "url": "component---src-pages-privacy-js-805a948eabf557e4d3f7.js"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "d196d9aba5e466b58b8c8a20c2062b06"
  },
  {
    "url": "component---src-pages-terms-js-d7f0c13600ccf9dcd450.js"
  },
  {
    "url": "page-data/terms/page-data.json",
    "revision": "2c49d6576ebbf61861b1724800b21c50"
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
  if (!resources || !(await caches.match(`/app-300b2669226983fac1b3.js`))) {
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
