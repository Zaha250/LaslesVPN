function accordion() {
  
  const footerNav = document.querySelector('.footer-nav');

  footerNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('footer-nav__item')) {
      e.target.classList.toggle('active');
      // e.target.nextSibling.style.maxHeight = e.target.nextSibling.scrollHeight + 'px';
    } else return;
  });

}

export default accordion;