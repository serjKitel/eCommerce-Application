import { MainPage } from '@organism/main-page/mainPage';

export const renderMainPage = () => {
  // const headerElement = createHeader();
  const mainPage = MainPage();
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';
  }

  // document.body.appendChild(headerElement);
  if (mainElement) {
    mainElement.appendChild(mainPage);
  }
};
