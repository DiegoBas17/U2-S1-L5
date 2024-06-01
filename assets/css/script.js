window.addEventListener("scroll", function () {
  const navbar = document.getElementById("barraNav");
  const button = document.getElementsByClassName("buttonNav");
  const buttonStarter = document.getElementsByClassName("getStarter");
  const scrollPosition = window.scrollY;
  if (scrollPosition > 260) {
    navbar.classList.add("scrolled");
    button[0].classList.add("scrolled");
    button[1].classList.add("scrolled");
    button[2].classList.add("scrolled");
    button[3].classList.add("scrolled");
    buttonStarter[0].classList.add("scrolled2");
  } else {
    navbar.classList.remove("scrolled");
    button[0].classList.remove("scrolled");
    button[1].classList.remove("scrolled");
    button[2].classList.remove("scrolled");
    button[3].classList.remove("scrolled");
    buttonStarter[0].classList.remove("scrolled2");
  }
});
