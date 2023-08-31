import { ITEMS_PER_PAGE } from '../../common/constants/common';
import { itemData } from '../../common/constants/itemData';
import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';

export const displayPage = (cardsContainer: HTMLElement, page: number = 1) => {
  cardsContainer.innerHTML = '';
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const itemsToShow = itemData.slice(startIndex, endIndex);

  itemsToShow.forEach((item) => {
    const itemCardDiv = createElement({
      tag: TAGS.div,
      className: 'catalog__item',
    });

    const pdoductItemLink = createElement({
      tag: TAGS.a,
      className: 'product__item-link',
      attributes: {
        href: '#product',
      },
    });

    itemCardDiv.appendChild(pdoductItemLink);

    const itemImgDiv = createElement({
      tag: TAGS.div,
      className: 'catalog__item-img',
    });

    const itemImg = createElement({
      tag: TAGS.img,
      className: 'card__img',
      attributes: {
        src: item.imgSrc,
        alt: item.imgAlt,
      },
    });

    itemImgDiv.appendChild(itemImg);

    pdoductItemLink.appendChild(itemImgDiv);

    const nameDiv = createElement({
      tag: TAGS.div,
      className: 'catalog__item-name item__description',
      textContent: item.name,
    });

    pdoductItemLink.appendChild(nameDiv);

    const itemSize = createElement({
      tag: TAGS.div,
      className: 'catalog__item-size item__description',
      textContent: item.itemSize,
    });

    pdoductItemLink.appendChild(itemSize);

    const itemUpholstery = createElement({
      tag: TAGS.div,
      className: 'catalog__item-upholstery item__description',
      textContent: item.itemUpholstery,
    });

    pdoductItemLink.appendChild(itemUpholstery);

    const itemMaterial = createElement({
      tag: TAGS.div,
      className: 'catalog__item-material item__description',
      textContent: item.itemMaterial,
    });

    pdoductItemLink.appendChild(itemMaterial);

    const itemPrice = createElement({
      tag: TAGS.div,
      className: 'catalog__item-price item__description',
      textContent: item.itemPrice,
    });

    pdoductItemLink.appendChild(itemPrice);
    // pdoductItemLink.appendChild(itemCardDiv);
    cardsContainer.appendChild(itemCardDiv);
    // cardsContainer.appendChild(itemCardDiv);
  });
};
