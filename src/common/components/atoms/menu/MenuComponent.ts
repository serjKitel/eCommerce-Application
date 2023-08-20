import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';
import { MENU_ALT_TEXT } from '@constants/common';

const menuAttributes = {
  src: './icons/menu6.svg',
  alt: MENU_ALT_TEXT,
};

export const MenuComponent = createElement({
  tag: TAGS.img,
  className: 'logo',
  attributes: menuAttributes,
});
