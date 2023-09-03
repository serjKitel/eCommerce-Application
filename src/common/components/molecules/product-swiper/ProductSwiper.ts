import { Product } from '@commercetools/platform-sdk';
import { createElement } from '../../../utils/createElement';
import { TAGS } from '../../../constants/tags';

export const ProductImagesSwiper = (product: Product) => {
  const imgBlockSwiper = createElement({
    tag: TAGS.div,
    className: 'product__img-block',
  });

  const swiperWrapper = createElement({
    tag: TAGS.div,
    className: 'swiper-wrapper',
  });

  const productImages = product.masterData.staged.masterVariant.images;

  if (productImages) {
    productImages.forEach((productImage) => {
      const slide = createElement({
        tag: TAGS.div,
        className: 'image-slider__slide swiper-slide',
      });

      const imgSwiper = createElement({
        tag: TAGS.img,
        className: 'product__img',
        attributes: {
          src: productImage.url,
          alt: product.masterData.current.name['en-US'],
        },
      });

      slide.appendChild(imgSwiper);
      swiperWrapper.appendChild(slide);
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

  imgBlockSwiper.appendChild(swiperWrapper);
  imgBlockSwiper.appendChild(pagination);
  imgBlockSwiper.appendChild(prevButton);
  imgBlockSwiper.appendChild(nextButton);

  return imgBlockSwiper;
};
