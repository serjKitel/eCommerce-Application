import { ClientBuilder, type AuthMiddlewareOptions, type HttpMiddlewareOptions } from '@commercetools/sdk-client-v2';
import { API_COMMERCE, PROJECT_KEY } from './const';

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