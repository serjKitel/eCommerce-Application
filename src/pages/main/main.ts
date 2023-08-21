import { MainPage } from '@molecules/main-page/MainPage';

export const renderMainPage = () => {
  const mainPage = MainPage();
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';
  }

  if (mainElement) {
    mainElement.appendChild(mainPage);
  }
};
