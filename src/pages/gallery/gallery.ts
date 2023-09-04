// import { createElement } from '@utils/createElement';
// import { TAGS } from '@constants/tags';

import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { BreadcrumbGallery } from '../../common/components/molecules/breadcrumb-navigation-gallery/BreadcrumbGallery';

export const GalleryPage = () => {
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

    const innerTextElement = createElement({
      tag: TAGS.p,
      className: 'main__inner-text',
    });

    innerTextElement.textContent = 'Галерея';

    const navigationChain = BreadcrumbGallery();

    mainInnerElement.appendChild(innerTextElement);
    mainInnerElement.appendChild(navigationChain);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
