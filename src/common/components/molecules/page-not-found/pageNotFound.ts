import { createElement } from '@utils/createElement';
import { TAGS } from '@constants/tags';

export const createNotFoundPage = () => {
  const mainElement = createElement({
    tag: TAGS.main,
  });

  const containerElement = createElement({
    tag: TAGS.div,
    className: 'container',
  });

  const notFoundPageElement = createElement({
    tag: TAGS.div,
    className: 'page__not-found',
  });

  const notFoundTextElement = createElement({
    tag: TAGS.p,
    className: 'page__not-found__text',
  });

  notFoundTextElement.innerText = 'К сожалению, такой страницы не существует.';

  const notFoundItemsElement = createElement({
    tag: TAGS.div,
    className: 'page__not-found__items',
  });

  const notFoundItem1Element = createElement({
    tag: TAGS.div,
    className: 'page__not-found__item',
  });

  notFoundItem1Element.textContent = '4';

  const notFoundImgElement = createElement({
    tag: TAGS.img,
    className: 'page__not-found__img',
    attributes: {
      src: './images/armchair404.png',
      alt: 'page-not-found',
    },
  });

  const notFoundItem2Element = createElement({
    tag: TAGS.div,
    className: 'page__not-found__item',
  });

  notFoundItem2Element.textContent = '4';

  const notFoundLinksElement = createElement({
    tag: TAGS.div,
    className: 'page__not-found__links',
  });

  const goBackLinkElement = createElement({
    tag: TAGS.a,
    className: 'page__not-found__link back__link',
    attributes: {
      href: '#back',
    },
  });

  goBackLinkElement.textContent = 'Вернутся назад';

  goBackLinkElement.addEventListener('click', (event) => {
    event.preventDefault();
    window.history.back();
  });

  const returnHomeLinkElement = createElement({
    tag: TAGS.a,
    className: 'page__not-found__link home__link',
    attributes: {
      href: '#home',
    },
  });

  returnHomeLinkElement.textContent = 'Вернутся на главную';

  notFoundItemsElement.appendChild(notFoundItem1Element);
  notFoundItemsElement.appendChild(notFoundImgElement);
  notFoundItemsElement.appendChild(notFoundItem2Element);

  notFoundLinksElement.appendChild(goBackLinkElement);
  notFoundLinksElement.appendChild(returnHomeLinkElement);

  notFoundPageElement.appendChild(notFoundTextElement);
  notFoundPageElement.appendChild(notFoundItemsElement);
  notFoundPageElement.appendChild(notFoundLinksElement);

  containerElement.appendChild(notFoundPageElement);
  mainElement.appendChild(containerElement);

  return mainElement;
};
