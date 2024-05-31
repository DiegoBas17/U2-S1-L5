window.addEventListener("scroll", function () {
  const navbar = document.getElementById("barraNav");
  const scrollPosition = window.scrollY;
  if (scrollPosition > 400) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
