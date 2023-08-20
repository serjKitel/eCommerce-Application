import { isValidateEmail } from '@utils/ValidationEmail';
import { isValidatePassword } from '@utils/ValidationPassword';
import {
  labelAttrCountry,
  labelAttrDate, labelAttrEmail, labelAttrIndex, labelAttrName, labelAttrPass,
  labelAttrStreet, labelAttrSurname, labelAttrTown,
} from '@atoms/label/label';
import {
  inputAttrCountry,
  inputAttrDate, inputAttrEmail, inputAttrIndex, inputAttrName, inputAttrPass,
  inputAttrStreet, inputAttrSurname, inputAttrTown,
} from '@atoms/input/input';
import {
  LABEL_COUNTRY,
  LABEL_DATE, LABEL_EMAIL, LABEL_INDEX, LABEL_NAME, LABEL_PASS, LABEL_STREET, LABEL_SURNAME,
  LABEL_TOWN,
} from '@constants/common';
import { ButtonPassword } from '@molecules/button-pass';
import { ERROR, METHODS } from '@constants/methods';
import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';
import { InputBlock } from '@molecules/input-block';
import { checkForm } from '@utils/checkForm';
import { RegButtons } from '@molecules/btns-reg/regButtons';
import { isValidateText } from '@utils/validationText';
import { isValidateDate } from '@utils/validationDate';
import { isValidateLength } from '@utils/validationLength';

const formAttributes = {
  method: METHODS.post,
  id: 'form-reg',
};

export const FormReg = () => {
  const formElement = createElement({
    tag: TAGS.form,
    className: 'form',
    attributes: formAttributes,
  });

  const btnsAuth = RegButtons();
  const inputBlockEmail = InputBlock(labelAttrEmail, inputAttrEmail, LABEL_EMAIL);
  const inputBlockPass = InputBlock(labelAttrPass, inputAttrPass, LABEL_PASS);
  const inputBlockName = InputBlock(labelAttrName, inputAttrName, LABEL_NAME);
  const inputBlockSurname = InputBlock(labelAttrSurname, inputAttrSurname, LABEL_SURNAME);
  const inputBlockDate = InputBlock(labelAttrDate, inputAttrDate, LABEL_DATE);
  const inputBlockStreet = InputBlock(labelAttrStreet, inputAttrStreet, LABEL_STREET);
  const inputBlockTown = InputBlock(labelAttrTown, inputAttrTown, LABEL_TOWN);
  const inputBlockIndex = InputBlock(labelAttrIndex, inputAttrIndex, LABEL_INDEX);
  const inputBlockCountry = InputBlock(labelAttrCountry, inputAttrCountry, LABEL_COUNTRY);
  const btnPassword = ButtonPassword();

  inputBlockPass.appendChild(btnPassword);

  let isEmail: boolean = false;
  let isPass: boolean = false;
  let isName: boolean = false;
  let isSurname: boolean = false;
  let isDate: boolean = false;
  let isTown: boolean = false;
  let isStreet: boolean = false;
  let isCountry: boolean = false;
  let isInde: boolean = false;

  inputBlockEmail.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockEmail.querySelector('div');
    isEmail = isValidateEmail(this.value, errorEl!);
    checkForm(
      ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
    );
  });

  inputBlockPass.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockPass.querySelector('div');
    isPass = isValidatePassword(this.value, errorEl!);
    checkForm(
      ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
    );
  });

  inputBlockName.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockName.querySelector('div');
    isName = isValidateText(this.value, errorEl!);
    checkForm(
      ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
    );
  });

  inputBlockSurname.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockSurname.querySelector('div');
    isSurname = isValidateText(this.value, errorEl!);
    checkForm(
      ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
    );
  });

  inputBlockDate.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockDate.querySelector('div');
    isDate = isValidateDate(this.value, errorEl!);
    checkForm(
      ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
    );
  });

  inputBlockStreet.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockStreet.querySelector('div');
    isStreet = isValidateLength(this.value, errorEl!);
    checkForm(
      ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
    );
  });

  inputBlockTown.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockTown.querySelector('div');
    isTown = isValidateText(this.value, errorEl!);
    checkForm(
      ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
    );
  });

  inputBlockIndex.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockIndex.querySelector('div');
    isInde = isValidateLength(this.value, errorEl!);
    checkForm(
      ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
    );
  });

  inputBlockCountry.querySelector('input')?.addEventListener('input', function () {
    const errorEl = inputBlockCountry.querySelector('div');
    isCountry = isValidateText(this.value, errorEl!);
    checkForm(
      ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
    );
  });

  formElement.appendChild(inputBlockEmail);
  formElement.appendChild(inputBlockPass);
  formElement.appendChild(inputBlockName);
  formElement.appendChild(inputBlockSurname);
  formElement.appendChild(inputBlockDate);
  formElement.appendChild(inputBlockCountry);
  formElement.appendChild(inputBlockTown);
  formElement.appendChild(inputBlockStreet);
  formElement.appendChild(inputBlockIndex);
  formElement.appendChild(btnsAuth);

  return formElement;
};
