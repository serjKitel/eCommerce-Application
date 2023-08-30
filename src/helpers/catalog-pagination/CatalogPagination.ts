import { createElement } from '../../common/utils/createElement';
import { TAGS } from '../../common/constants/tags';
import { itemData } from '../../common/constants/itemData';
import { displayPage } from '../catalog-cards/CatalogCards';

export const CatalogPagination = () => {
  const buttonsContainer = createElement({
    tag: TAGS.div,
    className: 'catalog__pagination',
  });

  const btnLeft2 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide left2',
    textContent: '<<',
  });

  buttonsContainer.appendChild(btnLeft2);

  const btnLeft1 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide left1',
    textContent: '<',
  });

  buttonsContainer.appendChild(btnLeft1);

  const btnPageNumber = createElement({
    tag: TAGS.button,
    className: 'btn__page-number btn__catalog-slide',
    textContent: '1',
  });

  buttonsContainer.appendChild(btnPageNumber);

  const btnRight2 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide right1',
    textContent: '>',
  });

  buttonsContainer.appendChild(btnRight2);

  const btnRight1 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide right2',
    textContent: '>>',
  });

  buttonsContainer.appendChild(btnRight1);

  let currentPage = 1;
  const itemsPerPage = 9;
  const totalItems = itemData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const updatePageNumber = (pageNumber: number) => {
    if (btnPageNumber) {
      btnPageNumber.textContent = pageNumber.toString();
    }
  };

  const updatePaginationButtons = () => {
    if (currentPage === 1) {
      if (btnLeft1 !== null) {
        btnLeft1.classList.add('btn__disabled');
      }
      if (btnLeft2 !== null) {
        btnLeft2.classList.add('btn__disabled');
      }
    } else if (currentPage === totalPages) {
      if (btnRight1 !== null) {
        btnRight1.classList.add('btn__disabled');
      }
      if (btnRight2 !== null) {
        btnRight2.classList.add('btn__disabled');
      }
    } else {
      if (btnLeft1 !== null) {
        btnLeft1.classList.remove('btn__disabled');
      }
      if (btnLeft2 !== null) {
        btnLeft2.classList.remove('btn__disabled');
      }
      if (btnRight1 !== null) {
        btnRight1.classList.remove('btn__disabled');
      }
      if (btnRight2 !== null) {
        btnRight2.classList.remove('btn__disabled');
      }
    }
  };

  btnLeft1.addEventListener('click', () => {
    if (currentPage > 1) {
      const q = document.querySelector('.catalog__items') as HTMLElement;
      currentPage -= 1;
      updatePageNumber(currentPage);
      displayPage(q, currentPage);
      updatePaginationButtons();
    }
  });

  btnRight1.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage += 1;
      const q = document.querySelector('.catalog__items') as HTMLElement;
      updatePageNumber(currentPage);
      displayPage(q, currentPage);
      updatePaginationButtons();
    }
  });

  btnLeft2.addEventListener('click', () => {
    currentPage = 1;
		const q = document.querySelector('.catalog__items') as HTMLElement;
    updatePageNumber(currentPage);
    displayPage(q, currentPage);
    updatePaginationButtons();
  });

  btnRight2.addEventListener('click', () => {
    currentPage = totalPages;
		const q = document.querySelector('.catalog__items') as HTMLElement;
    updatePageNumber(currentPage);
   displayPage(q, currentPage);
    updatePaginationButtons();
  });

  return buttonsContainer;
};
