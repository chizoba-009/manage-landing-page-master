// swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 'auto',
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

// hamburger
let closeMenu = document.querySelector('.icon-menu')
let mobileUl = document.querySelector('.main-ul')
closeMenu.addEventListener('click', () => {
	closeMenu.classList.toggle('icon-cancel')
	mobileUl.classList.toggle('show-mobile-nav')
})
