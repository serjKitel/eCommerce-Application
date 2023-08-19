// import { createHeader } from '../../common/components/organisms/header';
// eslint-disable-next-line import/no-relative-parent-imports

import { createElement } from '@utils/createElement';
import { TAGS } from '@constants/tags';
import { FormAuth } from '@molecules/form-auth';
import { authorizationFunc } from '../../commerceTools/authorization';

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

    innerTextElement.textContent = 'Страница для авторизации (Log In)';

    const formAuth = FormAuth();

    formAuth.addEventListener('submit', (event) => {
      event.preventDefault();

      const inputEmail = document.querySelector('[name="email"]') as HTMLInputElement;
      const inputPass = document.querySelector('[name="password"]') as HTMLInputElement;

      const USER = {
        email: inputEmail.value,
        password: inputPass.value,
      };

      const clientAuth = authorizationFunc(USER);
      clientAuth.then((data) => {
        console.log(data);
      });
    });

    mainInnerElement.appendChild(innerTextElement);
    mainInnerElement.appendChild(formAuth);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
