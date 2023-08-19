export function toggleErrorAuth(method: string): void {
  const formAuth = document.getElementById('form-auth');
  const errorBlock = document.querySelector('.main__error');

  if (method === 'remove') {
    formAuth?.classList.remove('error');
    errorBlock?.classList.remove('error');
  } else if (method === 'add') {
    formAuth?.classList.add('error');
    errorBlock?.classList.add('error');
  }
}

export function checkForm(errorMethod: string, isEmail?: boolean, isPass?: boolean): void {
  toggleErrorAuth(errorMethod);
  if (isEmail && isPass) {
    document.querySelector('.form__button')?.removeAttribute('disabled');
    return;
  }
  document.querySelector('.form__button')?.setAttribute('disabled', 'disabled');
}
