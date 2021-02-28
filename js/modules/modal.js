function openModal(modalSelector) {
  modalSelector.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector) {
  modalSelector.style.display = 'none';
  document.body.style.overflow = '';
}

function modal(modalSelector, modalTriggerSelector) {
  const modal = document.querySelector(modalSelector),
        modalBtn = document.querySelectorAll(modalTriggerSelector);

  modalBtn.forEach( trigger => {
    trigger.addEventListener('click', () => {
      openModal(modal);
      document.forms.form.login.focus();
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__close') || e.target == modal) {
      closeModal(modal);
    }
  });

}

export default modal;
export {openModal, closeModal};