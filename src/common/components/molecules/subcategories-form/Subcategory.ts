import { getCatalog } from '../../../../commerceTools/catalog';
import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const SubcategoriesForm = () => {
  const form = createElement({
    tag: TAGS.form,
  });

  getCatalog().then((data) => {
    const subcategorysItems = data?.body.results;

    subcategorysItems?.forEach((subcategorysItem) => {

    });
  });
};
