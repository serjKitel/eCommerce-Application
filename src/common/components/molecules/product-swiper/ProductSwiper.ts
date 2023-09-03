import { createElement } from '../../../utils/createElement';
import { TAGS } from '../../../constants/tags';

export const ProductImagesSwiper = () => {
  const imgBlockSwiper = createElement({
    tag: TAGS.div,
    // className: 'product__img-block swiper',
    className: 'product__img-block',
  });

  const swiperWrapper = createElement({
    tag: TAGS.div,
    className: 'swiper-wrapper',
  });

  const imagesSwiper = [
    './images/products/product-chair1.jpg',
    './images/products/product-chair2.jpg',
    './images/products/product-chair3.jpg',
  ];

  imagesSwiper.forEach((imageUrl) => {
    const slide = createElement({
      tag: TAGS.div,
      className: 'image-slider__slide swiper-slide',
    });

    const imgSwiper = createElement({
      tag: TAGS.img,
      className: 'product__img',
      attributes: {
        src: imageUrl,
        alt: 'product',
      },
    });

    slide.appendChild(imgSwiper);
    swiperWrapper.appendChild(slide);
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

  imgBlockSwiper.appendChild(swiperWrapper);
  imgBlockSwiper.appendChild(pagination);
  imgBlockSwiper.appendChild(prevButton);
  imgBlockSwiper.appendChild(nextButton);

  return imgBlockSwiper;
};
