// import { ERROR_AUTH_MSG } from '@constants/common';
// import { TAGS } from '@constants/tags';
// import { FormReg } from '@molecules/form-reg';
// import { createElement } from '@utils/createElement';
// import { submitRegForm } from './helpers';

import { FormReg } from '../../common/components/molecules/form-reg';
import { ERROR_AUTH_MSG } from '../../common/constants/common';
import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { submitRegForm } from './helpers';
import { BreadcrumbRegistration } from '../../common/components/molecules/breadcrumb-navigation-registration/BreadcrumbRegistration';

export const RegistrationPage = () => {
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

    innerTextElement.textContent = 'Страница для регистрации';

    const navigationChain = BreadcrumbRegistration();

    const formReg = FormReg();
    formReg.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      submitRegForm();
    });

    mainInnerElement.appendChild(innerTextElement);
    mainInnerElement.appendChild(navigationChain);
    mainInnerElement.appendChild(error);
    mainInnerElement.appendChild(formReg);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
