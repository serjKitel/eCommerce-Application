import './style.css';
import { createHeaderLogo } from './common/components/molecules/header-logo/headerLogo';
import { createHeader } from './common/components/organisms/header';

window.onload = () => {
  const headerLogo = createHeaderLogo();
  document.body.appendChild(headerLogo);
  const header = createHeader();
  document.body.appendChild(header);
};
