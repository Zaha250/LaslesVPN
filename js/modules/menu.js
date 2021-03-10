function menuActive(menuEl, triggerEl, activeClass) {
  const menu = document.querySelector(menuEl),
        btnBurger = document.querySelector(triggerEl);

  function toggleActiveClass() {
    menu.classList.toggle(activeClass);
    btnBurger.classList.toggle(activeClass);

    document.body.style.overflow =
      (menu.classList.contains(activeClass)) ? 'hidden' : '';
  }      

  btnBurger.addEventListener('click', () => {
    toggleActiveClass();
  }); 
  
  menu.addEventListener('click', (e) => {
    if (menu.classList.contains(activeClass)
          && e.target.classList.contains('menu__link')
    ) {
      toggleActiveClass();
    } 
  });

}

export default menuActive;