import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const inputAttrEmail = {
  name: 'email',
  type: 'email',
  id: 'email',
  required: 'required',
};

export const inputAttrPass = {
  name: 'password',
  type: 'password',
  id: 'password',
  required: 'required',
  autocomplete: 'off',
};

export const inputElement = (attr: { [key: string]: string }) => createElement({
  tag: TAGS.input,
  className: 'input',
  attributes: attr,
});
