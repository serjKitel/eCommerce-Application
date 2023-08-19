import './style.css';
import { Header } from './common/components/organisms/header/header';
import { MainPage } from './common/components/molecules/main-page/MainPage';
import { renderLogInPage } from './pages/log-in/LogIn';
import { renderMainPage } from './pages/main/main';
import { renderCatalogPage } from './pages/catalog/catalog';
import { renderAboutUsPage } from './pages/about/about';
import { renderGalleryPage } from './pages/gallery/gallery';
import { renderContactsPage } from './pages/contacts/contactss';
import { renderNotFoundPage } from './pages/not-found-page/notFoundPage';

window.onload = () => {
  const headerElement = Header();
  const mainPage = MainPage();

  document.body.appendChild(headerElement);
  document.body.appendChild(mainPage);

  window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash;

    if (currentHash === '#home') {
      renderMainPage();
    } else if (currentHash === '#catalog') {
      renderCatalogPage();
    } else if (currentHash === '#about') {
      renderAboutUsPage();
    } else if (currentHash === '#gallery') {
      renderGalleryPage();
    } else if (currentHash === '#contacts') {
      renderContactsPage();
    } else if (currentHash === '#login') {
      renderLogInPage();
    } else {
      renderNotFoundPage();
    }
  });

  const logInDiv = document.querySelector('.header__log-in');
  const logoDiv = document.querySelector('.header__logo');
  const homeLink = document.querySelector('.nav__link[href="#home"]');
  const catalogLink = document.querySelector('.nav__link[href="#catalog"]');
  const aboutUsLink = document.querySelector('.nav__link[href="#about"]');
  const galleryLink = document.querySelector('.nav__link[href="#gallery"]');
  const contactsLink = document.querySelector('.nav__link[href="#contacts"]');

  if (logInDiv) {
    logInDiv.addEventListener('click', () => {
      renderLogInPage();
    });
  }

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
      renderCatalogPage();
    });
  }

  if (aboutUsLink) {
    aboutUsLink.addEventListener('click', () => {
      renderAboutUsPage();
    });
  }

  if (galleryLink) {
    galleryLink.addEventListener('click', () => {
      renderGalleryPage();
    });
  }

  if (contactsLink) {
    contactsLink.addEventListener('click', () => {
      renderContactsPage();
    });
  }
};
