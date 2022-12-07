const themeToggleBtn = document.getElementById("themeColor");
const themeToggleDarkIcon = document.getElementById("iconNight");
const themeToggleLightIcon = document.getElementById("iconLight");
const logoLight = document.getElementById("logoLight");
const logoNight = document.getElementById("logoNight");
const currentTheme = localStorage.getItem("color-theme");
const navbar = document.getElementById("navbar");
const list = document.querySelector("#navigation");
// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
  document.documentElement.classList.add("dark");
  localStorage.setItem("color-theme", "dark");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
  document.documentElement.classList.add("light");
  localStorage.setItem("color-theme", "light");
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
      logoNight.style.display = "none";
      logoLight.style.display = "block";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      logoNight.style.display = "block";
      logoLight.style.display = "none";
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
  logoNight.style.display = "none";
  logoLight.style.display = "block";
} else {
  logoNight.style.display = "block";
  logoLight.style.display = "none";
}
const added = window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    navbar.classList.add("shadow-xl");
    navbar.classList.add("dark:border-b");
    navbar.classList.add("dark:border-slate-700");
  } else {
    navbar.classList.remove("shadow-xl");
    navbar.classList.remove("dark:border-b");
    navbar.classList.remove("dark:border-white");
  }
});
function toggleMenuBar(e) {
  list.classList.toggle("top-[60px]");
}
