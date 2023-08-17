import { createElement } from '../../../utils/createElement';
import { TAGS } from '../../../constants/tags';
import { METHODS } from '../../../constants/methods';
import { createInputBlock } from '../input-block';
import { labelAttrEmail, labelAttrPass } from '../../atoms/label/label';
import { inputAttrEmail, inputAttrPass } from '../../atoms/input/input';
import { LABEL_EMAIL, LABEL_PASS } from '../../../constants/common';
import { createBtnsAuth } from '../btns-auth/btns-auth';
import { isValidateEmaill } from '../../../utils/ValidationEmail';
import { isValidatePassword } from '../../../utils/ValidationPassword';
import { createBtnTogglePass } from '../button-pass/button.pass';
// import { createBtnTogglePass } from '../button-pass/button.pass';

const formAttributes = {
  method: METHODS.post,
  id: 'form-auth',
};

export const createFormAuth = () => {
  const formElement = createElement({
    tag: TAGS.form,
    className: 'form',
    attributes: formAttributes,
  });

  const btnsAuth = createBtnsAuth();
  const inputBlockEmail = createInputBlock(labelAttrEmail, inputAttrEmail, LABEL_EMAIL);
  const inputBlockPass = createInputBlock(labelAttrPass, inputAttrPass, LABEL_PASS);
  const btnPassword = createBtnTogglePass();

  inputBlockPass.appendChild(btnPassword);

  inputBlockEmail.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockEmail.querySelector('div');
    isValidateEmaill(this.value, errorEl!);
  });

  inputBlockPass.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockPass.querySelector('div');
    isValidatePassword(this.value, errorEl!);
  });

  formElement.appendChild(inputBlockEmail);
  formElement.appendChild(inputBlockPass);
  formElement.appendChild(btnsAuth);

  return formElement;
};
