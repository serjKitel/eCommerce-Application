import { createMainPage } from '../../common/components/molecules/main-page/MainPage';

export const renderMainPage = () => {
  // const headerElement = createHeader();
  const mainPage = createMainPage();
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';
  }

  // document.body.appendChild(headerElement);
  if (mainElement) {
    mainElement.appendChild(mainPage);
  }
};
