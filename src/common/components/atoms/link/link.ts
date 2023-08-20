import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';

export const attrReg = {
  href: '#registration',
};

export const attrAuth = {
  href: '#login',
};

export const Link = (attr: { [key: string]: string }) => createElement({
  tag: TAGS.a,
  className: 'link',
  attributes: attr,
});
