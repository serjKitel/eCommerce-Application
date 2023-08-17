import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

const attr = {
  href: '#',
};

export const linkElement = createElement({
  tag: TAGS.a,
  className: 'link',
  attributes: attr,
});
