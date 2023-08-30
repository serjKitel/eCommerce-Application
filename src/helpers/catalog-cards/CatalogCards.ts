import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { CatalogPagination } from '../catalog-pagination';

export const CatalogCards = () => {
  const itemsCatalogContainer = createElement({
    tag: TAGS.div,
    className: 'catalog__items',
  });

  const cardsContainer = createElement({
    tag: TAGS.div,
    className: 'catalog__cards',
  });

  const paginationContainer = CatalogPagination();

  itemsCatalogContainer.append(cardsContainer);
  itemsCatalogContainer.append(paginationContainer);

  return itemsCatalogContainer;
};
