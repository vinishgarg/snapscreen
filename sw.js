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
    "url": "webpack-runtime-f7eeb330d513a51e1bdd.js"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js"
  },
  {
    "url": "app-1fc15417a3597d7b522d.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "094b240413618187fc442bfa353e8e00"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "8e32f3081a65c9c8ca77980886b8df14"
  },
  {
    "url": "static/d/63159454.json"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "28990a89fbabb6495c553c965b44847a"
  },
  {
    "url": "polyfill-1c73eff1cb06dfe3be93.js"
  },
  {
    "url": "styles.2fe26ba848174026ba0f.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "01f6d17db53167da3c8e76ece80f2168fb039962-ca197c2f6f1b52d94aeb.js"
  },
  {
    "url": "dc389e94862d1bc536d0ebc364f0a7490ba7b454-7fc57738536a3a7123e0.js"
  },
  {
    "url": "component---src-pages-vision-js-612234e41dda2da9d1e1.js"
  },
  {
    "url": "page-data/vision/page-data.json",
    "revision": "de1d25c395eae8715dd5d2ce4e2b9a67"
  },
  {
    "url": "ee7e2504872fb7e9ccb2dd02a943b90c6b0e35c1-0674552d8fbfba1624e3.js"
  },
  {
    "url": "component---src-pages-solution-js-d3e1e69450faad5acefd.js"
  },
  {
    "url": "page-data/solution/page-data.json",
    "revision": "9270512f49a68457fe0bc7472c5e0e45"
  },
  {
    "url": "component---src-pages-business-js-10d341d62f5fc9f8d4cf.js"
  },
  {
    "url": "page-data/business/page-data.json",
    "revision": "2b3d80dc58ff3f59a4df304c746c8671"
  },
  {
    "url": "component---src-pages-contact-js-b3f06483ab28ec7a6f74.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "0711489f2b889f58d7be77909be2d7b1"
  },
  {
    "url": "component---src-pages-try-js-e535a73ee6066292a480.js"
  },
  {
    "url": "page-data/try/page-data.json",
    "revision": "0f11fc9fc755810c082eb691983c5a13"
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
  if (!resources || !(await caches.match(`/clipshare/app-1fc15417a3597d7b522d.js`))) {
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
