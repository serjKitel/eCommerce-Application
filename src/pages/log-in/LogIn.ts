// import { createHeader } from '../../common/components/organisms/header';
import { createLoginPage } from '../../common/components/molecules/main-log-in/LogIn';

export const renderLogInPage = () => {
  // const headerElement = createHeader();
  const logInPage = createLoginPage();
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';
  }

  // document.body.appendChild(headerElement);
  if (mainElement) {
    mainElement.appendChild(logInPage);
  }
};
