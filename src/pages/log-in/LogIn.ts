// import { createElement } from '@utils/createElement';
// import { TAGS } from '@constants/tags';
// import { FormAuth } from '@molecules/form-auth';
// import { ERROR_AUTH_MSG } from '@constants/common';
// import { submitAuthForm } from './helpers';

import { FormAuth } from '../../common/components/molecules/form-auth';
import { ERROR_AUTH_MSG } from '../../common/constants/common';
import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { submitAuthForm } from './helpers';
import { BreadcrumbLogIn } from '../../common/components/molecules/breadcrumb-navigation-login/BreadcrumbLogIn';

export const LogInPage = () => {
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

    const error = createElement({
      tag: TAGS.p,
      className: 'main__error',
    });
    error.textContent = ERROR_AUTH_MSG;

    innerTextElement.textContent = 'Страница для авторизации';

    const formAuth = FormAuth();

    formAuth.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      submitAuthForm();
    });

    const navigationChain = BreadcrumbLogIn();

    mainInnerElement.appendChild(innerTextElement);
    mainInnerElement.appendChild(navigationChain);
    mainInnerElement.appendChild(error);
    mainInnerElement.appendChild(formAuth);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
