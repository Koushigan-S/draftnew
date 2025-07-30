// ===== Navbar Slide-in on Load =====
gsap.to(".navbar", {
  duration: 1,
  y: 100,
  ease: "power2.out",
  delay: 0.5
});

// ===== Button Hover Pulse =====
document.querySelectorAll(".cta").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "power1.out" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power1.out" });
  });
});

// ===== Scroll-triggered Fade-ins =====
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

// ===== Login Form Logic =====
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
      }

      if (email === "admin@draft.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "home.html";
      } else {
        alert("Invalid credentials. Try again.");
      }
    });
  }
});

// ===== Hero Launch Button to Login Page =====
document.addEventListener("DOMContentLoaded", () => {
  const launchBtn = document.getElementById("launchBtn");
  if (launchBtn) {
    launchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(".hero", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          window.location.href = "login.html";
        }
      });
    });
  }
});

// ===== Order Page Simple Confirmation =====
document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("orderForm");
  const orderSuccess = document.getElementById("orderSuccess");

  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();
      setTimeout(() => {
        orderForm.reset();
        orderSuccess.classList.remove("hidden");
      }, 500);
    });
  }
});

// ===== Place Order Page with Tick & Confetti =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("placeOrderForm");
  const confirmationPage = document.getElementById("confirmationPage");

  if (form && confirmationPage) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const productType = document.getElementById("productType").value;
      const file = document.getElementById("uploadFile").files[0];
      const address = document.getElementById("deliveryAddress").value;
      const payment = document.getElementById("paymentMethod").value;

      if (!productType || !file || !address || !payment) {
        alert("⚠️ Please fill in all required fields.");
        return;
      }

      form.classList.add("hidden");
      confirmationPage.classList.remove("hidden");

      const tick = document.querySelector(".tick");
      tick.classList.add("tick-animate");

      launchConfetti();
    });
  }
});

// ===== Confetti Logic =====
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 30 + 10,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 5,
    tiltAngleIncremental: Math.random() * 0.07 + 0.05,
    tiltAngle: 0,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    });

    update();
    requestAnimationFrame(draw);
  }

  function update() {
    pieces.forEach(p => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.tilt = Math.sin(p.tiltAngle) * 15;

      if (p.y > canvas.height) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
    });
  }

  draw();
}
