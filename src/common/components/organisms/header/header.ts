import { createElement } from '@utils/createElement';
import { TAGS } from '@constants/tags';

import { NavigationMenu } from '@organism/navigation';
import { HeaderLogo } from '@organism/header-logo';
import { HeaderLogIn } from '@organism/header-log-in';

export const Header = () => {
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

  const headerLogoElement = HeaderLogo();
  headerInnerElement.appendChild(headerLogoElement);

  const navigationElement = NavigationMenu();
  headerInnerElement.appendChild(navigationElement);

  containerElement.appendChild(headerInnerElement);
  headerElement.appendChild(containerElement);

  const headerLogInElement = HeaderLogIn();
  headerInnerElement.appendChild(headerLogInElement);

  return headerElement;
};
