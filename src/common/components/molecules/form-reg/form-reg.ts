// import { isValidateEmail } from '@utils/validation/validationEmail';
// import { isValidatePassword } from '@utils/validation/validationPassword';
// import {
//   labelAttrCountry,
//   labelAttrDate,
//   labelAttrEmail,
//   labelAttrIndex,
//   labelAttrName,
//   labelAttrPass,
//   labelAttrStreet,
//   labelAttrSurname,
//   labelAttrTown,
// } from '@atoms/label/consts';
// import {
//   inputAttrCountry,
//   inputAttrDate,
//   inputAttrEmail,
//   inputAttrIndex,
//   inputAttrName,
//   inputAttrPass,
//   inputAttrStreet,
//   inputAttrSurname,
//   inputAttrTown,
// } from '@atoms/input/consts';
// import {
//   LABEL_COUNTRY,
//   LABEL_DATE,
//   LABEL_EMAIL,
//   LABEL_INDEX,
//   LABEL_NAME,
//   LABEL_PASS,
//   LABEL_STREET,
//   LABEL_SURNAME,
//   LABEL_TOWN,
// } from '@constants/common';
// import { ButtonPassword } from '@molecules/button-pass';
// import { ERROR, METHODS } from '@constants/methods';
// import { TAGS } from '@constants/tags';
// import { createElement } from '@utils/createElement';
// import { InputBlock } from '@molecules/input-block';
// import { checkForm } from '@utils/validation/checkForm';
// import { RegButtons } from '@molecules/btns-reg/regButtons';
// import { isValidateText } from '@utils/validation/validationText';
// import { isValidateDate } from '@utils/validation/validationDate';
// import { isValidateLength } from '@utils/validation/validationLength';
// import { validateInput } from '@utils/validation/helpers';

import {
  LABEL_COUNTRY, LABEL_DATE, LABEL_EMAIL, LABEL_INDEX, LABEL_NAME, LABEL_PASS, LABEL_STREET, LABEL_SURNAME, LABEL_TOWN,
} from '../../../constants/common';
import { ERROR, METHODS } from '../../../constants/methods';
import { TAGS } from '../../../constants/tags';
import { createElement } from '../../../utils/createElement';
import { checkForm } from '../../../utils/validation/checkForm';
import { validateInput } from '../../../utils/validation/helpers';
import { isValidateDate } from '../../../utils/validation/validationDate';
import { isValidateEmail } from '../../../utils/validation/validationEmail';
import { isValidateLength } from '../../../utils/validation/validationLength';
import { isValidatePassword } from '../../../utils/validation/validationPassword';
import { isValidateText } from '../../../utils/validation/validationText';
import {
  inputAttrCountry, inputAttrDate, inputAttrEmail, inputAttrIndex, inputAttrName,
  inputAttrPass, inputAttrStreet, inputAttrSurname, inputAttrTown,
} from '../../atoms/input/consts';
import {
  labelAttrCountry, labelAttrDate, labelAttrEmail, labelAttrIndex, labelAttrName, labelAttrPass,
  labelAttrStreet, labelAttrSurname, labelAttrTown,
} from '../../atoms/label/consts';
import { RegButtons } from '../btns-reg';
import { ButtonPassword } from '../button-pass';
import { InputBlock } from '../input-block';

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
  const inputBlockEmail = InputBlock(labelAttrEmail, inputAttrEmail, LABEL_EMAIL) as HTMLElement;
  const inputBlockPass = InputBlock(labelAttrPass, inputAttrPass, LABEL_PASS) as HTMLElement;
  const inputBlockName = InputBlock(labelAttrName, inputAttrName, LABEL_NAME) as HTMLElement;
  const inputBlockSurname = InputBlock(
    labelAttrSurname, inputAttrSurname, LABEL_SURNAME,
  ) as HTMLElement;
  const inputBlockDate = InputBlock(labelAttrDate, inputAttrDate, LABEL_DATE) as HTMLElement;
  const inputBlockStreet = InputBlock(
    labelAttrStreet, inputAttrStreet, LABEL_STREET,
  ) as HTMLElement;
  const inputBlockTown = InputBlock(
    labelAttrTown, inputAttrTown, LABEL_TOWN,
  ) as HTMLElement;
  const inputBlockIndex = InputBlock(labelAttrIndex, inputAttrIndex, LABEL_INDEX) as HTMLElement;
  const inputBlockCountry = InputBlock(
    labelAttrCountry, inputAttrCountry, LABEL_COUNTRY,
  ) as HTMLElement;
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

  inputBlockEmail.querySelector('input')
    ?.addEventListener('input', () => {
      isEmail = validateInput(inputBlockEmail, isValidateEmail);
      checkForm(
        ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
      );
    });

  inputBlockPass.querySelector('input')
    ?.addEventListener('input', () => {
      isPass = validateInput(inputBlockPass, isValidatePassword);
      checkForm(
        ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
      );
    });

  inputBlockName.querySelector('input')
    ?.addEventListener('input', () => {
      isName = validateInput(inputBlockName, isValidateText);
      checkForm(
        ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
      );
    });

  inputBlockSurname.querySelector('input')
    ?.addEventListener('input', () => {
      isSurname = validateInput(inputBlockSurname, isValidateText);
      checkForm(
        ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
      );
    });

  inputBlockDate.querySelector('input')
    ?.addEventListener('input', () => {
      isDate = validateInput(inputBlockDate, isValidateDate);
      checkForm(
        ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
      );
    });

  inputBlockStreet.querySelector('input')
    ?.addEventListener('input', () => {
      isStreet = validateInput(inputBlockStreet, isValidateLength);
      checkForm(
        ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
      );
    });

  inputBlockTown.querySelector('input')
    ?.addEventListener('input', () => {
      isTown = validateInput(inputBlockTown, isValidateText);
      checkForm(
        ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
      );
    });

  inputBlockIndex.querySelector('input')
    ?.addEventListener('input', () => {
      isInde = validateInput(inputBlockIndex, isValidateLength);
      checkForm(
        ERROR.remove, isEmail, isPass, isName, isSurname, isDate, isTown, isStreet, isCountry, isInde,
      );
    });

  inputBlockCountry.querySelector('input')
    ?.addEventListener('input', () => {
      isCountry = validateInput(inputBlockCountry, isValidateText);
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
