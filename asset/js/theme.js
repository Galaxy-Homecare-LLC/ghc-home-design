"use strict"

// @todo: Define global variables
const navigationBar = document.getElementById("navigation")
const scrollHandler = document.getElementById("navbar")
const toggleBtnMode = document.getElementById('themeColor')
const themeSetLight = {
	logo: document.getElementById('logoLight'),
	icon: document.getElementById('iconLight'),
}
const themeSetNight = {
	logo: document.getElementById('logoNight'),
	icon: document.getElementById('iconNight')
}
// const currentAppUrl = new URL(location.href).origin
// const cssStyleSheet = {
// 	light: currentAppUrl.concat('/assets/css/').concat('style-light.min.css'),
// 	night: currentAppUrl.concat('/assets/css/').concat('style-dark.min.css'),
// }


// @todo: Default color handler
if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
	themeSetNight.logo.style.display = 'block'
	themeSetNight.icon.style.display = 'block'
	lightColorHandler()
} else {
	themeSetLight.logo.style.display = 'block'
	themeSetLight.icon.style.display = 'block'
	nightColorHandler()
}


// @todo: Click event handler
toggleBtnMode.addEventListener('click', function () {
	if (localStorage.getItem("color-theme")) {
		return localStorage.getItem("color-theme") === "light" ? lightColorHandler() : nightColorHandler()
	} else {
		return document.body.classList.contains('dark') ? nightColorHandler() : lightColorHandler()
	}
})


// @todo: Light mode handler
function lightColorHandler() {
	document.body.classList.remove("light")
	document.body.classList.add("dark")
	localStorage.setItem("color-theme", "dark")
	themeSetLight.logo.style.display = 'block'
	themeSetLight.icon.style.display = 'block'
	themeSetNight.logo.style.display = 'none'
	themeSetNight.icon.style.display = 'none'
	// document.querySelector("link[href='" + cssStyleSheet.light + "']").href = cssStyleSheet.night
}


// @todo: Night mode handler
function nightColorHandler() {
	document.body.classList.remove("dark")
	document.body.classList.add("light")
	localStorage.setItem("color-theme", "light")
	themeSetNight.logo.style.display = 'block'
	themeSetNight.icon.style.display = 'block'
	themeSetLight.logo.style.display = 'none'
	themeSetLight.icon.style.display = 'none'
	// document.querySelector("link[href='" + cssStyleSheet.night + "']").href = cssStyleSheet.light
}


// @todo: Navigation Hamburger menu handler
function toggleMenuBar(event) {
	if (event.name = 'menu') {
		event.name = "close"
		navigationBar.classList.add("top-[60px]")
	} else {
		event.name = "menu"
		navigationBar.classList.remove("top-[60px]")

	}

	if (navigationBar.style.display === "block") {
		navigationBar.style.display = "none";
	} else {
		navigationBar.style.display = "block";
	}
}


// @todo: Scroll bar handler
window.addEventListener("scroll", function () {
	if (window.scrollY >= 50) {
		scrollHandler.classList.add("shadow-xl")
		scrollHandler.classList.add("dark:border-b")
		scrollHandler.classList.add("dark:border-slate-700")
	} else {
		scrollHandler.classList.remove("shadow-xl")
		scrollHandler.classList.remove("dark:border-b")
		scrollHandler.classList.remove("dark:border-white")
	}
})
