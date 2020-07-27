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
    "url": "webpack-runtime-42b5233c23bfe59acdbe.js"
  },
  {
    "url": "framework-fca5a6c89ebf46562859.js"
  },
  {
    "url": "app-98267bcbfd80a445ccd7.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "995464d30146b640515274acd08bb6f4"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c9875e2473a7c518755f.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "243534c4146999de94375adbd80795e3"
  },
  {
    "url": "static/d/63159454.json"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7c6164c7f0ccff8b7162ccc9fde0cd2b"
  },
  {
    "url": "polyfill-bb4983c58ef0ea99ce79.js"
  },
  {
    "url": "styles.db59073e3d5c4671d330.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "01f6d17db53167da3c8e76ece80f2168fb039962-a5c4c0d540f04d744838.js"
  },
  {
    "url": "dc389e94862d1bc536d0ebc364f0a7490ba7b454-7fc57738536a3a7123e0.js"
  },
  {
    "url": "component---src-pages-vision-js-dc0599f5981cd45edd29.js"
  },
  {
    "url": "page-data/vision/page-data.json",
    "revision": "a666d7dca68482aeba9f64c61a8579bc"
  },
  {
    "url": "ee7e2504872fb7e9ccb2dd02a943b90c6b0e35c1-0674552d8fbfba1624e3.js"
  },
  {
    "url": "ee93aa93245769fb6e2fb00175f1a427a218dbdb-e7ece2e30f4c487c8108.js"
  },
  {
    "url": "component---src-pages-solution-js-dda89d54ec0c6319ce69.js"
  },
  {
    "url": "page-data/solution/page-data.json",
    "revision": "04c9d906036425a39417f601fb6ff562"
  },
  {
    "url": "component---src-pages-business-js-3e3dfee51ed8f1d07998.js"
  },
  {
    "url": "page-data/business/page-data.json",
    "revision": "76a65cfb0d1fee359a0edb53bcc5eec1"
  },
  {
    "url": "component---src-pages-contact-js-e98b2f075cfe78147eca.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "6a763fb8d83da277ac5f6c8b7d4aab3a"
  },
  {
    "url": "component---src-pages-try-js-f853ed3ab80cd49ebf98.js"
  },
  {
    "url": "page-data/try/page-data.json",
    "revision": "de65d30b1344454a14d1d06959852086"
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
  if (!resources || !(await caches.match(`/clipshare/app-98267bcbfd80a445ccd7.js`))) {
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
