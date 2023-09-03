import { Category } from '@commercetools/platform-sdk';
import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';
import { displayPage } from '../../../../helpers/catalog-cards/helper';

export enum NameInputs {
  categories = 'categories',
  subcategories = 'subcategories',
}

export const displayRadioInputs = (catalogItem: Category, categories: HTMLElement, name: string) => {
  const radioInput = createElement({
    tag: TAGS.input,
    attributes: {
      type: 'radio',
      name,
      id: catalogItem.slug['en-US'],
      value: catalogItem.id,
    },
  });

  const label = createElement({
    tag: TAGS.label,
    attributes: { for: catalogItem.slug['en-US'] },
    textContent: catalogItem.name['ru-BY'],
  });

  categories.appendChild(radioInput);
  categories.appendChild(label);
  categories.appendChild(document.createElement('br'));
};

export const changeCatalogRadioInputs = (
  catalogCards: HTMLElement, catalogRadioInput: HTMLElement, catalogItems: Category[],
) => {
  catalogCards.innerHTML = '';

  const radioInput = catalogRadioInput as HTMLInputElement;
  displayPage(catalogCards, radioInput.value);

  const subcategories = document.querySelector('.catalog__filters-sub-form') as HTMLElement;
  subcategories.innerHTML = '';

  catalogItems.forEach((catalogItem: Category) => {
    if (catalogItem.parent?.id === radioInput.value) {
      displayRadioInputs(catalogItem, subcategories, NameInputs.subcategories);
    }
  });
  const subcategoriesRadioInputs = document.getElementsByName(NameInputs.subcategories);
  subcategoriesRadioInputs.forEach((subcategoriesRadioInput) => {
    subcategoriesRadioInput.addEventListener('change', () => {
      const radioInputSub = subcategoriesRadioInput as HTMLInputElement;
      displayPage(catalogCards, radioInputSub.value);
    });
  });
};
