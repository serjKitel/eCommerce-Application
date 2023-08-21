// import { STATUS_CODE } from '@constants/methods';
// import { authorizationFunc } from '@commerceTools/authorization';
// import { renderMainPage } from '@pages/main/main';

import { authorizationFunc } from '../../commerceTools/authorization';
import { STATUS_CODE } from '../../common/constants/methods';
import { renderMainPage } from '../main/main';

export let isAuthorizat: boolean = false;

export function submitAuthForm(): void {
  const inputEmail = document.querySelector('[name="email"]') as HTMLInputElement;
  const inputPass = document.querySelector('[name="password"]') as HTMLInputElement;

  const USER = {
    email: inputEmail.value,
    password: inputPass.value,
  };

  const clientAuth = authorizationFunc(USER);

  clientAuth.then((data) => {
    if (data?.statusCode === STATUS_CODE.success) {
      renderMainPage();
      window.location.hash = '#home';
      isAuthorizat = true;
      alert('Вы авторизировались!');
    }
  });
}
