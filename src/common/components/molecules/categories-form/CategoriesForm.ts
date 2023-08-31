import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const CategoriesForm = () => {
  const form = createElement({
    tag: TAGS.form,
  });

  const radioOptions = [
    {
      id: 'option1',
      name: 'choice',
      value: 'chair',
      label: 'Стулья',
    },
    {
      id: 'option2',
      name: 'choice',
      value: 'sofa',
      label: 'Диваны',
    },
    {
      id: 'option3',
      name: 'choice',
      value: 'table',
      label: 'Столы',
    },
  ];

  radioOptions.forEach((option) => {
    const radioInput = createElement({
      tag: TAGS.input,
      attributes: {
        type: 'radio',
        id: option.id,
        name: option.name,
        value: option.value,
      },
    });

    const label = createElement({
      tag: TAGS.label,
      attributes: { for: option.id },
      textContent: option.label,
    });

    form.appendChild(radioInput);
    form.appendChild(label);
    form.appendChild(document.createElement('br'));
  });

  return form;
};
