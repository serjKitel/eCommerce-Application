import './style.css';
import { logoElement } from './common/components/atoms/logo-component/logoComponent';
import { NavigationMenu } from './common/components/molecules/navigation';

document.body.appendChild(logoElement);

window.onload = () => {
  const navigationMenuElement = NavigationMenu();
  document.body.appendChild(navigationMenuElement);
};
