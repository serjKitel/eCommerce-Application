import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const ProductCharacteristics = () => {
  const productCharacteristics = createElement({
    tag: TAGS.div,
    className: 'product__characteristics',
  });

  const productName = createElement({
    tag: TAGS.div,
    className: 'product__name-block product__desc-block',
    textContent: 'Стул Jenny, черный',
  });

  const productPrice = createElement({
    tag: TAGS.div,
    className: 'product__price-block product__desc-block',
    textContent: '1$',
  });

  const productWidth = createElement({
    tag: TAGS.div,
    className: 'product__width product__desc-block',
    textContent: 'Ширина: 53 см',
  });

  const productDepth = createElement({
    tag: TAGS.div,
    className: 'product__depth product__desc-block',
    textContent: 'Глубина: 49,5 см',
  });

  const productHeight = createElement({
    tag: TAGS.div,
    className: 'product__height product__desc-block',
    textContent: 'Высота: 75 см',
  });

  const productSeatHeight = createElement({
    tag: TAGS.div,
    className: 'product__seat-height product__desc-block',
    textContent: 'Высота сиденья: 46.5 см',
  });

  const productUpholstery = createElement({
    tag: TAGS.div,
    className: 'product__upholstery product__desc-block',
    textContent: 'Обивка: Экокожа',
  });

  const productMaterial = createElement({
    tag: TAGS.div,
    className: 'product__material product__desc-block',
    textContent: 'Ножки: Дерево',
  });

  productCharacteristics.appendChild(productName);
  productCharacteristics.appendChild(productPrice);
  productCharacteristics.appendChild(productWidth);
  productCharacteristics.appendChild(productDepth);
  productCharacteristics.appendChild(productHeight);
  productCharacteristics.appendChild(productSeatHeight);
  productCharacteristics.appendChild(productUpholstery);
  productCharacteristics.appendChild(productMaterial);

  return productCharacteristics;
};
