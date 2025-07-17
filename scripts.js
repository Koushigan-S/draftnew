// Navbar Slide-in on load
gsap.to(".navbar", {
  duration: 1,
  y: 100,
  ease: "power2.out",
  delay: 0.5
});

// Button hover pulse
document.querySelectorAll(".cta").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "power1.out" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power1.out" });
  });
});

// Scroll-triggered fade-ins
gsap.utils.toArray(".fade-section").forEach(section => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: -20,
    duration: 1,
    ease: "power2.out"
  });
});
