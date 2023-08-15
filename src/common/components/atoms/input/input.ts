import { CLASSES, TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const inputAttrEmail = {
  name: 'email',
  type: 'email',
  id: 'email',
};

export const inputAttrPass = {
  name: 'password',
  type: 'password',
  id: 'password',
};

export const inputElement = (attr: { [key: string]: string }) =>
  createElement({
    tag: TAGS.input,
    className: CLASSES.input,
    attributes: attr,
  });
