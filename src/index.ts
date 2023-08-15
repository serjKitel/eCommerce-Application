import './style.css';
import { NavigationMenu } from './common/components/molecules/navigation';
import { createHeaderLogo } from './common/components/molecules/header-logo/headerLogo';

window.onload = () => {
  const headerLogo = createHeaderLogo();
  document.body.appendChild(headerLogo);
  const navigationMenuElement = NavigationMenu();
  document.body.appendChild(navigationMenuElement);
};
