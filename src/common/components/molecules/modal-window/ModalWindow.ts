import { Product } from '@commercetools/platform-sdk';
import { createElement } from '../../../utils/createElement';
import { TAGS } from '../../../constants/tags';

export const ModalWindowSwiper = (product: Product) => {
  const popup = createElement({
    tag: TAGS.div,
    className: 'popup',
  });

  const btnCross = createElement({
    tag: TAGS.div,
    className: 'btn__cross',
  });

  const crossButton = createElement({
    tag: TAGS.button,
    className: 'cross',
  });

  const lineCross1 = createElement({
    tag: TAGS.span,
    className: 'line__cross',
  });

  const lineCross2 = createElement({
    tag: TAGS.span,
    className: 'line__cross',
  });

  crossButton.appendChild(lineCross1);
  crossButton.appendChild(lineCross2);
  btnCross.appendChild(crossButton);

  const popupContent = createElement({
    tag: TAGS.div,
    className: 'popup__content swiper',
  });

  const swiperWrapper = createElement({
    tag: TAGS.div,
    className: 'swiper-wrapper',
  });

  const productImages = product.masterData.staged.masterVariant.images;

  if (productImages) {
    productImages.forEach((productImage) => {
      const imgBlockSwiper = createElement({
        tag: TAGS.div,
        className: 'popup__img-block swiper-slide',
      });

      const imgPopup = createElement({
        tag: TAGS.img,
        className: 'popup__img',
        attributes: {
          src: productImage.url,
          alt: product.masterData.current.name['en-US'],
        },
      });

      imgBlockSwiper.appendChild(imgPopup);
      swiperWrapper.appendChild(imgBlockSwiper);
    });
  }

  const pagination = createElement({
    tag: TAGS.div,
    className: 'swiper-pagination',
  });

  const prevButton = createElement({
    tag: TAGS.div,
    className: 'swiper-button-prev',
  });

  const nextButton = createElement({
    tag: TAGS.div,
    className: 'swiper-button-next',
  });

  popupContent.appendChild(swiperWrapper);
  popupContent.appendChild(pagination);
  popupContent.appendChild(prevButton);
  popupContent.appendChild(nextButton);

  popup.appendChild(btnCross);
  popup.appendChild(popupContent);

  if (crossButton) {
    crossButton.addEventListener('click', () => {
      if (popup) {
        popup.style.display = 'none';
      }
    });
  }

  return popup;
};
