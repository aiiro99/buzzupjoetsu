
document.addEventListener("mousemove", function(e) {
  const hero = document.querySelector('.hero-content');
  const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
  hero.style.transform = `translate(${moveX}px, calc(-50% + ${moveY}px))`;
});
