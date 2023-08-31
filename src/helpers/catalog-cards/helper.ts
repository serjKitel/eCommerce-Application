import { getProducts } from '../../commerceTools/products';
import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';

export const displayPage = (cardsContainer: HTMLElement, page: number = 1) => {
  cardsContainer.innerHTML = '';
  console.log(page);
  // const startIndex = (page - 1) * ITEMS_PER_PAGE;
  // const endIndex = startIndex + ITEMS_PER_PAGE;

  // const itemsToShow = itemData.slice(startIndex, endIndex);

  getProducts().then((data) => {
    const productsItems = data?.body.results;

    if (productsItems) {
      productsItems.forEach((productsItem) => {
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
            src: productsItem.masterData.staged.masterVariant.images![0].url,
            // alt: item.imgAlt,
          },
        });

        itemImgDiv.appendChild(itemImg);

        pdoductItemLink.appendChild(itemImgDiv);

        const nameDiv = createElement({
          tag: TAGS.div,
          className: 'catalog__item-name item__description',
          textContent: productsItem.masterData.current.name['ru-BY'],
        });

        pdoductItemLink.appendChild(nameDiv);

        // const itemSize = createElement({
        //   tag: TAGS.div,
        //   className: 'catalog__item-size item__description',
        //   textContent: item.itemSize,
        // });

        // pdoductItemLink.appendChild(itemSize);

        // const itemUpholstery = createElement({
        //   tag: TAGS.div,
        //   className: 'catalog__item-upholstery item__description',
        //   textContent: item.itemUpholstery,
        // });

        // pdoductItemLink.appendChild(itemUpholstery);

        // const itemMaterial = createElement({
        //   tag: TAGS.div,
        //   className: 'catalog__item-material item__description',
        //   textContent: item.itemMaterial,
        // });

        // pdoductItemLink.appendChild(itemMaterial);

        const itemPrice = createElement({
          tag: TAGS.div,
          className: 'catalog__item-price item__description',
          textContent: `
          ${productsItem.masterData.staged.masterVariant.prices![0].value.centAmount} 
          ${productsItem.masterData.staged.masterVariant.prices![0].value.currencyCode}`,
        });

        pdoductItemLink.appendChild(itemPrice);
        cardsContainer.appendChild(itemCardDiv);
      });
    }
  });
};
