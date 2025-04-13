
// Lottie animations
const starfield = lottie.loadAnimation({
  container: document.getElementById("starfield"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/images/starfield.json"
});

const pulse = lottie.loadAnimation({
  container: document.getElementById("pulse"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/images/pulse-light.json"
});

// Sound preload
const sounds = {
  click: new Audio("assets/audio/nav_card_click_se.mp3"),
  post: new Audio("assets/audio/sns_post_success_chime.mp3"),
  faq: new Audio("assets/audio/faq_solved_reaction.mp3"),
  mode: new Audio("assets/audio/faq_mode_switch_se.mp3"),
  jump: new Audio("assets/audio/character_jump_se.mp3"),
  bow: new Audio("assets/audio/character_bow_se.mp3"),
  modal: new Audio("assets/audio/modal_open_slide_se.mp3"),
  voice: new Audio("assets/audio/character_voice_2_offline.mp3")
};

// Event bindings
document.getElementById("navCard").addEventListener("click", () => {
  sounds.click.play();
});

document.getElementById("postSuccess").addEventListener("click", () => {
  sounds.post.play();
  alert("投稿成功🎉");
});

document.getElementById("faqSolved").addEventListener("click", () => {
  sounds.faq.play();
  alert("FAQ完了🎆");
});

document.getElementById("modeSwitch").addEventListener("click", () => {
  sounds.mode.play();
});

document.getElementById("jumpImg").addEventListener("click", () => {
  sounds.jump.play();
  sounds.voice.play();
});

document.getElementById("bowImg").addEventListener("click", () => {
  sounds.bow.play();
});
