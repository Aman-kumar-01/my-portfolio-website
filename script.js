// Typewriter Animation
const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "CI/CD & Docker",
    "AWS Enthusiast",
    "Automation Specialist",
    "Cybersecurity Enthusiast",
    "Forex & Crypto Trader"
];

const typed = document.getElementById("typed");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if (!typed) return;

    const current = roles[roleIndex];

    if (isDeleting) {
        typed.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typed.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 400);
        return;
    }

    const speed = isDeleting ? 35 : 85;
    setTimeout(type, speed);
}

type();

// Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => navLinks.classList.remove("active"));
    });
}

// Active Nav
window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) {
            current = sec.getAttribute("id");
        }
    });
    document.querySelectorAll(".nav-links a").forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) a.classList.add("active");
    });
});