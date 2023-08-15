import './style.css';
import { createHeaderLogo } from './common/components/molecules/header-logo/headerLogo';
import { createHeader } from './common/components/organisms/header/header';
import { createInputBlock } from './common/components/molecules/input-block/input-block';
import { labelAttrEmail } from './common/components/atoms/label/label';
import { inputAttrEmail } from './common/components/atoms/input/input';

window.onload = () => {
  const headerLogo = createHeaderLogo();
  document.body.appendChild(headerLogo);
  const header = createHeader();
  document.body.appendChild(header);
  document.body.appendChild(createInputBlock(labelAttrEmail, inputAttrEmail));
};
