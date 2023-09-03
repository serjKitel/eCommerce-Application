import { getCatalog } from '../../../../commerceTools/catalog';
import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';
import { NameInputs, changeCatalogRadioInputs, displayRadioInputs } from './helpers';

export const CategoriesForm = () => {
  const categories = createElement({
    tag: TAGS.form,
    className: 'catalog__filters-form',
  });

  getCatalog().then((data) => {
    const catalogItems = data?.body.results;

    catalogItems?.forEach((catalogItem) => {
      if (!catalogItem.parent) {
        displayRadioInputs(catalogItem, categories, NameInputs.categories);
      }
    });

    const catalogCards = document.querySelector('.catalog__cards') as HTMLElement;
    const catalogRadioInputs = document.getElementsByName(NameInputs.categories);

    catalogRadioInputs.forEach((catalogRadioInput) => {
      catalogRadioInput.addEventListener('change', () => {
        changeCatalogRadioInputs(catalogCards, catalogRadioInput, catalogItems!);
      });
    });
  });

  return categories;
};
