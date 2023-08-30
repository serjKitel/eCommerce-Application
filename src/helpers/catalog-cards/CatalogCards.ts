import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { CatalogPagination } from '../catalog-pagination';

export const CatalogCards = () => {
  const itemsPerPage = 9;
  let currentPage = 1;

  const itemsCatalogContainer = createElement({
    tag: TAGS.div,
    className: 'catalog__items',
  });

  const cardsContainer = createElement({
    tag: TAGS.div,
    className: 'catalog__cards',
  });

  const itemData = [
    {
      furniture: 'chair',
      imgSrc: './images/стул1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'chair',
      imgSrc: './images/стул1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'chair',
      imgSrc: './images/стул1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'chair',
      imgSrc: './images/стул1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'chair',
      imgSrc: './images/стул1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'chair',
      imgSrc: './images/стул1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'chair',
      imgSrc: './images/стул1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'chair',
      imgSrc: './images/стул1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'chair',
      imgSrc: './images/стул1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'sofa',
      imgSrc: './images/диван1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'sofa',
      imgSrc: './images/диван1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'sofa',
      imgSrc: './images/диван1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'sofa',
      imgSrc: './images/диван1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'sofa',
      imgSrc: './images/диван1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'sofa',
      imgSrc: './images/диван1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'sofa',
      imgSrc: './images/диван1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'sofa',
      imgSrc: './images/диван1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'sofa',
      imgSrc: './images/диван1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'table',
      imgSrc: './images/столЖурнальный1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'table',
      imgSrc: './images/столЖурнальный1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'table',
      imgSrc: './images/столЖурнальный1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'table',
      imgSrc: './images/столЖурнальный1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'table',
      imgSrc: './images/столЖурнальный1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'table',
      imgSrc: './images/столЖурнальный1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'table',
      imgSrc: './images/столЖурнальный1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'table',
      imgSrc: './images/столЖурнальный1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },
    {
      furniture: 'table',
      imgSrc: './images/столЖурнальный1.jpg',
      imgAlt: 'стул1',
      name: 'Стул Jenny, черный',
      itemSize: 'ШxГxВ: 53x49x75',
      itemUpholstery: 'Материал обивки: Экокожа',
      itemMaterial: 'Материал ножек: Дерево',
      itemPrice: '1$',
    },

  ];

  const totalItems = itemData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationContainer = CatalogPagination();

  const btnLeft1 = paginationContainer.querySelector('.left1');
  const btnRight1 = paginationContainer.querySelector('.right1');
  const btnLeft2 = paginationContainer.querySelector('.left2');
  const btnRight2 = paginationContainer.querySelector('.right2');
  const pageNumberButton = paginationContainer.querySelector('.btn__page-number');

  const displayPage = (page: number) => {
    cardsContainer.innerHTML = '';
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (page === 1) {
      if (btnLeft1 !== null) {
        btnLeft1.classList.add('btn__disabled');
      }
      if (btnLeft2 !== null) {
        btnLeft2.classList.add('btn__disabled');
      }
      if (btnLeft1 !== null) {
        btnLeft1.classList.remove('left1');
      }
      if (btnLeft2 !== null) {
        btnLeft2.classList.remove('left2');
      }
    } else {
      if (btnLeft1 !== null) {
        btnLeft1.classList.remove('btn__disabled');
      }
      if (btnLeft2 !== null) {
        btnLeft2.classList.remove('btn__disabled');
      }
      if (btnLeft1 !== null) {
        btnLeft1.classList.add('left1');
      }
      if (btnLeft2 !== null) {
        btnLeft2.classList.add('left2');
      }
    }

    if (page === totalPages) {
      if (btnRight1 !== null) {
        btnRight1.classList.add('btn__disabled');
      }
      if (btnRight2 !== null) {
        btnRight2.classList.add('btn__disabled');
      }

      if (btnRight1 !== null) {
        btnRight1.classList.remove('right1');
      }

      if (btnRight2 !== null) {
        btnRight2.classList.remove('right2');
      }
    } else {
      if (btnRight1 !== null) {
        btnRight1.classList.remove('btn__disabled');
      }
      if (btnRight2 !== null) {
        btnRight2.classList.remove('btn__disabled');
      }

      if (btnRight1 !== null) {
        btnRight1.classList.add('right1');
      }

      if (btnRight2 !== null) {
        btnRight2.classList.add('right2');
      }
    }

    const itemsToShow = itemData.slice(startIndex, endIndex);

    itemsToShow.forEach((item) => {
      const itemCardDiv = createElement({
        tag: TAGS.div,
        className: 'catalog__item',
      });

      const itemImgDiv = createElement({
        tag: TAGS.div,
        className: 'catalog__item-img',
      });
      const itemImg = createElement({
        tag: TAGS.img,
        attributes: {
          src: item.imgSrc,
          alt: item.imgAlt,
        },
      });
      itemImgDiv.appendChild(itemImg);

      itemCardDiv.appendChild(itemImgDiv);

      const nameDiv = createElement({
        tag: TAGS.div,
        className: 'catalog__item-name item__description',
        textContent: item.name,
      });

      itemCardDiv.appendChild(nameDiv);

      const itemSize = createElement({
        tag: TAGS.div,
        className: 'catalog__item-size item__description',
        textContent: item.itemSize,
      });

      itemCardDiv.appendChild(itemSize);

      const itemUpholstery = createElement({
        tag: TAGS.div,
        className: 'catalog__item-upholstery item__description',
        textContent: item.itemUpholstery,
      });

      itemCardDiv.appendChild(itemUpholstery);

      const itemMaterial = createElement({
        tag: TAGS.div,
        className: 'catalog__item-material item__description',
        textContent: item.itemMaterial,
      });

      itemCardDiv.appendChild(itemMaterial);

      const itemPrice = createElement({
        tag: TAGS.div,
        className: 'catalog__item-price item__description',
        textContent: item.itemPrice,
      });

      itemCardDiv.appendChild(itemPrice);

      cardsContainer.appendChild(itemCardDiv);
    });
  };

  itemsCatalogContainer.appendChild(cardsContainer);

  itemsCatalogContainer.appendChild(paginationContainer);

  displayPage(currentPage);

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

  const updatePageNumber = (pageNumber: number) => {
    if (pageNumberButton) {
      pageNumberButton.textContent = pageNumber.toString();
    }
  };

  if (btnLeft1 !== null) {
    btnLeft1.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage -= 1;
        updatePageNumber(currentPage);
        displayPage(currentPage);
        updatePaginationButtons();
      }
    });
  }

  if (btnRight1 !== null) {
    btnRight1.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage += 1;
        updatePageNumber(currentPage);
        displayPage(currentPage);
        updatePaginationButtons();
      }
    });
  }

  if (btnLeft2 !== null) {
    btnLeft2.addEventListener('click', () => {
      currentPage = 1;
      updatePageNumber(currentPage);
      displayPage(currentPage);
      updatePaginationButtons();
    });
  }

  if (btnRight2 !== null) {
    btnRight2.addEventListener('click', () => {
      currentPage = totalPages;
      updatePageNumber(currentPage);
      displayPage(currentPage);
      updatePaginationButtons();
    });
  }

  return itemsCatalogContainer;
};
