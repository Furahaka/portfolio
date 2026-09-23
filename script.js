const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const yearElement = document.getElementById("year");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thanks for your message! I will get back to you soon.");
  event.target.reset();
});

yearElement.textContent = new Date().getFullYear();
