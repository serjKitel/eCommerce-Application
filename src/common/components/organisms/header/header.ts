// import { createElement } from '@utils/createElement';
// import { TAGS } from '@constants/tags';

import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';
import { HeaderLogIn } from '../../molecules/header-log-in';
import { HeaderLogo } from '../../molecules/header-logo';
import { NavigationMenu } from '../../molecules/navigation';
import { ButtonMenu } from '../../molecules/button-menu';

// import { NavigationMenu } from '@molecules/navigation';
// import { HeaderLogo } from '@molecules/header-logo';
// import { HeaderLogIn } from '@molecules/header-log-in';

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

  const buttonMenuElement = ButtonMenu();
  headerInnerElement.appendChild(buttonMenuElement);

  containerElement.appendChild(headerInnerElement);
  headerElement.appendChild(containerElement);

  const headerLogInElement = HeaderLogIn();
  headerInnerElement.appendChild(headerLogInElement);

  return headerElement;
};
