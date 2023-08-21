// import { createElement } from '@utils/createElement';
// import { TAGS } from '@constants/tags';
// import { Button } from '@atoms/button/button';
// import { AUTH_BTN, REGISTATION } from '@constants/common';
// import { Link } from '@atoms/link';
// import { formRegBtnAttr } from '@atoms/button/consts';
// import { attrAuth } from '@atoms/link/consts';

import { AUTH_BTN, REGISTATION } from '../../../constants/common';
import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';
import { Button } from '../../atoms/button';
import { formRegBtnAttr } from '../../atoms/button/consts';
import { Link } from '../../atoms/link';
import { attrAuth } from '../../atoms/link/consts';

export const RegButtons = () => {
  const btnsAuth = createElement({
    tag: TAGS.div,
    className: 'form__btns',
  });

  const buttonSubmit = Button(formRegBtnAttr);
  buttonSubmit.textContent = REGISTATION;

  const buttonReg = Link(attrAuth);
  buttonReg.textContent = AUTH_BTN;

  btnsAuth.appendChild(buttonReg);
  btnsAuth.appendChild(buttonSubmit);

  return btnsAuth;
};
