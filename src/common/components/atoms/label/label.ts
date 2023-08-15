import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const labelAttrEmail = {
  for: 'email',
};

export const labelAttrPass = {
  for: 'password',
};

export const labelElement = (attr: { [key: string]: string }) =>
  createElement({
    tag: TAGS.label,
    className: 'label',
    attributes: attr,
  });
