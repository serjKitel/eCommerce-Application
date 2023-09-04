import { CustomerSignInResult } from '@commercetools/platform-sdk';
import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { BreadcrumbProfile } from '../../common/components/molecules/breadcrumb-navigation-profile/BreadcrumbProfile';

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

    const navigationChain = BreadcrumbProfile();

    mainInnerElement.appendChild(innerTextElement);
    mainInnerElement.appendChild(navigationChain);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
