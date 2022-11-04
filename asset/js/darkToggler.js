var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
var themeToggleBtn = document.getElementById("theme-toggle");
const flatPicker = document.getElementById("flatPicker");
const light_logo = document.getElementById("logo-light");
const dark_logo = document.getElementById("logo-dark");
const currentTheme = localStorage.getItem("color-theme");

if (
	localStorage.getItem("color-theme") === "dark" ||
	(!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
	document.documentElement.classList.add("dark");
} else {
	document.documentElement.classList.remove("dark");
}

// Change the icons inside the button based on previous settings
if (
	localStorage.getItem("color-theme") === "dark" ||
	(!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
	themeToggleLightIcon.classList.remove("hidden");
} else {
	themeToggleDarkIcon.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", function () {
	// toggle icons inside button
	themeToggleDarkIcon.classList.toggle("hidden");
	themeToggleLightIcon.classList.toggle("hidden");

	// if set via local storage previously
	if (localStorage.getItem("color-theme")) {
		if (localStorage.getItem("color-theme") === "light") {
			document.documentElement.classList.add("dark");
			localStorage.setItem("color-theme", "dark");
			dark_logo.style.display = "none";
			light_logo.style.display = "block";
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("color-theme", "light");
			light_logo.style.display = "none";
			dark_logo.style.display = "block";
		}

		// if NOT set via local storage previously
	} else {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("color-theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("color-theme", "dark");
		}
	}
});

if (currentTheme === "dark") {
	dark_logo.style.display = "none";
	light_logo.style.display = "block";
} else {
	dark_logo.style.display = "block";
	light_logo.style.display = "none";
}
function Menu(e) {
	let list = document.querySelector("#navigation");
	e.name === "menu"
		? ((e.name = "close"), list.classList.add("top-[60px]"))
		: ((e.name = "menu"),
		  list.classList.remove("top-[60px]"),
		  list.classList.remove("opacity-100"));
}

let navbar = document.getElementById("navbar");
const added=
window.addEventListener("scroll", function () {
	if (window.scrollY >= 50) {
		navbar.classList.add("shadow-xl");
		navbar.classList.add("dark:border-b");
    navbar.classList.add("dark:border-slate-600");



	} else {
		navbar.classList.remove("shadow-xl");
		navbar.classList.remove("dark:border-b");
		navbar.classList.remove("dark:border-slate-600");


	}
});
