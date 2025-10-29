const navigation = (function () {
  const btnMenuOpen = document.querySelector('#btn-menu-open');
  const btnMenuClose = document.querySelector('#btn-menu-close');
  const navbar = document.querySelector('#navbar');

  btnMenuOpen.addEventListener('click', () => {
    navbar.classList.remove('hidden');
  });

  btnMenuClose.addEventListener('click', () => {
    navbar.classList.add('hidden');
  });
})();
