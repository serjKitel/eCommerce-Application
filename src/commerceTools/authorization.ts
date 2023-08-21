import {
  ClientBuilder,
  ExistingTokenMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { API_COMMERCE, PROJECT_KEY } from './const';
import { authMiddlewareOptions, httpMiddlewareOptions } from './BuildClient';
import { myToken } from './Token';
import { IAuthorization } from '../common/types/commonTypes';
import { checkForm, toggleErrorAuth } from '../common/utils/validation/checkForm';
import { ERROR } from '../common/constants/methods';
// import { ERROR } from '@constants/methods';
// import { checkForm, toggleErrorAuth } from '@utils/validation/checkForm';
// import { IAuthorization } from '@types/commonTypes';

export let isAuthorizat = false;

export function authorizationFunc(USER: IAuthorization) {
  const optionsAuth: PasswordAuthMiddlewareOptions = {
    host: API_COMMERCE.HOST,
    projectKey: PROJECT_KEY,
    credentials: {
      clientId: API_COMMERCE.CLIENT_ID,
      clientSecret: API_COMMERCE.CLIENT_SECRET,
      user: {
        username: USER.email,
        password: USER.password,
      },
    },
    tokenCache: myToken,
    scopes: API_COMMERCE.SCOPE,
    fetch,
  };

  const clientAuth = new ClientBuilder()
    .withProjectKey(PROJECT_KEY)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withPasswordFlow(optionsAuth)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();

  const getApiRootPass = () => createApiBuilderFromCtpClient(clientAuth);

  const getCustomerAuth = async () => {
    try {
			isAuthorizat = true;
      const answer = await getApiRootPass()
        .withProjectKey({ projectKey: PROJECT_KEY })
        .me()
        .login()
        .post({
          body: USER,
        })
        .execute();
      return answer;
    } catch (e) {
      toggleErrorAuth(ERROR.add);
      checkForm(ERROR.add);
    }
  };
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

    return getApiTokenRoot;
  });

  return getCustomerAuth();
}
