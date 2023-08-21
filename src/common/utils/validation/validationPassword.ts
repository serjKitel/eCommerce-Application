import { IInputCheck } from '@types/commonTypes';
import { isLength, showMsgMinLength } from './validationLength';
import { ErrorsPassword } from './consts';
import { showErrors } from './helpers';

const isContainsLowerLetter = (password: string): boolean => {
  const re = /[a-z]/g;
  return re.test(password);
};

const isContainsUpperLetter = (password: string): boolean => {
  const re = /[A-Z]/g;
  return re.test(password);
};

const isContainsNumber = (password: string): boolean => {
  const re = /[0-9]/g;
  return re.test(password);
};

const isContainsTrim = (password: string): boolean => password.includes(' ');

export const isValidatePassword = (data: IInputCheck): boolean => {
  const errors: string[] = [];
  let isValid: boolean = true;
  data.errorEl.innerHTML = '';
  data.number = 8;

  if (!isLength(data.value, data.number)) {
    errors.push(showMsgMinLength(data.number));
    isValid = false;
  }
  if (!isContainsLowerLetter(data.value)) {
    errors.push(ErrorsPassword.passwordLowerLetter);
    isValid = false;
  }
  if (!isContainsUpperLetter(data.value)) {
    errors.push(ErrorsPassword.passwordUpperLetter);
    isValid = false;
  }
  if (!isContainsNumber(data.value)) {
    errors.push(ErrorsPassword.passwordNumber);
    isValid = false;
  }
  if (isContainsTrim(data.value)) {
    errors.push(ErrorsPassword.passwordTrim);
    isValid = false;
  }

  showErrors(errors, data.errorEl);
  return isValid;
};
