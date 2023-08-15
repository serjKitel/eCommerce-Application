import { createElement } from '../../utils/createElement';
import { TAGS } from '../../constants/tags';
import { createHeaderLogo } from '../molecules/header-logo';
import { NavigationMenu } from '../molecules/navigation';
import { createHeaderLogIn } from '../molecules/header-log-in/headerLogIn';

export const createHeader = () => {
  const headerElement = createElement({
    tag: TAGS.header,
    className: 'header',
  });

  const containerElement = createElement({
    tag: TAGS.div,
    className: 'container',
  });

  const headerInnerElement = createElement({
    tag: TAGS.div,
    className: 'header__inner',
  });

  const headerLogoElement = createHeaderLogo();
  headerInnerElement.appendChild(headerLogoElement);

  const navigationElement = NavigationMenu();
  headerInnerElement.appendChild(navigationElement);

  containerElement.appendChild(headerInnerElement);
  headerElement.appendChild(containerElement);

  const headerLogInElement = createHeaderLogIn();
  headerInnerElement.appendChild(headerLogInElement);

  return headerElement;
};
