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
    "url": "404.html",
    "revision": "473daf870306dfa0f13a7343febf87ed"
  },
  {
    "url": "404/index.html",
    "revision": "f738bdbef75d82e5160b95515d1de222"
  },
  {
    "url": "app-b5784f4457a2d5c135e4.js"
  },
  {
    "url": "business/index.html",
    "revision": "8066e9ac5f1cdf718f33a3b15d639cdf"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c9875e2473a7c518755f.js"
  },
  {
    "url": "component---src-pages-404-js-8dda0bf6cef96d3e9e51.js"
  },
  {
    "url": "component---src-pages-business-js-1774274ef06626d3500a.js"
  },
  {
    "url": "component---src-pages-contact-js-e98b2f075cfe78147eca.js"
  },
  {
    "url": "component---src-pages-faq-js-68a5a47883a8da596b7a.js"
  },
  {
    "url": "component---src-pages-index-js-47b81a0b2a478c07399d.js"
  },
  {
    "url": "component---src-pages-press-js-7b55e51ff8e0e0707e6d.js"
  },
  {
    "url": "component---src-pages-privacy-js-c376da1597816a5eaf68.js"
  },
  {
    "url": "component---src-pages-solution-js-6337b45efd8ea85b6fc9.js"
  },
  {
    "url": "component---src-pages-styleguide-js-44873fba33eefb99380b.js"
  },
  {
    "url": "component---src-pages-try-js-75bc16f8473d465ad218.js"
  },
  {
    "url": "component---src-pages-vision-js-ee1cf553fd28f7b1bfac.js"
  },
  {
    "url": "contact/index.html",
    "revision": "ecbd83ec2d2733c2fb5b6b181ff1f1fb"
  },
  {
    "url": "dc389e94862d1bc536d0ebc364f0a7490ba7b454-7fc57738536a3a7123e0.js"
  },
  {
    "url": "de/404.html",
    "revision": "caaeb24cc34c6909ab8e66dd4378710b"
  },
  {
    "url": "de/404/index.html",
    "revision": "bd062466b967c8f48d55747ca45a802c"
  },
  {
    "url": "de/business/index.html",
    "revision": "d4f6c1bae337edca01d14e100560d9ee"
  },
  {
    "url": "de/contact/index.html",
    "revision": "8942b090d3d249691c3d158212a2bc9a"
  },
  {
    "url": "de/faq/index.html",
    "revision": "8c7435fd6aa4222d6967ed9d6ca707ce"
  },
  {
    "url": "de/index.html",
    "revision": "dab1c040c007bf45d815ffce4e97ca28"
  },
  {
    "url": "de/offline-plugin-app-shell-fallback/index.html",
    "revision": "e39f7f0c3cb8f9fae53ea917808d1aaa"
  },
  {
    "url": "de/press/index.html",
    "revision": "8df82e721587cfd4e0cda37d6ba84d7a"
  },
  {
    "url": "de/privacy/index.html",
    "revision": "5719f089b24b6a6a2abf5bd1017b74e4"
  },
  {
    "url": "de/solution/index.html",
    "revision": "809846b90e05d7d2ff01f2e85bbb996d"
  },
  {
    "url": "de/styleguide/index.html",
    "revision": "ee5d5d4592b40f552d33532596450b5b"
  },
  {
    "url": "de/try/index.html",
    "revision": "deb5f4f667dfbdb72a121ad209aec7a0"
  },
  {
    "url": "de/vision/index.html",
    "revision": "ac4abd8636051f0e14611864005684eb"
  },
  {
    "url": "deacdf69b109eeb5b659431e1130f8fbd1b85ce5-e06ac8edea679f8a388a.js"
  },
  {
    "url": "ee7e2504872fb7e9ccb2dd02a943b90c6b0e35c1-0674552d8fbfba1624e3.js"
  },
  {
    "url": "ee93aa93245769fb6e2fb00175f1a427a218dbdb-e7ece2e30f4c487c8108.js"
  },
  {
    "url": "en/404.html",
    "revision": "3b878f6b480d0303630ce317f7b852ed"
  },
  {
    "url": "en/404/index.html",
    "revision": "01edca0f260e33516d77f97b615dd782"
  },
  {
    "url": "en/business/index.html",
    "revision": "0714b1cdef90b99e8d07f59dbda35c1b"
  },
  {
    "url": "en/contact/index.html",
    "revision": "59153de5d16241518602ef7d359b853a"
  },
  {
    "url": "en/faq/index.html",
    "revision": "48e195bc13eb5be9f01cf021f2e261ac"
  },
  {
    "url": "en/index.html",
    "revision": "82c2a4f80a2bf7ee67cef80a8b4b6433"
  },
  {
    "url": "en/offline-plugin-app-shell-fallback/index.html",
    "revision": "9648e0e9cca50b96c06f8f66734401ff"
  },
  {
    "url": "en/press/index.html",
    "revision": "93d66707d650efe562e5d298a14e44bf"
  },
  {
    "url": "en/privacy/index.html",
    "revision": "829a8da2b7037506913dada8bddd2640"
  },
  {
    "url": "en/solution/index.html",
    "revision": "d197a08373ab42a488a83c011db5964f"
  },
  {
    "url": "en/styleguide/index.html",
    "revision": "4034730d1d037c696858db667e1dd038"
  },
  {
    "url": "en/try/index.html",
    "revision": "45e1ec74bb77a7bf7f4632451c5f6c3d"
  },
  {
    "url": "en/vision/index.html",
    "revision": "c2fcb539e05c8219baaf0d9e5b122bc3"
  },
  {
    "url": "faq/index.html",
    "revision": "e6f0f7fa46190dc5e472fa4eefed49ca"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "0ea8ef1084b01d3eed5610c3c2432066"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "cf74ca9ed51732b7bb5005009f671651"
  },
  {
    "url": "polyfill-18afd1d2d760729c0797.js"
  },
  {
    "url": "press/index.html",
    "revision": "a3c3df24a8b1e508ba0f0b4ec27a81a6"
  },
  {
    "url": "privacy/index.html",
    "revision": "555b593b26b46175bfee60514b19ae2b"
  },
  {
    "url": "solution/index.html",
    "revision": "8679c870dffae0566d5b2159157368be"
  },
  {
    "url": "static/404-e3fef42804472bd926c0219972f1823e.gif"
  },
  {
    "url": "static/AWS_logo-31bd5b60cc1492df5d1270f6e0ef43c7.jpg"
  },
  {
    "url": "styleguide/index.html",
    "revision": "9e254546e28d49ebc5daad6c9291d5ff"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "styles.9a599eaf5924a49b4d8d.css"
  },
  {
    "url": "try/index.html",
    "revision": "46d8afee2dfb6882bb54450bbf263001"
  },
  {
    "url": "vision/index.html",
    "revision": "0a951521b538dcde1e79d36c57052d87"
  },
  {
    "url": "webpack-runtime-7b31511482f6264fdc28.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "13bbe50063a363740bfa79a258e5d8e5"
  },
  {
    "url": "static/d/63159454.json"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "d79b860857b12ff60f47d4af1a494999"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "994972714c1d8dccf4d15355f4913924"
  },
  {
    "url": "page-data/vision/page-data.json",
    "revision": "59eb31f566604e0ba408806349f1a08c"
  },
  {
    "url": "page-data/solution/page-data.json",
    "revision": "2dc62358fa80f80083f899cf53b16645"
  },
  {
    "url": "page-data/business/page-data.json",
    "revision": "254bf915b0eded27c88d17953732605f"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "76a8ab3d6150b238f53d00706a25a4d5"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8bb2d6a4e71ba75133e1978e47828c07"
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
  if (!resources || !(await caches.match(`/clipshare/app-b5784f4457a2d5c135e4.js`))) {
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
