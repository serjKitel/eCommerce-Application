// import { TAGS } from '@constants/tags';
// import { createElement } from '@utils/createElement';

import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { CategoriesForm } from '../../common/components/molecules/categories-form/CategoriesForm';
// import { CatalogItems } from '../../helpers/catalog-items/CatalogItems';
import { CatalogCards } from '../../helpers/catalog-cards';

export const CatalogPage = () => {
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

    const navigationChainElement = createElement({
      tag: 'div',
      className: 'catalog__navigation-chain',
    });

    navigationChainElement.textContent = 'Главная / Каталог';

    const contentElement = createElement({
      tag: 'div',
      className: 'catalog__content',
    });

    const filtersElement = createElement({
      tag: 'div',
      className: 'catalog__filters',
    });

    const categoriesFormElement = CategoriesForm();
    filtersElement.appendChild(categoriesFormElement);

    mainInnerElement.appendChild(navigationChainElement);
    contentElement.appendChild(filtersElement);

    const catalogCards = CatalogCards();
    contentElement.appendChild(catalogCards);

    mainInnerElement.appendChild(contentElement);

    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
