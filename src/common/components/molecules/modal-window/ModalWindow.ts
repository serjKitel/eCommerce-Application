import { createElement } from '../../../utils/createElement';
import { TAGS } from '../../../constants/tags';

export const ModalWindowSwiper = () => {
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
    // className: 'popup__content',
  });

  const swiperWrapper = createElement({
    tag: TAGS.div,
    className: 'swiper-wrapper',
  });

  const imagesModalSwiper = [
    './images/products/product-chair1.jpg',
    './images/products/product-chair2.jpg',
    './images/products/product-chair3.jpg',
  ];

  imagesModalSwiper.forEach((imageUrl) => {
    const imgBlockSwiper = createElement({
      tag: TAGS.div,
      className: 'popup__img-block swiper-slide',
    });

    const imgPopup = createElement({
      tag: TAGS.img,
      className: 'popup__img',
      attributes: {
        src: imageUrl,
        alt: '',
      },
    });

    imgBlockSwiper.appendChild(imgPopup);
    swiperWrapper.appendChild(imgBlockSwiper);
  });

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
      const overlay = document.querySelector('.overlay') as HTMLElement;

      if (popup && overlay) {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.classList.remove('no-scroll');
      }
    });
  }

  return popup;
};
