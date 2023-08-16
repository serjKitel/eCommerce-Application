import { createElement } from '../../../utils/createElement';
import { TAGS } from '../../../constants/tags';
import { createFormAuth } from '../../molecules/form-auth/form-auth';
import { title } from '../../atoms/title/title';
import { AUTH } from '../../../constants/common';

export const createMainAuth = () => {
  const mainElement = createElement({
    tag: TAGS.main,
    className: 'main',
  });

  const containerElement = createElement({
    tag: TAGS.div,
    className: 'container',
  });

  const mainInnerElement = createElement({
    tag: TAGS.div,
    className: 'main__inner',
  });

  const titleAuth = title;
  titleAuth.textContent = AUTH;

  const formAuth = createFormAuth();

  mainInnerElement.appendChild(titleAuth);
  mainInnerElement.appendChild(formAuth);
  containerElement.appendChild(mainInnerElement);
  mainElement.appendChild(containerElement);

  return mainElement;
};
