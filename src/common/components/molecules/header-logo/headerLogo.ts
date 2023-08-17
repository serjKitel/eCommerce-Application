import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';
// import { logoElement } from '../../atoms/logo-component/logoComponent';
import { logoElement } from '../../atoms/logo-component';

export const createHeaderLogo = () => {
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

  logoLinkElement.appendChild(logoElement);
  headerLogoElement.appendChild(logoLinkElement);

  return headerLogoElement;
};
