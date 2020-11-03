import Swiper from "swiper/bundle";

export const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  freeMode: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  speed: 400,
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    475: {
      slidesPerView: 1.3,
      spaceBetween: 5,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1.7,
      spaceBetween: 5,
    },

    768: {
      slidesPerView: 2.1,
      spaceBetween: 5,
    },

    1024: {
      slidesPerView: 2.8,
      spaceBetween: 10,
    },
    1260: {
      slidesPerView: 3.3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.5,
      spaceBetween: 16,
    },
    2560: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
