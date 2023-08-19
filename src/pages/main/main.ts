import { MainPage } from '@molecules/main-page/MainPage';

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
