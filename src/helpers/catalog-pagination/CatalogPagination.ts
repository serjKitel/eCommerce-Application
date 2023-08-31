import { createElement } from '../../common/utils/createElement';
import { TAGS } from '../../common/constants/tags';
import { itemData } from '../../common/constants/itemData';
import { ITEMS_PER_PAGE } from '../../common/constants/common';
import { displayPage } from '../catalog-cards/helper';

export const CatalogPagination = () => {
  const buttonsContainer = createElement({
    tag: TAGS.div,
    className: 'catalog__pagination',
  });

  const btnLeft2 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide left2 btn__disabled',
    textContent: '<<',
  });

  buttonsContainer.appendChild(btnLeft2);

  const btnLeft1 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide left1 btn__disabled',
    textContent: '<',
  });

  buttonsContainer.appendChild(btnLeft1);

  const btnPageNumber = createElement({
    tag: TAGS.button,
    className: 'btn__page-number btn__catalog-slide',
    textContent: '1',
  });

  buttonsContainer.appendChild(btnPageNumber);

  const btnRight1 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide right1',
    textContent: '>',
  });

  buttonsContainer.appendChild(btnRight1);

  const btnRight2 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide right2',
    textContent: '>>',
  });

  buttonsContainer.appendChild(btnRight2);

  let currentPage = 1;
  const totalItems = itemData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const updatePageNumber = (pageNumber: number) => {
    if (btnPageNumber) {
      btnPageNumber.textContent = pageNumber.toString();
    }
  };

  const updatePaginationButtons = () => {
    if (currentPage === 1) {
      btnLeft1.classList.add('btn__disabled');
      btnLeft2.classList.add('btn__disabled');
      btnRight1.classList.remove('btn__disabled');
      btnRight2.classList.remove('btn__disabled');
    } else if (currentPage === totalPages) {
      btnLeft1.classList.remove('btn__disabled');
      btnLeft2.classList.remove('btn__disabled');
      btnRight1.classList.add('btn__disabled');
      btnRight2.classList.add('btn__disabled');
    } else {
      btnLeft1.classList.remove('btn__disabled');
      btnLeft2.classList.remove('btn__disabled');
      btnRight1.classList.remove('btn__disabled');
      btnRight2.classList.remove('btn__disabled');
    }
    updatePageNumber(currentPage);
  };

  btnLeft1.addEventListener('click', () => {
    if (currentPage > 1) {
      const cards = document.querySelector('.catalog__cards') as HTMLElement;
      currentPage -= 1;
      displayPage(cards, currentPage);
      updatePaginationButtons();
    }
  });

  btnRight1.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage += 1;
      const cards = document.querySelector('.catalog__cards') as HTMLElement;
      displayPage(cards, currentPage);
      updatePaginationButtons();
    }
  });

  btnLeft2.addEventListener('click', () => {
    currentPage = 1;
    const cards = document.querySelector('.catalog__cards') as HTMLElement;
    displayPage(cards, currentPage);
    updatePaginationButtons();
  });

  btnRight2.addEventListener('click', () => {
    currentPage = totalPages;
    const cards = document.querySelector('.catalog__cards') as HTMLElement;
    displayPage(cards, currentPage);
    updatePaginationButtons();
  });

  return buttonsContainer;
};
