import { Product } from '@commercetools/platform-sdk';
import { createElement } from '../../../utils/createElement';
import { TAGS } from '../../../constants/tags';

export const BreadcrumbProduct = (product: Product) => {
  const navigationChainElement = createElement({
    tag: TAGS.div,
    className: 'navigation__chain',
  });

  const breadcrumbElement = createElement({
    tag: TAGS.ul,
    className: 'breadcrumb',
  });

  const homeItemElement = createElement({
    tag: TAGS.li,
    className: 'chain__item',
  });

  const homeLinkElement = createElement({
    tag: TAGS.a,
    className: 'chain__link',
    attributes: {
      href: '#home',
    },
    textContent: 'Главная',
  });

  homeItemElement.appendChild(homeLinkElement);

  breadcrumbElement.appendChild(homeItemElement);

  const catalogItemElement = createElement({
    tag: TAGS.li,
    className: 'chain__item',
  });

  const catalogLinkElement = createElement({
    tag: TAGS.a,
    className: 'chain__link',
    attributes: {
      href: '#catalog',
    },
    textContent: 'Каталог',
  });

  catalogItemElement.appendChild(catalogLinkElement);

  breadcrumbElement.appendChild(catalogItemElement);

  const productItemElement = createElement({
    tag: TAGS.li,
    className: 'chain__item',
  });

  const productLinkElement = createElement({
    tag: TAGS.a,
    className: 'chain__link',
    attributes: {
      href: window.location.hash,
    },
    textContent: product.masterData.current.name['ru-BY'],
  });

  productItemElement.appendChild(productLinkElement);
  breadcrumbElement.appendChild(productItemElement);
  navigationChainElement.appendChild(breadcrumbElement);

  return navigationChainElement;
};
