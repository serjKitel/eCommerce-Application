import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { ctpClient } from './BuildClient';

// Create apiRoot from the imported ClientBuilder and include your Project key
const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({ projectKey: 'ecommetcetools' });

// Withdrawing the name of the product from the trade
export function getProjectDetails() {
  apiRoot
    .products()
    .get()
    .execute()
    .then(({ body }) => {
      const bodyEl = document.querySelector('.details') as HTMLElement;
      bodyEl.innerHTML = JSON.stringify(body.results[0].masterData.current.name);
    });
}
