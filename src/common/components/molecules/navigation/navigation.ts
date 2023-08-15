import { createElement } from '../../../utils/createElement';
import { TAGS } from '../../../constants/tags';
import { HEADER_MENU_ITEMS } from './constants';
import { ulElement } from '../../atoms/ul-component/ulComponent';
import { navElement } from '../../atoms/nav-component/navComponent';
import { liElement } from '../../atoms/li-component/liComponent';

export const NavigationMenu = () => {
  HEADER_MENU_ITEMS.forEach((item) => {
    const aElement = createElement({
      tag: TAGS.a,
      className: 'nav__link',
      attributes: { href: item.href },
    });
    aElement.textContent = item.text;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  navElement.appendChild(ulElement);

  return navElement;
};
