const filesToCache = [
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
  "https://unpkg.com/swiper/swiper-bundle.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
  "assets/images/Banners/Live-Streaming-Banner.webp",
  "assets/images/KheloyarlogoforwebNew.webp",
  "assets/images/Banners/Banner-01.webp",
  "assets/images/Banners/Banner 2 Desktop-01 (1).webp",
  "assets/images/Banners/main page banner 2-01.webp",
  "assets/images/Banners/Banner  (280x150)-01.webp",
  "assets/images/Banners/Banner 2 (280x150)-01.webp",
  "assets/images/Banners/Banner (280) Fold-01.webp",
  "assets/icons/support.webp",
  "assets/images/footer/telegram.svg",
  "assets/images/footer/twitter.svg",
  "assets/images/footer/instagram.svg",
  "assets/images/footer/youtubee.svg",
  "assets/images/footer/facebooke.svg",
  "assets/images/exchange/icons/Indian Casino 2-19 (1).svg",
  "assets/images/exchange/icons/Power.svg",
  "assets/images/exchange/icons/Fantasy.svg",
  "assets/images/exchange/icons/Provider-22.svg",
  "assets/images/exchange/icons/shootinggames.svg",
  "assets/images/exchange/icons/instantwithdrawal.svg",
  "assets/images/exchange/icons/slot-01.svg",
  "assets/images/exchange/icons/Tablegame.svg",
  "assets/images/exchange/icons/VS 2-16.svg",
  "assets/images/exchange/icons/teenpatti.svg",
  "assets/images/exchange/icons/Casino.svg",
  "assets/images/exchange/icons/Cricket 2-14.svg",
  "assets/images/LogoKheloYar.svg",
  "assets/icons/Kheloyar For Dark Theme.svg",
  "assets/images/profile-01.svg",
  "assets/images/vuesax-linear-logout.svg",
  "assets/images/exchange/NewImages/1.webp",
 "assets/images/exchange/NewImages/2.webp",
  "assets/images/exchange/NewImages/3.webp",
  "assets/images/exchange/NewImages/4.webp",
  "assets/images/exchange/NewImages/9.webp",
  "assets/images/exchange/NewImages/12.webp",
  "assets/images/exchange/NewImages/14.webp",
  "assets/images/exchange/NewImages/18.webp",
  "assets/images/exchange/NewImages/21.webp",
  "assets/images/exchange/NewImages/25.webp",
  "assets/images/exchange/NewImages/28.webp",
  "assets/images/exchange/NewImages/29.webp",
  "assets/images/exchange/NewImages/33.webp",
  "assets/images/exchange/NewImages/36.webp",
  "assets/images/exchange/NewImages/38.webp",
  "assets/images/exchange/NewImages/40.webp",
  "assets/images/exchange/NewImages/41.webp",
  "assets/images/exchange/NewImages/42.webp",
  "assets/images/exchange/NewImages/45.webp",
  "assets/images/exchange/NewImages/47.webp",
  "assets/images/exchange/NewImages/Sat Sports.webp",
  "assets/icons/bank.png",
  "assets/images/Banners/Make your debut banner.webp",
  "assets/images/calender-icon.png",
  "assets/images/WarningBanner/Important Alert Hindi-03.webp",
  "assets/images/WarningBanner/Important Alert Hindi Mobile-04.webp",
  "assets/images/CreateIdBannerSVG.svg",
  "assets/icons/help-support.png",
  "assets/icons/money-bag 1.png",
  "assets/icons/arrow.png",
  "assets/images/Banners/125percent.jpg",
  "assets/icons/transparentCard.png",
  "assets/icons/transparentCard2.png",
  "assets/icons/transparentCard3.png",
  "assets/icons/group.png",
  "assets/icons/tc2.png",
  "assets/icons/tc3.png",
  "assets/images/paytmbank.png",
  "assets/icons/upi.png",
  "assets/icons/receiveicon.svg",
  "assets/icons/Sendicon.svg",
  "assets/images/defaultimage.png",
  "assets/images/defaultimage2.png",
  "assets/images/Providers/Supernova-02.webp",
  "assets/images/Providers/Q Tech-06.webp",
  "assets/images/Providers/Powergames.webp",
  "assets/images/Providers/Pragmatic.webp",
  "assets/images/Providers/Binary.webp",
  "assets/images/Providers/AE Sexy.webp",
  "assets/images/Providers/XPG-11.webp",
  "assets/images/Providers/Evolution Gaming-01.webp",
  "assets/images/Providers/Ezugi-05.webp",
  "assets/images/Providers/HOT GAMES.webp",
  "assets/images/Providers/Slots.webp",
  "assets/images/Providers/Live Casino.webp",
  "assets/images/Providers/VIRTUAL SPORTS.webp",
  "assets/images/Providers/Shooting.webp",
  "assets/images/Providers/Instant Win.webp",
  "assets/images/Providers/SCRATCH CARD.webp",
  "assets/images/Providers/Table Games.webp",
  "assets/images/Providers/Lottery Games.webp",
  "assets/icons/login.svg",
  "assets/icons/signup.svg",
  "assets/images/register/Kheloyar.club Signup Page-01 (1).webp",
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) => cache.addAll(filesToCache))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener("activate", (event) => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter(
          (cacheName) => !currentCaches.includes(cacheName)
        );
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then((cache) => {
          return fetch(event.request).then((response) => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
