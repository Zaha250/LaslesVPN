import acnchors from './modules/anchors';
import accordion from './modules/accordion';
import forms from './modules/forms';
import modal from './modules/modal';
import reviews from './modules/reviews';
import swiper from './modules/swiper';
import tooltip from './modules/tooltip';
import menuActive from './modules/menu';

window.addEventListener('DOMContentLoaded', () => {

  acnchors();
  accordion();
  modal('.modal', '[data-modal="modal-login"]');
  modal('.modal', '[data-modal="modal-email"]');
  forms('form', '.modal');
  reviews();
  swiper();
  tooltip();
  menuActive('.nav__menu','.nav-burger', 'active');

});