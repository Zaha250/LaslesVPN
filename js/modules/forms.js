import {closeModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalSelector) {

  const forms = document.querySelectorAll(formSelector);

  forms.forEach(form => {
    bindPostData(form);
  });

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const message = {
        load: 'images/icons/spinner.svg',
        succes: 'Добро пожаловать',
        failed: 'Что-то пошло не так... Попробуйте позже'
      };

      const messageEl = document.createElement('img');
      messageEl.src = message.load;
      messageEl.style.cssText = `
        display: block;
        margin: 0 auto;
      `;

      form.insertAdjacentElement('afterend', messageEl);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/request', json)
        .then(data => {
          console.log(data);
          showThanksModal(message.succes, form.login.value);
          messageEl.remove();
        }).catch(() => {
          showThanksModal(message.failed);
        }).finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message, name) {
    const newModalDialog = document.createElement('div'),
          prevModalDialog = document.querySelector('.modal-dialog'),
          modal = document.querySelector(modalSelector);

    prevModalDialog.style.display = 'none';
    newModalDialog.classList.add('modal-dialog');
    newModalDialog.innerHTML = `
      <div class="modal__title title">${message}, ${name}</div>
    `;
    modal.append(newModalDialog);

    setTimeout(() => {
      newModalDialog.remove();
      prevModalDialog.style.display = 'block';
      closeModal(modal);
    }, 3000);

  }

}

export default forms;