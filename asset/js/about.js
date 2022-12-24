document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".testimonials", {
    speed:1000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {

      1024: {
        centeredSlides: false,
        slidesPerView: 2,
      },
      1200: {
        centeredSlides: false,
        slidesPerView: 3,
      },

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
