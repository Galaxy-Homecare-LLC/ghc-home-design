var swiper = new Swiper(".mySwiper", {
	// autoplay: {
	// 	delay: 4000,
	// 	disableOnInteraction: false,
	// },
	speed:1100,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
