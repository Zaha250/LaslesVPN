function anchors() {

  document.querySelectorAll('[data-href]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();

      const nav = document.querySelector('.header__nav'),
            heightNav = window.getComputedStyle(nav).height;

      const href = anchor.dataset.href.substring(1);

      const sectionId = document.getElementById(href);

      const sectionPosition = sectionId.getBoundingClientRect().top;

      window.scrollBy({
        top: sectionPosition - parseFloat(heightNav),
        behavior: 'smooth'
      });
    });
  });
  
}

export default anchors;