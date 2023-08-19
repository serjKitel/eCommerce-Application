import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';

enum ErrorsPassword {
  passwordLength = '\nПароль должен быть не менее 8 символов',
  passwordUpperLetter = '\nПароль должен содержать хотя бы одну заглавную букву (AZ)',
  passwordLowerLetter = '\nПароль должен содержать хотя бы одну строчную букву (az)',
  passwordNumber = '\nПароль должен содержать как минимум одну цифру (0-9)',
  passwordTrim = '\nПароль не должен содержать начальные или конечные пробелы',
}

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

const isLength = (password: string): boolean => password.length >= 8;

export const isValidatePassword = (password: string, errorEl: HTMLElement): boolean => {
  const errors: string[] = [];
  errorEl.innerHTML = '';
  let isValid: boolean = true;

  if (!isLength(password)) {
    errors.push(ErrorsPassword.passwordLength);
    isValid = false;
  }
  if (!isContainsLowerLetter(password)) {
    errors.push(ErrorsPassword.passwordLowerLetter);
    isValid = false;
  }
  if (!isContainsUpperLetter(password)) {
    errors.push(ErrorsPassword.passwordUpperLetter);
    isValid = false;
  }
  if (!isContainsNumber(password)) {
    errors.push(ErrorsPassword.passwordNumber);
    isValid = false;
  }
  if (isContainsTrim(password)) {
    errors.push(ErrorsPassword.passwordTrim);
    isValid = false;
  }

  errors.forEach((error) => {
    const err = createElement({
      tag: TAGS.p,
    });
    err.textContent = error;
    errorEl.appendChild(err);
  });
  return isValid;
};
