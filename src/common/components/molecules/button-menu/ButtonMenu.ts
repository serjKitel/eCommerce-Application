import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';
import { MenuComponent } from '@atoms/menu';

export const ButtonMenu = () => {
  const headerMenuElement = createElement({
    tag: TAGS.button,
    className: 'navbar',
    attributes: {
      type: 'button',
    },
  });

  headerMenuElement.appendChild(MenuComponent);

  headerMenuElement.addEventListener('click', () => {
    const navigationElement = document.querySelector('.header__navigation');
    if (navigationElement) {
      navigationElement.classList.toggle('active');
    }
  });

  return headerMenuElement;
};
