import { isValidateEmail } from '@utils/ValidationEmail';
import { isValidatePassword } from '@utils/ValidationPassword';
import { labelAttrEmail, labelAttrPass } from '@atoms/label/label';
import { inputAttrEmail, inputAttrPass } from '@atoms/input/input';
import { LABEL_EMAIL, LABEL_PASS } from '@constants/common';
import { AuthButtons } from '@molecules/btns-auth';
import { ButtonPassword } from '@molecules/button-pass';
import { ERROR, METHODS } from '@constants/methods';
import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';
import { InputBlock } from '@molecules/input-block';
import { checkForm } from '@utils/checkForm';

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

  let isEmail: boolean = false;
  let isPass: boolean = false;

  inputBlockEmail.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockEmail.querySelector('div');
    isEmail = isValidateEmail(this.value, errorEl!);
    checkForm(ERROR.remove, isEmail, isPass);
  });

  inputBlockPass.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockPass.querySelector('div');
    isPass = isValidatePassword(this.value, errorEl!);
    checkForm(ERROR.remove, isEmail, isPass);
  });

  formElement.appendChild(inputBlockEmail);
  formElement.appendChild(inputBlockPass);
  formElement.appendChild(btnsAuth);

  return formElement;
};
