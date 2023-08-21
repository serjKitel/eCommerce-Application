// import { TAGS } from '@constants/tags';
// import { createElement } from '@utils/createElement';

import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const LabelElement = (attr: { [key: string]: string }) => createElement({
  // move in Input
  tag: TAGS.label,
  className: 'label',
  attributes: attr,
});
