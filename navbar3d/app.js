const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const escritura = document.querySelector(".escritura");

hamburger_menu.addEventListener("click", () => {
 
  container.classList.toggle("active");
  escritura.classList.toggle("activo");
  

});
