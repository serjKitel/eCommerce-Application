// import { createElement } from '@utils/createElement';
// import { TAGS } from '@constants/tags';
// import { NavItem } from '@atoms/nav-item';
// import { HEADER_MENU_ITEMS } from './constants';

import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';
import { NavItem } from '../../atoms/nav-item';
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

  // const navLinks = document.querySelectorAll('.nav__link');

  navElement.addEventListener('click', () => {
    navElement.classList.remove('active');
  });

  document.addEventListener('click', (event) => {
    const { target } = event;

    if (target instanceof HTMLElement) {
      if (!target.closest('.header__navigation') && !target.closest('.nav__link') && !target.closest('.navbar')) {
        navElement.classList.remove('active');
      }
    }
  });

  return navElement;
};
