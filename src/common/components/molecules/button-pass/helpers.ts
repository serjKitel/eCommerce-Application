export const clickToggleViewPass = (btn: HTMLElement) => {
  btn.classList.toggle('active');
  const input = btn.parentElement?.querySelector('input');
  const inputAttr = input?.getAttribute('type');

  if (inputAttr === 'password') {
    input?.setAttribute('type', 'text');
  } else {
    input?.setAttribute('type', 'password');
  }
  input?.focus();
};
