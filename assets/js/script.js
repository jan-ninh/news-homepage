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

// FUNCTION HANDLER FOR FOOTER LINKS =================================================
let modalId;
// open window
document.querySelectorAll('.footer-link').forEach((btn) =>
  btn.addEventListener('click', (event) => {
    // identify button, display matching modal and show wrapper
    const btnIdent = event.target.id.replace('footer-btn-', '');
    modalId = 'footer-modal-' + btnIdent;
    document.getElementById(modalId).classList.remove(`hidden`);
    document.getElementById('footer-modal-wrapper').classList.remove(`hidden`);
  })
);
// close window
document.getElementById('footer-modal-wrapper').addEventListener('click', () => {
  // // close wrapper and hide modal for next use
  document.getElementById('footer-modal-wrapper').classList.add(`hidden`);
  // // TODO: close here all modals to avoid problems
  document.querySelectorAll('.footer-modal').forEach((el) => el.classList.add('hidden'));
});
