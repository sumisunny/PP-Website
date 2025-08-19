// Example: Simple welcome alert
window.onload = () => {
  console.log("Portfolio Loaded Successfully!");
};
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      message.textContent = "✅ Thank you! Your message has been sent (demo).";
      form.reset();
    });
  }
});
