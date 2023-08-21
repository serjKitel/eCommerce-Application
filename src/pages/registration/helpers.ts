import { STATUS_CODE } from '@constants/methods';
import { registrationFunc } from '@commerceTools/registration';
import { renderMainPage } from '@pages/main/main';

export let isAuthorizat: boolean = false;

export function submitRegForm(): void {
  const inputEmail = document.querySelector('[name="email"]') as HTMLInputElement;
  const inputPass = document.querySelector('[name="password"]') as HTMLInputElement;
  const inputName = document.querySelector('[name="name"') as HTMLInputElement;
  const inputSurname = document.querySelector('[name="surname"]') as HTMLInputElement;

  const USER = {
    email: inputEmail.value,
    password: inputPass.value,
    firstName: inputName.value,
    lastName: inputSurname.value,
  };

  const clientReg = registrationFunc(USER);

  clientReg.then((data) => {
    if (data?.statusCode === STATUS_CODE.successReg) {
      renderMainPage();
      window.location.hash = '#home';
      isAuthorizat = true;
    }
  });
}
