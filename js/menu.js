document.addEventListener('DOMContentLoaded', function () {
  const navMenu = document.querySelector('.nav-menu');
  const btnMenu = document.querySelector('.menu-hamburguer');
  const overlayMenu = document.querySelector('.overlay-menu');

  function toggleMenu() {
    navMenu.classList.toggle('active');
  }

  btnMenu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  overlayMenu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
});
