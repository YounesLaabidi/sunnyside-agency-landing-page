const menuBtn = document.querySelector("[menuBtn]");
const rectangle = document.querySelector("[rectangle]");
const NavList = document.querySelector("[navList]");
const links = document.querySelectorAll("a");
menuBtn.addEventListener("click", (e) => {
  NavList.classList.toggle("active");
  rectangle.classList.toggle("active");
});
