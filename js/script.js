window.addEventListener('DOMContentLoaded', () => {
  
  //Modal

  const modal = document.querySelector('.modal');

  document.querySelector('.nav__button').addEventListener('click', () => {
    openModal();
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
  //Добавление отзывов

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


  //Swiper
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

});