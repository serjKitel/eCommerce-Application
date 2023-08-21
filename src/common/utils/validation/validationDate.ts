// import { IInputCheck } from '@types/commonTypes';
// import { ErrorsDate, minAge, startDat } from './consts';
// import { showErrors } from './helpers';

import { IInputCheck } from '../../types/commonTypes';
import { ErrorsDate, minAge, startDat } from './consts';
import { showErrors } from './helpers';

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

export const isValidateDate = (data: IInputCheck): boolean => {
  const errors: string[] = [];
  data.errorEl.innerHTML = '';
  let isValid: boolean = true;

  if (!isValidAge(data.value)) {
    errors.push(ErrorsDate.dateYear);
    isValid = false;
  }

  if (!isDateInRange(data.value)) {
    errors.push(ErrorsDate.dateFormat);
    isValid = false;
  }

  showErrors(errors, data.errorEl);
  return isValid;
};
