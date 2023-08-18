import { createGalleryPage } from '../../common/components/molecules/gallery/gallery';

export const renderGalleryPage = () => {
  // const headerElement = createHeader();
  const galleryPage = createGalleryPage();
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';
  }

  // document.body.appendChild(headerElement);
  if (mainElement) {
    mainElement.appendChild(galleryPage);
  }
};
