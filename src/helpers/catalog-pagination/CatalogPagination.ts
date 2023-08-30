import { createElement } from '../../common/utils/createElement';
import { TAGS } from '../../common/constants/tags';

export const CatalogPagination = () => {
  const buttonsContainer = createElement({
    tag: TAGS.div,
    className: 'catalog__pagination',
  });

  const btnLeft2 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide left2',
    textContent: '<<',
  });

  buttonsContainer.appendChild(btnLeft2);

  const btnLeft1 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide left1',
    textContent: '<',
  });

  buttonsContainer.appendChild(btnLeft1);

  const btnPageNumber = createElement({
    tag: TAGS.button,
    className: 'btn__page-number btn__catalog-slide',
    textContent: '1',
  });

  buttonsContainer.appendChild(btnPageNumber);

  const btnRight2 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide right1',
    textContent: '>',
  });

  buttonsContainer.appendChild(btnRight2);

  const btnRight1 = createElement({
    tag: TAGS.button,
    className: 'btn__catalog-slide right2',
    textContent: '>>',
  });

  buttonsContainer.appendChild(btnRight1);

  return buttonsContainer;
};
