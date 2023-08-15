import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';
import { LOG_IN_ALT_TEXT } from '../../../constants/common';

const logInAttributes = {
  src: './icons/login.svg',
  alt: LOG_IN_ALT_TEXT,
};

export const logInElement = createElement({
  tag: TAGS.img,
  className: 'logo',
  attributes: logInAttributes,
});
