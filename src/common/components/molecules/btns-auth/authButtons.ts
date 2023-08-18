import { createElement } from '@utils/createElement';
import { TAGS } from '@constants/tags';
import { Button, formBtnAttr } from '@atoms/button/button';
import { AUTH_BTN, REGISTATION } from '@constants/common';
import { Link } from '@atoms/link';

export const AuthButtons = () => {
  const btnsAuth = createElement({
    tag: TAGS.div,
    className: 'form__btns',
  });

  const buttonSubmit = Button(formBtnAttr);
  buttonSubmit.textContent = AUTH_BTN;

  const buttonReg = Link;
  buttonReg.textContent = REGISTATION;

  btnsAuth.appendChild(buttonReg);
  btnsAuth.appendChild(buttonSubmit);

  return btnsAuth;
};
