// import { MainPage } from '@molecules/main-page/MainPage';
// import { isRegist } from '@commerceTools/registration';
// import { isAuthorizat } from '@commerceTools/authorization';
// import { Header } from './common/components/organisms/header/header';
// import { LogInPage } from './pages/log-in/LogIn';
// import { renderMainPage } from './pages/main/main';
// import { renderCatalogPage } from './pages/catalog/catalog';
// import { renderAboutUsPage } from './pages/about/about';
// import { renderGalleryPage } from './pages/gallery/gallery';
// import { renderContactsPage } from './pages/contacts/contacts';
// import { renderNotFoundPage } from './pages/not-found-page/notFoundPage';
// import { renderRegistrationPage } from './pages/registration/registration';

import './style.css';
import { isAuthorizat } from './commerceTools/authorization';
import { MainPage } from './common/components/molecules/main-page/MainPage';
import { Header } from './common/components/organisms/header';
import { AboutUsPage } from './pages/about/about';
import { CatalogPage } from './pages/catalog/CatalogPage';
import { ProductPage } from './pages/product';
import { ContactsPage } from './pages/contacts/contacts';
import { GalleryPage } from './pages/gallery/gallery';
import { LogInPage } from './pages/log-in/LogIn';
import { ProfilePage } from './pages/profile/ProfilePage';
import { renderMainPage } from './pages/main/main';
import { NotFoundPage } from './pages/not-found-page/notFoundPage';
import { RegistrationPage } from './pages/registration/registration';
import { isRegist } from './commerceTools/registration';

window.onload = () => {
  const headerElement = Header();

  const mainPage = MainPage();

  document.body.appendChild(headerElement);
  document.body.appendChild(mainPage);

  const handleHashChange = (hash: string) => {
    localStorage.setItem('currentPageHash', window.location.hash.slice(1));
    const key: string = window.location.hash.split('#')[1].split('/')[1];

    if (hash === 'home') {
      renderMainPage();
    } else if (hash === 'catalog') {
      CatalogPage();
    } else if (window.location.hash.split('#')[1].split('/')[0] === 'product') {
      ProductPage(key);
    } else if (hash === 'about') {
      AboutUsPage();
    } else if (hash === 'gallery') {
      GalleryPage();
    } else if (hash === 'contacts') {
      ContactsPage();
    } else if (isAuthorizat && hash === 'login') {
      renderMainPage();
      window.location.hash = 'home';
    } else if (isAuthorizat && hash === 'profile') {
      ProfilePage();
    } else if (!isAuthorizat && hash === 'profile') {
      LogInPage();
      window.location.hash = 'login';
    } else if (hash === 'login') {
      LogInPage();
    } else if (isRegist && hash === 'registration') {
      RegistrationPage();
    } else if (hash === 'registration') {
      RegistrationPage();
    } else {
      NotFoundPage();
    }
  };

  const savedHash = localStorage.getItem('currentPageHash');
  if (savedHash) {
    window.location.hash = savedHash;
    handleHashChange(savedHash);
  }

  window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash.split('#')[1].split('/')[0];
    handleHashChange(currentHash);
  });

  const logoDiv = document.querySelector('.header__logo');
  const homeLink = document.querySelector('.nav__link[href="#home"]');
  const catalogLink = document.querySelector('.nav__link[href="#catalog"]');
  const aboutUsLink = document.querySelector('.nav__link[href="#about"]');
  const galleryLink = document.querySelector('.nav__link[href="#gallery"]');
  const contactsLink = document.querySelector('.nav__link[href="#contacts"]');

  if (logoDiv) {
    logoDiv.addEventListener('click', () => {
      renderMainPage();
    });
  }

  if (homeLink) {
    homeLink.addEventListener('click', () => {
      renderMainPage();
    });
  }

  if (catalogLink) {
    catalogLink.addEventListener('click', () => {
      CatalogPage();
    });
  }

  if (aboutUsLink) {
    aboutUsLink.addEventListener('click', () => {
      AboutUsPage();
    });
  }

  if (galleryLink) {
    galleryLink.addEventListener('click', () => {
      GalleryPage();
    });
  }

  if (contactsLink) {
    contactsLink.addEventListener('click', () => {
      ContactsPage();
    });
  }
};
