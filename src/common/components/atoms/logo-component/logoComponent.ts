import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';

const logoAttributes = {
  src: './icons/logo.svg',
  alt: 'logo',
};

export const logoElement = createElement({
  tag: TAGS.img,
  className: 'logo',
  attributes: logoAttributes,
});
