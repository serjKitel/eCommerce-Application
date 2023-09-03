import { CustomerSignInResult } from '@commercetools/platform-sdk';
import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';

export let personData: CustomerSignInResult;

export const ProfilePage = () => {
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

    innerTextElement.textContent = 'Страница профиля';

    mainInnerElement.appendChild(innerTextElement);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
