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
    "url": "webpack-runtime-088e0db6d35db5a1a52c.js"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js"
  },
  {
    "url": "app-bae3f612d5a38e6a6c40.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "244e01ff156c1ddcaead9170fa07da53"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "polyfill-1c73eff1cb06dfe3be93.js"
  },
  {
    "url": "styles.b58efed439e544b3b4f0.css"
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
    "url": "component---src-pages-vision-js-fdffc365487f97ddc5e8.js"
  },
  {
    "url": "page-data/vision/page-data.json",
    "revision": "9e7e8661a9c853eabe6b5105088bd12c"
  },
  {
    "url": "page-data/sq/d/2140534681.json",
    "revision": "70a7a21c366bdf83d2a83dbcbd231539"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "83069a566271ef3cd57b87bf5c09a096"
  },
  {
    "url": "bbb9d758df040dca054f7d984c21ef926603eeba-0674552d8fbfba1624e3.js"
  },
  {
    "url": "component---src-pages-solution-js-d2d60d6a70963a446bfe.js"
  },
  {
    "url": "page-data/solution/page-data.json",
    "revision": "ee1623eea439fcc114641d2c98b1bb8d"
  },
  {
    "url": "component---src-pages-business-js-0a71cc506875e08cefaa.js"
  },
  {
    "url": "page-data/business/page-data.json",
    "revision": "2f545ba796de05ced3032ecc92379ba8"
  },
  {
    "url": "component---src-pages-contact-js-aa5a3a17f17225152e7a.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "ac6fb0135f9ea7c06215cb68a4585285"
  },
  {
    "url": "component---src-pages-try-js-8da328bc0c41fde1e8e2.js"
  },
  {
    "url": "page-data/try/page-data.json",
    "revision": "f85636a3121663022934fe963a6394a0"
  },
  {
    "url": "component---src-pages-privacy-js-e9818826ddaadf3f7e1d.js"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "3ce9e19c20f11a9866020f9236a6893b"
  },
  {
    "url": "component---src-pages-terms-js-cbc771bf801dc196ad41.js"
  },
  {
    "url": "page-data/terms/page-data.json",
    "revision": "78daf28935ef90e1d4b21ee7441da7e3"
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
