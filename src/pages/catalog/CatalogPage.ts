import { TAGS } from '../../common/constants/tags';
import { createElement } from '../../common/utils/createElement';
import { CategoriesForm } from '../../common/components/molecules/categories-form/CategoriesForm';
import { CatalogCards } from '../../helpers/catalog-cards';
import { store } from '../../store/configureStore';
import { setItems } from '../../reducers/productData';
import { itemData } from '../../helpers/catalog-cards/CatalogCards';

console.log(store.getState());

let currentState = store.getState();

store.subscribe(() => {
  const prevState = currentState;
  currentState = store.getState();

  if (prevState.items !== currentState.items) {
    console.log('CHANGED');
  }
});

function fetchData(): Promise<any> {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(itemData);
    }, 1000);
  });
}

fetchData()
  .then((newItems) => {
    store.dispatch(setItems(newItems));
    console.log(store.getState());
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

export const CatalogPage = () => {
  const mainElement = document.querySelector('main');

  if (mainElement) {
    mainElement.innerHTML = '';

    const containerElement = createElement({
      tag: TAGS.div,
      className: 'container',
    });

    const mainInnerElement = createElement({
      tag: TAGS.div,
      className: 'main__inner',
    });

    const navigationChainElement = createElement({
      tag: 'div',
      className: 'catalog__navigation-chain',
    });

    navigationChainElement.textContent = 'Главная / Каталог';

    const contentElement = createElement({
      tag: 'div',
      className: 'catalog__content',
    });

    const filtersElement = createElement({
      tag: 'div',
      className: 'catalog__filters',
    });

    const categoriesFormElement = CategoriesForm();
    filtersElement.appendChild(categoriesFormElement);

    mainInnerElement.appendChild(navigationChainElement);
    contentElement.appendChild(filtersElement);

    const catalogCards = CatalogCards(store.getState().items);
    contentElement.appendChild(catalogCards);

    mainInnerElement.appendChild(contentElement);

    containerElement.appendChild(mainInnerElement);
    mainElement.appendChild(containerElement);
  }
};
