const form = document.getElementById("placeOrderForm");
const formContainer = document.getElementById("formContainer");
const confirmationPage = document.getElementById("confirmationPage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Hide form, show confirmation
  formContainer.style.display = "none";
  confirmationPage.style.display = "block";

  // Confetti logic
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});

// Go back to home
function goBack() {
  window.location.href = "home.html";
}
