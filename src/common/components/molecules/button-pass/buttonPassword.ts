import { createElement } from '@utils/createElement';
import { TAGS } from '@constants/tags';
import { clickToggleViewPass } from './helpers';

export const ButtonPassword = () => {
  const btnPass = createElement({
    tag: TAGS.button,
    className: 'password-view__btn',
    attributes: {
      type: 'button',
    },
  });

  const imgView = createElement({
    tag: TAGS.img,
    className: 'password-view-open',
    attributes: {
      src: './icons/pass-view-open.svg',
    },
  });

  const imgClose = createElement({
    tag: TAGS.img,
    className: 'password-view-close',
    attributes: {
      src: './icons/pass-view-close.svg',
    },
  });

  btnPass.appendChild(imgView);
  btnPass.appendChild(imgClose);

  btnPass.addEventListener('click', function () {
    clickToggleViewPass(this);
  });

  return btnPass;
};
