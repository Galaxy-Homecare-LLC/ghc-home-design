document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".testimonials", {
    speed:800,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      640: {
        centeredSlides: true,
        slidesPerView: 1.25,
      },
      1024: {
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
