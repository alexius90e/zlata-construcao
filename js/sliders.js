const bannersSwiper = new Swiper(".banners .swiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".banners .swiper-pagination",
  },
});

const servicesSwiper = new Swiper(".services .swiper", {
  spaceBetween: 16,
  slidesPerView: 1.13,
  breakpoints: {
    586: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
