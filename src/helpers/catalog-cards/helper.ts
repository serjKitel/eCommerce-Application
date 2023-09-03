import { Product } from '@commercetools/platform-sdk';
import { getProducts } from '../../commerceTools/products';
// import { ITEMS_PER_PAGE } from '../../common/constants/common';
import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';

const displayCards = (cardsContainer: { appendChild: (arg0: HTMLElement) => void }, productsItem: Product) => {
  if (productsItem.masterData.published) {
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

    if (productsItem.masterData.staged.masterVariant.images) {
      const itemImgDiv = createElement({
        tag: TAGS.div,
        className: 'catalog__item-img',
      });

      const itemImg = createElement({
        tag: TAGS.img,
        className: 'card__img',
        attributes: {
          src: productsItem.masterData.staged.masterVariant.images[0].url,
          alt: productsItem.masterData.current.name['en-US'],
        },
      });

      itemImgDiv.appendChild(itemImg);

      pdoductItemLink.appendChild(itemImgDiv);
    }

    if (productsItem.masterData.current.name) {
      const nameDiv = createElement({
        tag: TAGS.div,
        className: 'catalog__item-name item__description',
        textContent: productsItem.masterData.current.name['ru-BY'],
      });

      pdoductItemLink.appendChild(nameDiv);
    }

    if (productsItem.masterData.current.description) {
      const itemDesc = createElement({
        tag: TAGS.div,
        className: 'catalog__item-size item__description',
        textContent: productsItem.masterData.current.description!['ru-BY'],
      });

      pdoductItemLink.appendChild(itemDesc);
    }

    if (productsItem.masterData.staged.masterVariant.prices![0].value.centAmount) {
      const itemPrice = createElement({
        tag: TAGS.div,
        className: 'catalog__item-price item__description',
        textContent: `
                ${productsItem.masterData.staged.masterVariant.prices![0].value.centAmount / 100} 
                ${productsItem.masterData.staged.masterVariant.prices![0].value.currencyCode}`,
      });

      pdoductItemLink.appendChild(itemPrice);
    }

    cardsContainer.appendChild(itemCardDiv);
  }
};

export const displayPage = (cardsContainer: HTMLElement, category?: string) => {
  cardsContainer.innerHTML = '';
  // const startIndex = (page - 1) * ITEMS_PER_PAGE;
  // const endIndex = startIndex + ITEMS_PER_PAGE;

  getProducts().then((data) => {
    const productsItems = data?.body.results;
    // const itemsToShow = productsItems!.slice(startIndex, endIndex);

    if (productsItems) {
      productsItems.forEach((productsItem) => {
        if (category) {
          for (let i = 0; i < productsItem.masterData.current.categories.length; i += 1) {
            if (productsItem.masterData.current.categories[i].id === category) {
              displayCards(cardsContainer, productsItem);
            }
          }
        } else {
          displayCards(cardsContainer, productsItem);
        }
      });
    }
  });
};
