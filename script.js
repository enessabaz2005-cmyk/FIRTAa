tsParticles.load("tsparticles", {
  background: { color: "#f5f6f8" },
  fpsLimit: 60,
  particles: {
    number: { value: 60, density: { enable: true, area: 900 } },
    color: { value: "#555555" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: { min: 1, max: 4 } },
    move: {
      enable: true,
      speed: 1,          // Burayı arttırırsan daha hızlı olur
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" }
    },
    links: {
      enable: true,
      distance: 120,
      color: "#aaa",
      opacity: 0.2,
      width: 1
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: { enable: true, mode: "repulse" },   // mouse hover
      onClick: { enable: true, mode: "push" },      // click / tap
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { quantity: 4 }
    }
  },
  detectRetina: true
});
