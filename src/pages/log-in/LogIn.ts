import { createElement } from '@utils/createElement';
import { TAGS } from '@constants/tags';
import { FormAuth } from '@molecules/form-auth';
import { ERROR_AUTH_MSG } from '@constants/common';
import { STATUS_CODE } from '@constants/methods';
import { authorizationFunc } from '../../commerceTools/authorization';
import { renderMainPage } from '../main/main';

function submitAuthForm(): void {
  const inputEmail = document.querySelector('[name="email"]') as HTMLInputElement;
  const inputPass = document.querySelector('[name="password"]') as HTMLInputElement;

  const USER = {
    email: inputEmail.value,
    password: inputPass.value,
  };

  const clientAuth = authorizationFunc(USER);

  clientAuth.then((data) => {
    if (data?.statusCode === STATUS_CODE.success) {
      renderMainPage();
      window.location.hash = '#home';
    }
  });
}

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

    const errorAuth = createElement({
      tag: TAGS.p,
      className: 'main__error',
    });
    errorAuth.textContent = ERROR_AUTH_MSG;

    innerTextElement.textContent = 'Страница для авторизации (Log In)';

    const formAuth = FormAuth();

    formAuth.addEventListener('submit', (event) => {
      event.preventDefault();
      submitAuthForm();
    });

    mainInnerElement.appendChild(innerTextElement);
    mainInnerElement.appendChild(errorAuth);
    mainInnerElement.appendChild(formAuth);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
