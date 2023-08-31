import { getCatalog } from '../../../../commerceTools/catalog';
import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const CategoriesForm = () => {
  const form = createElement({
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
            value: catalogItem.slug['en-US'],
          },
        });

        const label = createElement({
          tag: TAGS.label,
          attributes: { for: catalogItem.slug['en-US'] },
          textContent: catalogItem.name['ru-BY'],
        });

        form.appendChild(radioInput);
        form.appendChild(label);
        form.appendChild(document.createElement('br'));
      }
    });

    const catalogRadioInputs = document.getElementsByName('catalog');
    catalogRadioInputs.forEach((catalogRadioInput) => {
      catalogRadioInput.addEventListener('change', () => {
        const radioInput = catalogRadioInput as HTMLInputElement;
        console.log(radioInput);
      });
    });
  });

  return form;
};
