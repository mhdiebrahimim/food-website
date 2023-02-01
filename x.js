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
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});