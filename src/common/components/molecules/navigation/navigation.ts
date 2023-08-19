import { createElement } from '@utils/createElement';
import { TAGS } from '@constants/tags';
import { NavItem } from '@atoms/nav-item';
import { HEADER_MENU_ITEMS } from './constants';

export const NavigationMenu = () => {
  const navElement = createElement({
    tag: TAGS.nav,
    className: 'header__navigation',
  });

  const ulElement = createElement({
    tag: TAGS.ul,
    className: 'navigation',
  });

  HEADER_MENU_ITEMS.forEach((item) => {
    const aElement = createElement({
      tag: TAGS.a,
      className: 'nav__link',
      attributes: { href: item.href },
    });
    aElement.textContent = item.text;
    NavItem.appendChild(aElement);
    ulElement.appendChild(NavItem);
  });

  navElement.appendChild(ulElement);

  return navElement;
};
