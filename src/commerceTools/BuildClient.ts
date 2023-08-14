import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
  AnonymousAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import { API_COMMERCE, EXISTING_USER, PROJECT_KEY } from './const';
import { myToken } from './MyToken';

// Configure authMiddlewareOptions
export const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: API_COMMERCE.HOST,
  projectKey: PROJECT_KEY,
  credentials: {
    clientId: API_COMMERCE.CLIENT_ID,
    clientSecret: API_COMMERCE.CLIENT_SECRET,
  },
  scopes: API_COMMERCE.SCOPE,
  fetch,
};

// Configure httpMiddlewareOptions
export const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: API_COMMERCE.API,
  fetch,
};

//---------------------------------------
const optionsAnonym: AnonymousAuthMiddlewareOptions = {
  host: API_COMMERCE.HOST,
  projectKey: PROJECT_KEY,
  credentials: {
    clientId: API_COMMERCE.CLIENT_ID,
    clientSecret: API_COMMERCE.CLIENT_SECRET,
    anonymousId: 'anonymous_id=2',
  },
  scopes: API_COMMERCE.SCOPE,
  fetch,
};

export const clientAnonym = new ClientBuilder()
  .withProjectKey(PROJECT_KEY)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withAnonymousSessionFlow(optionsAnonym)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

//-------------------------------------------
const optionsAuth: PasswordAuthMiddlewareOptions = {
  host: API_COMMERCE.HOST,
  projectKey: PROJECT_KEY,
  credentials: {
    clientId: API_COMMERCE.CLIENT_ID,
    clientSecret: API_COMMERCE.CLIENT_SECRET,
    user: {
      username: EXISTING_USER.email,
      password: EXISTING_USER.password,
    },
  },
  tokenCache: myToken,
  scopes: API_COMMERCE.SCOPE,
  fetch,
};

export const clientAuth = new ClientBuilder()
  .withProjectKey(PROJECT_KEY)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withPasswordFlow(optionsAuth)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();
