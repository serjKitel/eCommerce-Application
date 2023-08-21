// import { IInputCheck } from '@types/commonTypes';
// import { ErrorsEmail } from './consts';

import { IInputCheck } from '../../types/commonTypes';
import { ErrorsEmail } from './consts';

const isValidateProperlyFormatEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const isContainsEmailDomain = (email: string): boolean => {
  const domain = email.split('@')[1];
  if (!domain) {
    return false;
  }
  return true;
};

const isContainsEmailDoggy = (email: string): boolean => email.includes('@');

export const isValidateEmail = (data: IInputCheck): boolean => {
  if (!isContainsEmailDoggy(data.value)) {
    data.errorEl.textContent = ErrorsEmail.emailDoggy;
    return false;
  }
  if (!isContainsEmailDomain(data.value)) {
    data.errorEl.textContent = ErrorsEmail.emailDomen;
    return false;
  }
  if (!isValidateProperlyFormatEmail(data.value)) {
    data.errorEl.textContent = ErrorsEmail.emailFormat;
    return false;
  }

  data.errorEl.textContent = '';
  return true;
};
