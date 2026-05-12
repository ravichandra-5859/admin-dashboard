// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

  document.querySelector(".loader").style.display = "none";

});

// ==========================
// MOBILE SIDEBAR
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {

  sidebar.classList.toggle("active");

});

// ==========================
// SIDEBAR ACTIVE MENU
// ==========================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

  item.addEventListener("click", () => {

    menuItems.forEach(li => li.classList.remove("active"));

    item.classList.add("active");

  });

});

// ==========================
// SECTION FUNCTIONALITY
// ==========================

const sections = document.querySelectorAll(".section");

function showSection(sectionId){

  sections.forEach(section => {

    section.classList.remove("active-section");

  });

  document
    .getElementById(sectionId)
    .classList.add("active-section");

}

// Buttons

document
.getElementById("dashboard-btn")
.addEventListener("click", () => {

  showSection("dashboard-section");

});

document
.getElementById("analytics-btn")
.addEventListener("click", () => {

  showSection("analytics-section");

});

document
.getElementById("users-btn")
.addEventListener("click", () => {

  showSection("users-section");

});

document
.getElementById("projects-btn")
.addEventListener("click", () => {

  showSection("projects-section");

});

document
.getElementById("settings-btn")
.addEventListener("click", () => {

  showSection("settings-section");

});

// ==========================
// SEARCH FILTER
// ==========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

  const filter = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    const text = card.innerText.toLowerCase();

    if(text.includes(filter)){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter,20);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});

// ==========================
// DATE & TIME
// ==========================

const dateTime = document.querySelector(".date-time");

function updateDateTime(){

  const now = new Date();

  dateTime.innerHTML = now.toLocaleString();

}

setInterval(updateDateTime,1000);

updateDateTime();



const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if(menuToggle){

  menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("active");

  });

}