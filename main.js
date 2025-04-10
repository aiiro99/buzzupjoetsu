
window.addEventListener("load", () => {
  setTimeout(() => {
    const opening = document.getElementById("opening");
    if (opening) opening.style.display = "none";
  }, 2500);
});

particlesJS("particle-canvas", {
  particles: {
    number: { value: 120 },
    size: { value: 2 },
    color: { value: "#ffffff" },
    move: { enable: true, speed: 0.5 },
    line_linked: { enable: false }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 80 } }
  }
});

const canvas = document.getElementById('wave-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;
function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  for (let x = 0; x <= canvas.width; x += 20) {
    let y = canvas.height / 2 + Math.sin(x * 0.01 + t) * 20;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  ctx.lineWidth = 2;
  ctx.stroke();
  t += 0.05;
  requestAnimationFrame(drawWave);
}
drawWave();

const waveText = document.getElementById("wave-text");
const chars = waveText.textContent.split('');
waveText.textContent = '';
chars.forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.display = "inline-block";
  waveText.appendChild(span);
  gsap.to(span, {
    y: -10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    delay: i * 0.1,
    ease: "sine.inOut"
  });
});
