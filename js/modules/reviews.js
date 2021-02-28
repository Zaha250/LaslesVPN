import {getCardProduct} from '../services/services';

function reviews() {
  
  class Reviews {
    constructor(name, city, avt, rev, rating, parrentEl) {
      this.name = name;
      this.city = city;
      this.avt = avt;
      this.rev = rev;
      this.rating = rating;
      this.parrent = document.querySelector(parrentEl);
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

  //ДОБАВЛЕНИЕ ОТЗЫВОВ

  getCardProduct('http://localhost:3000/cardProduct')
    .then(data => {
      data.forEach(({ name, city, avt, reviews, rating }) => {
        new Reviews(
          name, city, avt, reviews, rating, '.swiper-wrapper'
        ).addRev();
      });
    });

}

export default reviews;