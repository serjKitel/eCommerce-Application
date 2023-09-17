import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const SubcategoriesForm = () => {
  const form = createElement({
    tag: TAGS.form,
    className: 'catalog__filters-sub-form',
  });

  return form;
};
