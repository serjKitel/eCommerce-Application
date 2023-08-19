// import { createHeader } from '../../common/components/organisms/header';
// eslint-disable-next-line import/no-relative-parent-imports

import { LoginPage } from '@molecules/main-log-in/LogIn';

export const renderLogInPage = () => {
  // const headerElement = createHeader();
  const logInPage = LoginPage();
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';
  }

  // document.body.appendChild(headerElement);
  if (mainElement) {
    mainElement.appendChild(logInPage);
  }
};
