// import { TAGS } from '@constants/tags';
// import { createElement } from '@utils/createElement';
// import { Logo } from '@atoms/logo-component';

import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';
import { Logo } from '../../atoms/logo-component';

export const HeaderLogo = () => {
  const headerLogoElement = createElement({
    tag: TAGS.div,
    className: 'header__logo',
  });

  const logoLinkAttributes = {
    href: '#home',
  };

  const logoLinkElement = createElement({
    tag: TAGS.a,
    className: 'logo__link',
    attributes: logoLinkAttributes,
  });

  logoLinkElement.appendChild(Logo);
  headerLogoElement.appendChild(logoLinkElement);

  return headerLogoElement;
};
