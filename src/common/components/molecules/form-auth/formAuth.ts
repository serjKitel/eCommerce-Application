import { isValidateEmail } from '@utils/ValidationEmail';
import { isValidatePassword } from '@utils/ValidationPassword';
import { labelAttrEmail, labelAttrPass } from '@atoms/label/label';
import { inputAttrEmail, inputAttrPass } from '@atoms/input/input';
import { LABEL_EMAIL, LABEL_PASS } from '@constants/common';
import { AuthButtons } from '@molecules/btns-auth';
import { ButtonPassword } from '@molecules/button-pass';
import { METHODS } from '@constants/methods';
import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';
import { InputBlock } from '@molecules/input-block';
import { removeErrorAuth } from '@utils/errorAuth';
// import { removeErrorAuth } from '@utils/errorAuth';

const formAttributes = {
  method: METHODS.post,
  id: 'form-auth',
};

export const FormAuth = () => {
  const formElement = createElement({
    tag: TAGS.form,
    className: 'form',
    attributes: formAttributes,
  });

  const btnsAuth = AuthButtons();
  const inputBlockEmail = InputBlock(labelAttrEmail, inputAttrEmail, LABEL_EMAIL);
  const inputBlockPass = InputBlock(labelAttrPass, inputAttrPass, LABEL_PASS);
  const btnPassword = ButtonPassword();

  inputBlockPass.appendChild(btnPassword);

  inputBlockEmail.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockEmail.querySelector('div');
    isValidateEmail(this.value, errorEl!);
    const formAuth = document.getElementById('form-auth');
    if (formAuth?.className === 'form error') {
      removeErrorAuth();
    }
  });

  inputBlockPass.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockPass.querySelector('div');
    const formAuth = document.getElementById('form-auth');
    isValidatePassword(this.value, errorEl!);
    if (formAuth?.className === 'form error') {
      removeErrorAuth();
    }
  });

  formElement.appendChild(inputBlockEmail);
  formElement.appendChild(inputBlockPass);
  formElement.appendChild(btnsAuth);

  return formElement;
};
