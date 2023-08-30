import { itemData } from '../../common/constants/itemData';
import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { CatalogPagination } from '../catalog-pagination';

export const CatalogCards = () => {
  const itemsCatalogContainer = createElement({
    tag: TAGS.div,
    className: 'catalog__items',
  });

  const cardsContainer = createElement({
    tag: TAGS.div,
    className: 'catalog__cards',
  });

  const paginationContainer = CatalogPagination();

  itemsCatalogContainer.appendChild(cardsContainer);

  itemsCatalogContainer.appendChild(paginationContainer);

  const radioInputs = document.querySelectorAll('[name="choice"]');
  // console.log(radioInputs);
  // radioInputs.forEach((radioInput) => {
  //   radioInput.addEventListener('change', () => {
  //     const input = radioInput as HTMLInputElement;
  //     if (input.checked) {
  //       console.log(input.value);
  //     }
  //   });
  // });

  // displayPage(currentPage);

  return itemsCatalogContainer;
};

const itemsPerPage = 9;
export const displayPage = (cardsContainer: HTMLElement, page: number = 1) => {
  cardsContainer.innerHTML = '';
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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
