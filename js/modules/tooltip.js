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

export default tooltip;