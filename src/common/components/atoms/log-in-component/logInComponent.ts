// import { TAGS } from '@constants/tags';
// import { createElement } from '@utils/createElement';
// import { LOG_IN_ALT_TEXT } from '@constants/common';

import { LOG_IN_ALT_TEXT } from '../../../constants/common';
import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

const logInAttributes = {
  src: './icons/login.svg',
  alt: LOG_IN_ALT_TEXT,
};

export const LogInComponent = createElement({
  tag: TAGS.img,
  className: 'logo', // TODO 'logo???'
  attributes: logInAttributes,
});
