window.addEventListener('DOMContentLoaded', () => {
  
  //MODAL

  const modal = document.querySelector('.modal');

  document.querySelector('.nav__button').addEventListener('click', () => {
    openModal();
    document.forms.form.login.focus();
  });

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__close') || e.target == modal) {
      closeModal();
    }
  });

  function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  //TOOLTIP

  let tooltipEl;

  document.addEventListener('mouseover', (e) => {
    let target = e.target;
    let tooltip = target.dataset.tooltip;

    if (!tooltip) return;

    tooltipEl = document.createElement('div');
    tooltipEl.classList.add('tooltip');
    tooltipEl.innerHTML = tooltip;
    document.body.append(tooltipEl);

    //Спозиционируем подсказку 

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipEl.offsetWidth) / 2;
    if (left < 0) left = 0; // не заезжать за левый край окна

    let top = coords.top - tooltipEl.offsetHeight - 5;
    if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
      top = coords.top + target.offsetHeight + 5;
    }

    tooltipEl.style.left = left + 'px';
    tooltipEl.style.top = top + 'px';

  });

  document.addEventListener('mouseout', () => {
    if (tooltipEl) {
      tooltipEl.remove();
      tooltipEl = null;
    }
  });


  //ДОБАВЛЕНИЕ ОТЗЫВОВ

  class Reviews {
    constructor(name, city, avt, rev, rating) {
      this.name = name;
      this.city = city;
      this.avt = avt;
      this.rev = rev;
      this.rating = rating;
      this.parrent = document.querySelector('.swiper-wrapper');
    }

    addRev() {
      const item = document.createElement('div');
      item.classList.add('reviews-slider__item', 'swiper-slide');
      item.innerHTML = `
        <div class="reviews-user">
          <div class="reviews-user__info">
            <img class="reviews-user__avatar" src="${this.avt}" alt="${this.name}">
            <div class="reviews-user__info-wrapper">
              <span class="reviews-user__name">${this.name}</span>
              <span class="reviews-user__city">${this.city}</span>
            </div>
          </div>
          <span class="reviews-user__rating">${this.rating}</span>
        </div>
        <p class="reviews__content">${this.rev}</p>
      `;

      this.parrent.append(item);
    }
  };

  new Reviews(
    'Веж Роберт',
    'Варшва, Польша',
    "images/reviews/man-1.png",
    '«Вау ... Я очень счастлив использовать этот VPN, он оказался больше, чем я ожидал, и пока никаких проблем не возникло. LaslesVPN всегда лучший ».',
    4.5
  ).addRev();

  new Reviews(
    'Йессика Кристи',
    'Шаньси, Китай',
    "images/reviews/man-2.png",
    '«Мне это нравится, потому что я люблю путешествовать далеко и при этом могу соединяться с высокой скоростью».',
    4.5
  ).addRev();

  new Reviews(
    'Ким Ён Джоу',
    'Сеул, Южная Корея',
    "images/reviews/man-3.png",
    '«Это очень необычно для моего бизнеса, которому в настоящее время требуется виртуальная частная сеть с высоким уровнем безопасности».',
    5
  ).addRev();


  //SWIPER
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button_next',
      prevEl: '.swiper-button_prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

  });

  //FORM

  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    postData(form);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const message = {
        load: 'images/icons/spinner.svg',
        succes: 'Загрузка данных завершена',
        failed: 'Что-то пошло не так... Попробуйте позже'
      };

      const messageEl = document.createElement('img');
      messageEl.src = message.load;
      messageEl.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', messageEl);

      const request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      const formData = new FormData(form);
      request.send(formData);

      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          showThanksModal(message.succes);
          messageEl.remove();
          form.reset();
        }else{
          showThanksModal(message.failed);
        }
      });

    });
  }

  function showThanksModal(message) {
    const newModalDialog = document.createElement('div'),
          prevModalDialog = document.querySelector('.modal-dialog');

    prevModalDialog.style.display = 'none';
    newModalDialog.classList.add('modal-dialog');
    newModalDialog.innerHTML = `
      <div class="modal__title title">${message}</div>
    `;
    modal.append(newModalDialog);

    setTimeout(() => {
      newModalDialog.remove();
      prevModalDialog.style.display = 'block';
      closeModal();
    }, 3000);

  }

});