import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';

export const ErrorInput = () => createElement({
  tag: TAGS.div,
  className: 'input__error',
});
