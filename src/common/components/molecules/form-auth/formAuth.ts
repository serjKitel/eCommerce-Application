import { isValidateEmail } from '@utils/validation/validationEmail';
import { isValidatePassword } from '@utils/validation/validationPassword';
import { labelAttrEmail, labelAttrPass } from '@atoms/label/consts';
import { inputAttrEmail, inputAttrPass } from '@atoms/input/consts';
import { LABEL_EMAIL, LABEL_PASS } from '@constants/common';
import { AuthButtons } from '@molecules/btns-auth';
import { ButtonPassword } from '@molecules/button-pass';
import { ERROR, METHODS } from '@constants/methods';
import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';
import { InputBlock } from '@molecules/input-block';
import { checkForm } from '@utils/validation/checkForm';
import { validateInput } from '@utils/validation/helpers';

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
  const inputBlockEmail = InputBlock(labelAttrEmail, inputAttrEmail, LABEL_EMAIL) as HTMLElement;
  const inputBlockPass = InputBlock(labelAttrPass, inputAttrPass, LABEL_PASS) as HTMLElement;
  const btnPassword = ButtonPassword();

  inputBlockPass.appendChild(btnPassword);

  let isEmail: boolean = false;
  let isPass: boolean = false;

  inputBlockEmail.querySelector('input')?.addEventListener('input', () => {
    isEmail = validateInput(inputBlockEmail, isValidateEmail);
    checkForm(ERROR.remove, isEmail, isPass);
  });

  inputBlockPass.querySelector('input')?.addEventListener('input', () => {
    isPass = validateInput(inputBlockPass, isValidatePassword);
    checkForm(ERROR.remove, isEmail, isPass);
  });

  formElement.appendChild(inputBlockEmail);
  formElement.appendChild(inputBlockPass);
  formElement.appendChild(btnsAuth);

  return formElement;
};
