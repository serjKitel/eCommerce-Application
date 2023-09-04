import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { ProductCharacteristics } from '../../common/components/molecules/catalog-characteristics/ProductCharacteristics';
import { ProductImagesSwiper } from '../../common/components/molecules/product-swiper/ProductSwiper';
import { ModalWindowSwiper } from '../../common/components/molecules/modal-window/ModalWindow';
import { getProduct } from '../../commerceTools/product';
import { BreadcrumbProduct } from '../../common/components/molecules/breadcrumb-navigation-product/BreadcrumbProduct';

export const ProductPage = (key: string) => {
  const mainElement = document.querySelector('main');

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

  const overlay = createElement({
    tag: TAGS.div,
    className: 'overlay',
  });

  getProduct(key).then((data) => {
    if (mainElement && data) {
      mainElement.innerHTML = '';

      const navigationChain = BreadcrumbProduct(data.body);

      const productImgBlock = ProductImagesSwiper(data.body);
      productImgBlock.classList.add('swiper');

      const modalProductWindow = ModalWindowSwiper(data.body);

      const modalWindowOpen = productImgBlock.querySelectorAll('.product__img');

      const productCharacteristics = ProductCharacteristics(data.body);
      productDescription.appendChild(productImgBlock);
      productDescription.appendChild(productCharacteristics);

      productContent.appendChild(productDescription);
      productContent.appendChild(overlay);
      productContent.appendChild(modalProductWindow);

      mainInnerElement.appendChild(navigationChain);
      mainInnerElement.appendChild(productContent);
      containerElement.appendChild(mainInnerElement);
      mainElement.appendChild(containerElement);

      modalWindowOpen.forEach((modalWindow) => {
        modalWindow.addEventListener('click', () => {
          const popup = document.querySelector('.popup') as HTMLElement;
          if (popup && overlay) {
            popup.style.display = 'block';
            overlay.style.display = 'block';
            document.body.classList.add('no-scroll');
          }
        });
      });

      const mySwiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  });
};
