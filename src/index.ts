import { ClientBuilder, ExistingTokenMiddlewareOptions } from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { getCustomerAuth } from './commerceTools/Client';
import { authMiddlewareOptions, httpMiddlewareOptions } from './commerceTools/BuildClient';
import { BTN, PROJECT_KEY } from './commerceTools/const';
import { myToken } from './commerceTools/MyToken';

BTN.addEventListener('click', () => {
  getCustomerAuth().then(() => {
    const authorization: string = `Bearer ${myToken.get().token}`;
    const options: ExistingTokenMiddlewareOptions = {
      force: true,
    };

    const client = new ClientBuilder()
      .withProjectKey(PROJECT_KEY)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withExistingTokenFlow(authorization, options)
      .withHttpMiddleware(httpMiddlewareOptions)
      .build();

    const getApiTokenRoot = () => createApiBuilderFromCtpClient(client);

    getApiTokenRoot()
      .withProjectKey({ projectKey: PROJECT_KEY })
      .me()
      .get()
      .execute()
      .then((data) => console.log(data));
  });
});
