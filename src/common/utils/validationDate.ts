import { TAGS } from '@constants/tags';
import { createElement } from './createElement';

enum ErrorsDate {
  dateYear = '\nВам меньше 18 лет',
  dateFormat = '\nДата введена неверно',
}

const minAge: number = 18;
const startDat: string = '1950-01-01';

const isValidAge = (dateString: string) => {
  const today: Date = new Date();
  const birthDate: Date = new Date(dateString);
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const monthDiff: number = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age >= minAge;
};

function isDateInRange(dateString: string) {
  const date: Date = new Date(dateString);
  const startDate: Date = new Date(startDat);
  const endDate: Date = new Date();

  if (date < startDate || date > endDate) {
    return false;
  }
  return true;
}

export const isValidateDate = (date: string, errorEl: HTMLElement): boolean => {
  const errors: string[] = [];
  errorEl.innerHTML = '';
  let isValid: boolean = true;

  if (!isValidAge(date)) {
    errors.push(ErrorsDate.dateYear);
    isValid = false;
  }

  if (!isDateInRange(date)) {
    errors.push(ErrorsDate.dateFormat);
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
