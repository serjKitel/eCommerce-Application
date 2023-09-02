import { getCatalog } from '../../../../commerceTools/catalog';
import { displayPage } from '../../../../helpers/catalog-cards/helper';
import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const CategoriesForm = () => {
  const categories = createElement({
    tag: TAGS.form,
  });

  getCatalog().then((data) => {
    const catalogItems = data?.body.results;

    catalogItems?.forEach((catalogItem) => {
      if (!catalogItem.parent) {
        const radioInput = createElement({
          tag: TAGS.input,
          attributes: {
            type: 'radio',
            name: 'catalog',
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
      }
    });

    const catalogCards = document.querySelector('.catalog__cards') as HTMLElement;
    const catalogRadioInputs = document.getElementsByName('catalog');

    catalogRadioInputs.forEach((catalogRadioInput) => {
      catalogRadioInput.addEventListener('change', () => {
        const radioInput = catalogRadioInput as HTMLInputElement;
        displayPage(catalogCards, radioInput.value);

        catalogItems?.forEach((catalogItem) => {
          if (catalogItem.parent?.id === radioInput.value) {

          }
        });
      });
    });
  });

  return categories;
};
