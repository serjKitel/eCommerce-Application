import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';

export const ProductPage = () => {
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';

    const containerElement = createElement({
      tag: TAGS.div,
      className: 'container',
    });

    const mainInnerElement = createElement({
      tag: TAGS.div,
      className: 'main__inner',
    });

    const productContent = createElement({
      tag: TAGS.div,
      className: 'product__content',
    });

    const productDescription = createElement({
      tag: TAGS.div,
      className: 'product__description',
    });

    const productImgBlock = createElement({
      tag: TAGS.div,
      className: 'product__img-block',
    });

    const productImg = createElement({
      tag: TAGS.img,
      className: 'product__img',
      attributes: {
        src: './images/products/product-chair1.jpg',
        alt: '',
      },
    });

    const productImgCharacteristics = createElement({
      tag: TAGS.div,
      className: 'product__img-characteristics',
    });

    const productInfoElement = createElement({
      tag: TAGS.div,
      className: 'product__info',
    });

    productInfoElement.textContent = 'Подробная информация о продукте';

    productImgBlock.appendChild(productImg);
    productDescription.appendChild(productImgBlock);
    productDescription.appendChild(productImgCharacteristics);

    productContent.appendChild(productDescription);
    productContent.appendChild(productInfoElement);

    mainInnerElement.appendChild(productContent);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
