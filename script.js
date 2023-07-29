function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const fadeInElement = document.querySelector(".fade-in");
  fadeInElement.style.opacity = 1; // Mostramos el contenido gradualmente

  // Escuchamos el evento 'load' para eliminar el contenido de la clase 'fade-in'
  window.addEventListener("load", function () {
    fadeInElement.classList.remove("fade-in");
  });
});
