/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function accordion() {
  
  const footerNav = document.querySelector('.footer-nav');

  footerNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('footer-nav__item')) {
      e.target.classList.toggle('active');
      // e.target.nextSibling.style.maxHeight = e.target.nextSibling.scrollHeight + 'px';
    } else return;
  });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./js/modules/anchors.js":
/*!*******************************!*\
  !*** ./js/modules/anchors.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function anchors() {

  document.querySelectorAll('a.anchor').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();

      const href = anchor.getAttribute('href').substring(1);

      const sectionId = document.getElementById(href);

      const sectionPosition = sectionId.getBoundingClientRect().top;

      window.scrollBy({
        top: sectionPosition,
        behavior: 'smooth'
      });
    });
  });
  
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anchors);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



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

      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/request', json)
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
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);
    }, 3000);

  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./js/modules/reviews.js":
/*!*******************************!*\
  !*** ./js/modules/reviews.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


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

  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getCardProduct)('http://localhost:3000/cardProduct')
    .then(data => {
      data.forEach(({ name, city, avt, reviews, rating }) => {
        new Reviews(
          name, city, avt, reviews, rating, '.swiper-wrapper'
        ).addRev();
      });
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reviews);

/***/ }),

/***/ "./js/modules/swiper.js":
/*!******************************!*\
  !*** ./js/modules/swiper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function swiper() {
  
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    // spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button_next',
      prevEl: '.swiper-button_prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

  });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tooltip() {
  
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

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltip);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getCardProduct": () => (/* binding */ getCardProduct)
/* harmony export */ });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-type": 'application/json' },
    body: data
  });

  return await res.json();
};

const getCardProduct = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Ошибка по адресу ${url}, status:${result.status}`);
  }

  return await res.json();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_anchors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/anchors */ "./js/modules/anchors.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion */ "./js/modules/accordion.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/reviews */ "./js/modules/reviews.js");
/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/swiper */ "./js/modules/swiper.js");
/* harmony import */ var _modules_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tooltip */ "./js/modules/tooltip.js");








window.addEventListener('DOMContentLoaded', () => {

  (0,_modules_anchors__WEBPACK_IMPORTED_MODULE_0__.default)();
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_1__.default)();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.default)('.modal', '[data-modal="modal-login"]');
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.default)('.modal', '[data-modal="modal-email"]');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__.default)('form', '.modal');
  (0,_modules_reviews__WEBPACK_IMPORTED_MODULE_4__.default)();
  (0,_modules_swiper__WEBPACK_IMPORTED_MODULE_5__.default)();
  (0,_modules_tooltip__WEBPACK_IMPORTED_MODULE_6__.default)();

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map