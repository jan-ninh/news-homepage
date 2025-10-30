(function () {
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
// open modal
document.querySelectorAll('.footer-link').forEach((btn) =>
  btn.addEventListener('click', (event) => {
    // identify footer-link, display matching modal and show wrapper
    const btnIdent = event.target.id.replace('footer-btn-', '');
    modalId = 'footer-modal-' + btnIdent;
    document.getElementById(modalId).classList.remove(`hidden`);
    document.getElementById('footer-modal-wrapper').classList.remove(`hidden`);
  })
);
// close modal
document.getElementById('footer-modal-wrapper').addEventListener('click', (e) => {
  // closing function
  function closeModal() {
    document.getElementById('footer-modal-wrapper').classList.add(`hidden`);
    // // close all modals to avoid problems
    document.querySelectorAll('.footer-modal').forEach((el) => el.classList.add('hidden'));
  }

  // run closeModal() by click on wrapper or modal button
  e.target.hasAttribute('closeModal') ? closeModal() : null;
});
