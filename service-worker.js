
const CACHE_NAME = "buzzup-cache-v1";
const urlsToCache = [
  "./index.html",
  "./css/style.css",
  "./js/script.js",
  "./assets/audio/nav_card_click_se.mp3",
  "./assets/audio/sns_post_success_chime.mp3",
  "./assets/audio/faq_solved_reaction.mp3",
  "./assets/audio/faq_mode_switch_se.mp3",
  "./assets/audio/character_jump_se.mp3",
  "./assets/audio/character_bow_se.mp3",
  "./assets/audio/modal_open_slide_se.mp3",
  "./assets/audio/character_voice_2_offline.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
