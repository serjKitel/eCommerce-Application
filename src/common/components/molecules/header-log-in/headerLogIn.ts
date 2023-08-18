import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';
import { logInElement } from '../../atoms/log-in-component';

export const createHeaderLogIn = () => {
  const headerLogInElement = createElement({
    tag: TAGS.div,
    className: 'header__log-in',
  });

  const logInLinkAttributes = {
    href: '#login',
  };

  const logInLinkElement = createElement({
    tag: TAGS.a,
    className: 'logo__link',
    attributes: logInLinkAttributes,
  });

  logInLinkElement.appendChild(logInElement);
  headerLogInElement.appendChild(logInLinkElement);

  return headerLogInElement;
};
