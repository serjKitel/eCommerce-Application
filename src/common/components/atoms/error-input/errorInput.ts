import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

export const errorInputElement = () => createElement({
  tag: TAGS.div,
  className: 'input__error',
});
