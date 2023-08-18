enum ErrorsEmail {
  emailDoggy = 'Адрес электронной почты должен содержать @',
  emailDomen = 'Адрес электронной почты должен содержать доменное имя',
  emailFormat = 'Неправильный формат адреса электронной почты',
}

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

export const isValidateEmail = (email: string, errorEl: HTMLElement): boolean => {
  if (!isContainsEmailDoggy(email)) {
    errorEl.textContent = ErrorsEmail.emailDoggy;
    return false;
  }
  if (!isContainsEmailDomain(email)) {
    errorEl.textContent = ErrorsEmail.emailDomen;
    return false;
  }
  if (!isValidateProperlyFormatEmail(email)) {
    errorEl.textContent = ErrorsEmail.emailFormat;
    return false;
  }

  errorEl.textContent = '';
  return true;
};
