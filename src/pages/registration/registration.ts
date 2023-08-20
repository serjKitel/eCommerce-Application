import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';

export const renderRegistrationPage = () => {
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

    innerTextElement.textContent = 'Страница для регистрации';

    mainInnerElement.appendChild(innerTextElement);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
