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

export default anchors;