// import { IInputCheck } from '@types/commonTypes';
import { isLength, showMsgMinLength } from './validationLength';
import { ErrorsText } from './consts';
import { showErrors } from './helpers';
import { IInputCheck } from '../../types/commonTypes';

const isContainsLetter = (str: string) => {
  const re = /^[a-zA-Zа-яА-ЯёЁ]+$/;
  return re.test(str);
};

export const isValidateText = (data: IInputCheck) => {
  const errors: string[] = [];
  data.errorEl.innerHTML = '';
  data.number = 1;
  let isValid: boolean = true;

  if (!isLength(data.value, data.number)) {
    errors.push(showMsgMinLength(data.number));
    isValid = false;
  }

  if (!isContainsLetter(data.value)) {
    errors.push(ErrorsText.textLetter);
    isValid = false;
  }

  showErrors(errors, data.errorEl);
  return isValid;
};
