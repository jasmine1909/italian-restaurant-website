const menu = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
window.scroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
const searchBtn = document.querySelector("#search-icon");
const closeBtn = document.querySelector("#close");
const searchForm = document.querySelector("#search-form");
searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  searchForm.classList.remove("active");
});

//swiper
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//loader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");
