import { createElement } from '@utils/createElement';
import { TAGS } from '@constants/tags';
import { FormAuth } from '@organism/form-auth';

export const LoginPage = () => {
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

  innerTextElement.textContent = 'Страница для авторизации (Log In)';

  const formAuth = FormAuth();
  mainInnerElement.appendChild(innerTextElement);
  mainInnerElement.appendChild(formAuth);
  containerElement.appendChild(mainInnerElement);
  mainElement.appendChild(containerElement);

  return mainElement;
};
