export function toggleErrorAuth(method: string): void {
  const form = document.querySelector('.form');
  const errorBlock = document.querySelector('.main__error');

  if (method === 'remove') {
    form?.classList.remove('error');
    errorBlock?.classList.remove('error');
  } else if (method === 'add') {
    form?.classList.add('error');
    errorBlock?.classList.add('error');
  }
}

export function checkForm(errorMethod: string, ...args: boolean[]): void {
  toggleErrorAuth(errorMethod);
  if (args?.includes(false)) {
    document.querySelector('.form__button')?.setAttribute('disabled', 'disabled');
    return;
  }
  document.querySelector('.form__button')?.removeAttribute('disabled');
}
