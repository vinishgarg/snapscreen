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
    "url": "webpack-runtime-5ddd83be320dc443772a.js"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js"
  },
  {
    "url": "app-fb6b1382e71695bf6fdb.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7dbc1d5b9bf67ea3779f86ba0eb4ce85"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "c465b8347bb24465a3629db865d69698"
  },
  {
    "url": "static/d/63159454.json"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "3b82dd47731cb25afaf29c35232f8a40"
  },
  {
    "url": "polyfill-1c73eff1cb06dfe3be93.js"
  },
  {
    "url": "styles.c3101912e0273f629305.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "01f6d17db53167da3c8e76ece80f2168fb039962-c00e36e3d949f73416a1.js"
  },
  {
    "url": "dc389e94862d1bc536d0ebc364f0a7490ba7b454-7fc57738536a3a7123e0.js"
  },
  {
    "url": "component---src-pages-vision-js-908d538a069e227d998b.js"
  },
  {
    "url": "page-data/vision/page-data.json",
    "revision": "46db103033b8be5f971aab655f21d0d0"
  },
  {
    "url": "bbb9d758df040dca054f7d984c21ef926603eeba-0674552d8fbfba1624e3.js"
  },
  {
    "url": "component---src-pages-solution-js-68f0f9916ca1fb200dd7.js"
  },
  {
    "url": "page-data/solution/page-data.json",
    "revision": "643811bcbd7cf994b3e207a822ab51fd"
  },
  {
    "url": "component---src-pages-business-js-e3ed3b22c923961e9d04.js"
  },
  {
    "url": "page-data/business/page-data.json",
    "revision": "0dc795a9407932d9e905aabc4681d30a"
  },
  {
    "url": "component---src-pages-contact-js-44ca12968653cf08adcb.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "e6c33ec1e7378387936055c7b7cc041b"
  },
  {
    "url": "component---src-pages-try-js-24c46b10326929f474c0.js"
  },
  {
    "url": "page-data/try/page-data.json",
    "revision": "d0f505a3cab1b858dbe4c50a2f301e33"
  },
  {
    "url": "component---src-pages-privacy-js-0327356d7f26d64a7d7b.js"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "51341758985218c60e66fc91b7080a87"
  },
  {
    "url": "component---src-pages-terms-js-d7f0c13600ccf9dcd450.js"
  },
  {
    "url": "page-data/terms/page-data.json",
    "revision": "e8daf028ef8c885972bf71304af866d9"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d1752e2bbbb54d565f8ba2b84873cf82"
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
  pathname = pathname.replace(new RegExp(`^/clipshare`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/clipshare/app-fb6b1382e71695bf6fdb.js`))) {
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

  const offlineShell = `/clipshare/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
