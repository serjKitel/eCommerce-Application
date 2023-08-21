// import { TAGS } from '@constants/tags';
// import { createElement } from '@utils/createElement';

import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const Input = (attr: { [key: string]: string }) => createElement({
  tag: TAGS.input,
  className: 'input',
  attributes: attr,
});
