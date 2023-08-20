import { createElement } from '@utils/createElement';
import { TAGS } from '@constants/tags';
import { Button, formBtnAttr } from '@atoms/button/button';
import { AUTH_BTN, REGISTATION } from '@constants/common';
import { Link } from '@atoms/link';
import { attrAuth } from '@atoms/link/link';

export const RegButtons = () => {
  const btnsAuth = createElement({
    tag: TAGS.div,
    className: 'form__btns',
  });

  const buttonSubmit = Button(formBtnAttr);
  buttonSubmit.textContent = REGISTATION;

  const buttonReg = Link(attrAuth);
  buttonReg.textContent = AUTH_BTN;

  btnsAuth.appendChild(buttonReg);
  btnsAuth.appendChild(buttonSubmit);

  return btnsAuth;
};
