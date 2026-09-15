"use strict";

const CACHE_PREFIX = "emailjs-lab-";
const ASSETS = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./js/quiz.js",
  "./js/history.js",
  "./js/playground.js",
  "./js/i18n.js",
  "./js/sw-register.js",
  "./manifest.webmanifest",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
];

let cacheName = CACHE_PREFIX + "dev";

function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16);
}

async function fetchHash() {
  try {
    const res = await fetch("./index.html", { cache: "no-store" });
    const html = await res.text();
    return fnv1a(html);
  } catch (e) {
    return null;
  }
}

async function openCache(version) {
  const name = CACHE_PREFIX + version;
  if (name !== cacheName) {
    cacheName = name;
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((k) => k !== name).map((k) => caches.delete(k)),
    );
  }
  const cache = await caches.open(name);
  const hasAssets = (await cache.keys()).length > 0;
  if (!hasAssets) await cache.addAll(ASSETS).catch(() => {});
  return cache;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const hash = await fetchHash();
      await openCache(hash || "fallback");
      self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith(CACHE_PREFIX) && k !== cacheName)
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.hostname === "cdn.jsdelivr.net") {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(cacheName).then((c) => c.put(event.request, copy));
          return res;
        })
        .catch(() => caches.match(event.request)),
    );
    return;
  }

  event.respondWith(
    caches
      .match(event.request)
      .then((cached) => cached || fetch(event.request)),
  );
});
