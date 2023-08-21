import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';

export const Link = (attr: { [key: string]: string }) => createElement({
  tag: TAGS.a,
  className: 'link',
  attributes: attr,
});
