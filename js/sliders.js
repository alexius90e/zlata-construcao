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
  slidesPerView: 1,
  spaceBetween: 1.2,
  breakpoints: {
    586: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".services .swiper-pagination",
  },
});
