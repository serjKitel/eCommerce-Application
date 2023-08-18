import { createCatalogPage } from '@organism/catalog/catalog';

export const renderCatalogPage = () => {
  // const headerElement = createHeader();
  const catalogPage = createCatalogPage();
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';
  }

  // document.body.appendChild(headerElement);
  if (mainElement) {
    mainElement.appendChild(catalogPage);
  }
};
