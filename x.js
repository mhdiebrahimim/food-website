const header_menu_btn = document.querySelector("#header-hide-icon");
const header = document.querySelector("#header");
const header_center_div = document.querySelector("#header-center-div");
const cancel_header_menu = document.querySelector("#hide-header-menu-btn");
const searchIcon = document.querySelector("#search_icon");
const search_form = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const imgLazy = document.querySelectorAll("img[data-src]");
const header_nav = document.querySelector("header-nav");

header_menu_btn.addEventListener("click", function () {
  header_center_div.style.display = "block";
});
cancel_header_menu.addEventListener("click", function () {
  header_center_div.style.display = "none";
});

// ------------search form-----------
searchIcon.addEventListener("click", function () {
  search_form.classList.add("search-form-activ");
  searchInput.value = "";
});
search_form.addEventListener("click", function (e) {
  if (e.target !== searchInput)
    search_form.classList.remove("search-form-activ");
});
// -----------lazy loading-----------
// const loadImg = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.src = entry.target.dataset.src;
//   entry.target.addEventListener("load", function () {
//     entry.target.classList.remove("blur");
//   });
//   observer.unobserve(entry.target);
// };
// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
// });
// imgLazy.forEach((img) => imgObserver.observe(img));

// ------------slider--------------//
const section = document.querySelectorAll(".section");
const circle1 = document.querySelector("#circle1");
const circle2 = document.querySelector("#circle2");
const circle3 = document.querySelector("#circle3");
let current = 0;
let maxSlide = section.length;

const translateX = function () {
  section.forEach(function (sec, i) {
    sec.style.transform = `translateX(${100 * (i - current)}%)`;
  });
};
const whiteBack = function () {
  circle1.style.backgroundColor = "#FFFFFF";
  circle2.style.backgroundColor = "#FFFFFF";
  circle3.style.backgroundColor = "#FFFFFF";
};
const blackBack = function (el) {
  if (current == 0) {
    whiteBack();
    circle1.style.backgroundColor = "#000000";
  }
  if (current == 1) {
    whiteBack();
    circle2.style.backgroundColor = "#000000";
  }
  if (current == 2) {
    whiteBack();
    circle3.style.backgroundColor = "#000000";
  }
};
circle1.addEventListener("click", () => {
  current = 0;
  blackBack();
  translateX();
});
circle2.addEventListener("click", () => {
  current = 1;
  blackBack();
  translateX();
});
circle3.addEventListener("click", () => {
  current = 2;
  blackBack();
  translateX();
});
setInterval(function () {
  if (current == 2) {
    current = 0;
    translateX();
    blackBack();
  } else {
    current++;
    translateX();
    blackBack();
  }
}, 5000);
