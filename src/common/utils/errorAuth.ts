export function addErrorAuth() {
  const formAuth = document.getElementById('form-auth');
  const errorBlock = document.querySelector('.main__error');
  formAuth?.classList.add('error');
  errorBlock?.classList.add('error');
}

export function removeErrorAuth() {
  const formAuth = document.getElementById('form-auth');
  const errorBlock = document.querySelector('.main__error');
  formAuth?.classList.remove('error');
  errorBlock?.classList.remove('error');
}
