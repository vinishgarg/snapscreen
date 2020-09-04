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
    "url": "webpack-runtime-91d66052337fd089b1f6.js"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js"
  },
  {
    "url": "app-84f620fc15c9c67f5f32.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "eea0c6efc2b315a21756cd5d926a611f"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "abddf33c0018942f07aee3fd7fb46566"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "118540702d8bd1ffae71683bf8247568"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a709f68c89f0e26c3904c17359ce8feb"
  },
  {
    "url": "polyfill-1c73eff1cb06dfe3be93.js"
  },
  {
    "url": "styles.e5545b1a3bef50a922bf.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "01f6d17db53167da3c8e76ece80f2168fb039962-7dcd4b38a240c1fd60d1.js"
  },
  {
    "url": "dc389e94862d1bc536d0ebc364f0a7490ba7b454-50522e292f09dde741d5.js"
  },
  {
    "url": "component---src-pages-vision-js-654e227b163da615f20a.js"
  },
  {
    "url": "page-data/vision/page-data.json",
    "revision": "5aa19308149dc3639c676a70939a3eac"
  },
  {
    "url": "bbb9d758df040dca054f7d984c21ef926603eeba-0674552d8fbfba1624e3.js"
  },
  {
    "url": "component---src-pages-solution-js-3b22343f576e00a9e73b.js"
  },
  {
    "url": "page-data/solution/page-data.json",
    "revision": "d8c4d5acc2dec8b5605c6adddc8a5baf"
  },
  {
    "url": "component---src-pages-business-js-3083e01b372e22b63894.js"
  },
  {
    "url": "page-data/business/page-data.json",
    "revision": "76f6776bb4d3a6cbb393825ab97db93c"
  },
  {
    "url": "component---src-pages-contact-js-44ca12968653cf08adcb.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "d3bb2df75dc0b8ca4b75f0e1ce65544d"
  },
  {
    "url": "component---src-pages-try-js-24c46b10326929f474c0.js"
  },
  {
    "url": "page-data/try/page-data.json",
    "revision": "46d6188c86bab0cf890aac549889389a"
  },
  {
    "url": "component---src-pages-privacy-js-0327356d7f26d64a7d7b.js"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "be09ee7ee7fe932b8d38b63434b8e465"
  },
  {
    "url": "component---src-pages-terms-js-d7f0c13600ccf9dcd450.js"
  },
  {
    "url": "page-data/terms/page-data.json",
    "revision": "72786369a47582a2d811f6dbc52a580c"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "5a714e7438b05d470ce6a7ddc8d5bfef"
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
  pathname = pathname.replace(new RegExp(`^/snapscreen`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/snapscreen/app-84f620fc15c9c67f5f32.js`))) {
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

  const offlineShell = `/snapscreen/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
