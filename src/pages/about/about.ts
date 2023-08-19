import { createAboutUsPage } from '@molecules/about/about';

export const renderAboutUsPage = () => {
  // const headerElement = createHeader();
  const aboutUsPage = createAboutUsPage();
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';
  }

  // document.body.appendChild(headerElement);
  if (mainElement) {
    mainElement.appendChild(aboutUsPage);
  }
};
