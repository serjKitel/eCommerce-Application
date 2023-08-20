import { TAGS } from '@constants/tags';
import { createElement } from '@utils/createElement';
import { LogInComponent } from '@atoms/log-in-component';

export const HeaderLogIn = () => {
  const headerLogInElement = createElement({
    tag: TAGS.div,
    className: 'header__log-in',
  });

  headerLogInElement.appendChild(LogInComponent);

  const menuLogInElement = createElement({
    tag: TAGS.div,
    className: 'menu__log-in',
  });

  const registrationLinkElement = createElement({
    tag: TAGS.a,
    className: 'log__in-link',
    attributes: {
      href: '#registration',
    },
  });

  registrationLinkElement.textContent = 'Зарегистрироваться';

  registrationLinkElement.addEventListener('click', () => {
    menuLogInElement.classList.remove('active');
  });

  const loginLinkElement = createElement({
    tag: TAGS.a,
    className: 'log__in-link',
    attributes: {
      href: '#login',
    },
  });

  loginLinkElement.textContent = 'Войти';

  loginLinkElement.addEventListener('click', () => {
    menuLogInElement.classList.remove('active');
  });

  document.addEventListener('click', (event) => {
    const { target } = event;

    if (target instanceof HTMLElement) {
      if (
        !target.closest('.header__log-in')
        && !target.closest('.log__in-link')
      ) {
        menuLogInElement.classList.remove('active');
      }
    }
  });

  menuLogInElement.appendChild(registrationLinkElement);
  menuLogInElement.appendChild(loginLinkElement);
  headerLogInElement.appendChild(menuLogInElement);

  headerLogInElement.addEventListener('click', () => {
    menuLogInElement.classList.toggle('active');
  });

  menuLogInElement.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  return headerLogInElement;
};
