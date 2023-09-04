// import { TAGS } from '@constants/tags';
// import { createElement } from '@utils/createElement';

import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { CategoriesForm } from '../../common/components/molecules/categories-form/CategoriesForm';
import { CatalogCards } from '../../helpers/catalog-cards';
import { displayPage } from '../../helpers/catalog-cards/helper';
import { SubcategoriesForm } from '../../common/components/molecules/subcategories-form';
import { BreadcrumbCatalog } from '../../common/components/molecules/breadcrumb-navigation-catalog/BreadcrumbCatalog';

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

    const navigationChain = BreadcrumbCatalog();

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

    const subcategoriesFormElement = SubcategoriesForm();
    filtersElement.appendChild(subcategoriesFormElement);

    mainInnerElement.appendChild(navigationChain);
    contentElement.appendChild(filtersElement);

    const catalogItems = CatalogCards();
    contentElement.appendChild(catalogItems);

    const catalogCards = catalogItems.querySelector('.catalog__cards') as HTMLElement;
    displayPage(catalogCards);

    mainInnerElement.appendChild(contentElement);

    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
