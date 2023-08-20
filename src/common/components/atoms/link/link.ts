import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';

const attr = {
  href: '#registration',
};

export const Link = createElement({
  tag: TAGS.a,
  className: 'link',
  attributes: attr,
});
