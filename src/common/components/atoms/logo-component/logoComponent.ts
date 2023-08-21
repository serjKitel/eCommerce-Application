// import { TAGS } from '@constants/tags';
// import { createElement } from '@utils/createElement';
// import { LOGO_ALT_TEXT } from '@constants/common';

import { LOGO_ALT_TEXT } from '../../../constants/common';
import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

const logoAttributes = {
  src: './icons/logo.svg',
  alt: LOGO_ALT_TEXT,
};

export const Logo = createElement({
  tag: TAGS.img,
  className: 'logo',
  attributes: logoAttributes,
});
