import { ClientBuilder } from '@commercetools/sdk-client-v2';
import { PROJECT_KEY } from './const';
import { authMiddlewareOptions, httpMiddlewareOptions } from './BuildClient';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

export function getCatalog() {
  const ctpClient = new ClientBuilder()
    .withProjectKey(PROJECT_KEY)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();

  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({ projectKey: PROJECT_KEY });

  const getCatalogApi = async () => {
    try {
      const answer = await apiRoot.categories().get().execute();
      return answer;
    } catch (e) {
      console.log(e);
    }
  };

  return getCatalogApi();
}
