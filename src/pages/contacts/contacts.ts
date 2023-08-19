import { createElement } from '@utils/createElement';
import { TAGS } from '@constants/tags';

export const renderContactsPage = () => {
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';

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

    innerTextElement.textContent = 'Наши контакты';

    mainInnerElement.appendChild(innerTextElement);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};