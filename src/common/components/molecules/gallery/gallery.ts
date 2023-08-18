import { createElement } from '../../../utils/createElement';
import { TAGS } from '../../../constants/tags';

export const createGalleryPage = () => {
  const mainElement = createElement({
    tag: TAGS.main,
  });

  const containerElement = createElement({
    tag: TAGS.div,
    className: 'container',
  });

  const mainInnerElement = createElement({
    tag: TAGS.div,
    className: 'main__inner',
  });

  const innerTextElement = createElement({
    tag: TAGS.p,
    className: 'main__inner-text',
  });

  innerTextElement.textContent = 'Галерея';

  mainInnerElement.appendChild(innerTextElement);
  containerElement.appendChild(mainInnerElement);
  mainElement.appendChild(containerElement);

  return mainElement;
};
