import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';

export const labelAttrEmail = {
  for: 'email',
};

export const labelAttrPass = {
  for: 'password',
};

export const LabelElement = (attr: { [key: string]: string }) => createElement({
  // move in Input
  tag: TAGS.label,
  className: 'label',
  attributes: attr,
});
