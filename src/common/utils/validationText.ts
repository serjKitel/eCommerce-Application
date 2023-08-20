import { TAGS } from '@constants/tags';
import { createElement } from './createElement';

enum ErrorsText {
  textLength = '\nПоле должно содержать минимум один символ',
  textLetter = '\nПоле не должно содержать специальных символов или цифр',
}

const isLength = (password: string): boolean => password.length >= 1;

const isContainsLetter = (str: string) => {
  const re = /^[a-zA-Zа-яА-ЯёЁ]+$/;
  return re.test(str);
};

export const isValidateText = (str: string, errorEl: HTMLElement) => {
  const errors: string[] = [];
  errorEl.innerHTML = '';
  let isValid: boolean = true;

  if (!isLength(str)) {
    errors.push(ErrorsText.textLength);
    isValid = false;
  }

  if (!isContainsLetter(str)) {
    errors.push(ErrorsText.textLetter);
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
