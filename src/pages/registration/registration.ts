import { ERROR_AUTH_MSG } from '@constants/common';
import { TAGS } from '@constants/tags';
import { FormReg } from '@molecules/form-reg';
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

    const error = createElement({
      tag: TAGS.p,
      className: 'main__error',
    });
    error.textContent = ERROR_AUTH_MSG;

    innerTextElement.textContent = 'Страница для регистрации';

    const formReg = FormReg();

    mainInnerElement.appendChild(innerTextElement);
    mainInnerElement.appendChild(error);
    mainInnerElement.appendChild(formReg);
    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
