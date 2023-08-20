enum ErrorsLength {
  minLength = 'Поле должно содержать хотя бы один символ',
}

const isLength = (password: string): boolean => password.length >= 1;

export const isValidateLength = (str: string, errorEl: HTMLElement): boolean => {
  if (!isLength(str)) {
    errorEl.textContent = ErrorsLength.minLength;
    return false;
  }

  errorEl.textContent = '';
  return true;
};
