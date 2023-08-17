// import { createHeader } from '../../common/components/organisms/header';
import { createNotFoundPage } from '../../common/components/molecules/page-not-found/pageNotFound';

export const renderNotFoundPage = () => {
  // const headerElement = createHeader();

  const notFoundPage = createNotFoundPage();

  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';
  }

  if (mainElement) {
    mainElement.appendChild(notFoundPage);
  }
};
