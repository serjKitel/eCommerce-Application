import './style.css';
import { createHeader } from './common/components/organisms/header/header';
import { createMainAuth } from './common/components/organisms/main-auth/main-auth';

window.onload = () => {
  const header = createHeader();
  document.body.appendChild(header);

  const mainAuth = createMainAuth();
  document.body.appendChild(mainAuth);
};
