const swiper = new Swiper(".swiper", {
  /* loop: true, */

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menu_btn = document.querySelector(".menu_btn");
const menu_list = document.querySelector(".menu_list");

menu_btn.addEventListener("click", function () {
  menu_list.classList.toggle("menu_open");
});
