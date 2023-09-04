import { Product } from '@commercetools/platform-sdk';
import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const ProductCharacteristics = (product: Product) => {
  const productCharacteristics = createElement({
    tag: TAGS.div,
    className: 'product__characteristics',
  });

  if (product.masterData.current.name) {
    const productName = createElement({
      tag: TAGS.div,
      className: 'product__name-block product__desc-block',
      textContent: `${product.masterData.current.name['ru-BY']}`,
    });
    productCharacteristics.appendChild(productName);
  }

  if (product.masterData.staged.masterVariant.prices) {
    const productPrice = createElement({
      tag: TAGS.div,
      className: 'product__desc-block',
      textContent: `Цена: 
                ${product.masterData.staged.masterVariant.prices[0].value.centAmount / 100} 
                ${product.masterData.staged.masterVariant.prices[0].value.currencyCode}`,
    });
    productCharacteristics.appendChild(productPrice);
  }

  if (product.masterData.current.description) {
    const productInfo = createElement({
      tag: TAGS.div,
      className: 'product__desc-block',
      textContent: `Описание: ${product.masterData.current.description!['ru-BY']}`,
    });
    productCharacteristics.appendChild(productInfo);
  }

  return productCharacteristics;
};
