import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';

export const formBtnAttr = {
  type: 'submit',
  form: 'form-auth',
};

export const formBtnPass = {
  type: 'button',
};

export const Button = (attr: { [key: string]: string }) => createElement({
  tag: TAGS.button,
  className: 'form__button button',
  attributes: attr,
});