import { createElement } from '../../../utils/createElement';
import { TAGS } from '../../../constants/tags';
import { buttonElement } from '../../atoms/button';
import { formBtnAttr } from '../../atoms/button/button';
import { AUTH_BTN, REGISTATION } from '../../../constants/common';
import { linkElement } from '../../atoms/link';

export const createBtnsAuth = () => {
  const btnsAuth = createElement({
    tag: TAGS.div,
    className: 'form__btns',
  });

  const buttonSubmit = buttonElement(formBtnAttr);
  buttonSubmit.textContent = AUTH_BTN;

  const buttonReg = linkElement;
  buttonReg.textContent = REGISTATION;

  btnsAuth.appendChild(buttonReg);
  btnsAuth.appendChild(buttonSubmit);

  return btnsAuth;
};
