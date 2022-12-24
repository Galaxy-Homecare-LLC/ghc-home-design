const clickToScrollTop = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    clickToScrollTop.style.display = "flex";
  } else {
    clickToScrollTop.style.display = "none";
  }
}
clickToScrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
