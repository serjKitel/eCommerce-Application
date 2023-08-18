import { TAGS } from '../constants/tags';
import { createElement } from './createElement';

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

  if (!isLength(password)) {
    errors.push(ErrorsPassword.passwordLength);
  }
  if (!isContainsLowerLetter(password)) {
    errors.push(ErrorsPassword.passwordLowerLetter);
  }
  if (!isContainsUpperLetter(password)) {
    errors.push(ErrorsPassword.passwordUpperLetter);
  }
  if (!isContainsNumber(password)) {
    errors.push(ErrorsPassword.passwordNumber);
  }
  if (isContainsTrim(password)) {
    errors.push(ErrorsPassword.passwordTrim);
  }

  errors.forEach((error) => {
    const err = createElement({
      tag: TAGS.p,
    });
    err.textContent = error;
    errorEl.appendChild(err);
  });
  return false;
};
