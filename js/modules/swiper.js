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
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 1,
        // spaceBetween: 20
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 2,
        // spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        // spaceBetween: 40
      }
    }
  });

}

export default swiper;