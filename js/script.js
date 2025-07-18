// Greeting
const gretingE1 = document.getElementById("greeting");
let userName = sessionStorage.getItem("userName");

if (!userName) {
  userName = prompt("Please Enter Your Name");
  sessionStorage.setItem("userName", userName);
}

gretingE1.innerText = `Hi ${userName}, Welcome To Nava Rent Car`;

// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// navbar slide
const navbarE1 = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    navbarE1.classList.add("navbar-scalled");
  } else if (window.scrollY <= 120) {
    navbarE1.classList.remove("navbar-scalled");
  }
});

// Count-Up Animator
const counters = document.querySelectorAll(".count");
let hasAnimated = false;

const runCounter = () => {
  counters.forEach((counter) => {
    const target = parseFloat(counter.getAttribute("data-target"));
    const isDecimal = target % 1 !== 0;
    let count = 0;
    const increment = target / 130;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = isDecimal ? count.toFixed(1) : Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = isDecimal ? target.toFixed(1) : target + "+";
      }
    };

    updateCount();
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        runCounter();
        hasAnimated = true;
      }
    });
  },
  {
    threshold: 1,
  }
);

const statsSection = document.getElementById("stats-section");
observer.observe(statsSection);

// Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const output = document.getElementById("formOutput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message-form").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields!");
      return;
    }

    output.innerHTML = `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `;

    form.reset();
  });
});
