var swiper = new Swiper(".mySwiper", {
  // autoplay: {
  // 	delay: 4000,
  // 	disableOnInteraction: false,
  // },
  speed: 1100,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
