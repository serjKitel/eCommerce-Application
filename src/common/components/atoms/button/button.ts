import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const formBtnAttr = {
  type: 'submit',
  form: 'form-auth',
};

export const buttonElement = (attr: { [key: string]: string }) => createElement({
  tag: TAGS.button,
  className: 'form__button button',
  attributes: attr,
});
