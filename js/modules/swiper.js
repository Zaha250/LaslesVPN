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

export default swiper;