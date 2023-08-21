// import { TAGS } from '@constants/tags';
// import { createElement } from '@utils/createElement';

import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const Button = (attr: { [key: string]: string }) => createElement({
  tag: TAGS.button,
  className: 'form__button button',
  attributes: attr,
});
