// ================================
// SARA — Portfolio JavaScript
// ================================

// Mobile navigation
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close mobile menu after clicking a navigation link
const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});