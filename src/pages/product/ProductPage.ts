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

    const productImgBlock = ProductImagesSwiper();
    productImgBlock.classList.add('swiper');

    const modalProductWindow = ModalWindowSwiper();

    const modalWindowOpen = productImgBlock.querySelectorAll('.product__img');
    // const modalWindowClose = productImgBlock.querySelector('.cross');

    modalWindowOpen.forEach((modalWindow) => {
      modalWindow.addEventListener('click', () => {
        const popup = document.querySelector('.popup') as HTMLElement;
        if (popup) {
          popup.style.display = 'block';
        }
      });
    });

    const productCharacteristics = ProductCharacteristics();

    const productInfoText = 'Стул Jenny черный создан по мотивам стиля 60-х. Обивка из экокожи. Ножки деревянные. '
      + 'Стулья Jenny украсят современный интерьер и лофт-пространство, непременно подойдут для стиля '
      + 'Mid Century Modern. Выразительные вогнутые формы спинки и сиденья привлекают внимание, '
      + 'поэтому композиция со стульями Jenny претендует на акцентную роль в интерьере. '
      + 'Мы рекомендуем комплектовать стулья Jenny со столами в оттенках ореха для интерьера в стиле '
      + 'Mid Century или со столами на ножках из черного металла и с деревянной столешницей для '
      + 'интерьера в стиле лофт.';

    const productInfo = createElement({
      tag: TAGS.div,
      className: 'product__info',
      textContent: productInfoText,
    });

    productDescription.appendChild(productImgBlock);
    productDescription.appendChild(productCharacteristics);

    productContent.appendChild(productDescription);
    productContent.appendChild(productInfo);
    productContent.appendChild(modalProductWindow);

    mainInnerElement.appendChild(productContent);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);

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
};
