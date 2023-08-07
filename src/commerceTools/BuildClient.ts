// import fetch from 'node-fetch';
import { ClientBuilder, type AuthMiddlewareOptions, type HttpMiddlewareOptions } from '@commercetools/sdk-client-v2';

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'ecommetcetools',
  credentials: {
    clientId: 'F38subK1AmNIa_vv9LTQmsap',
    clientSecret: 'uN03mt7a9R8we2wnyDGMTSBjVXGFmq9v',
  },
  scopes: [
    'create_anonymous_token:ecommetcetools manage_my_profile:ecommetcetools manage_my_business_units:ecommetcetools manage_my_orders:ecommetcetools manage_my_payments:ecommetcetools manage_my_quote_requests:ecommetcetools view_published_products:ecommetcetools view_categories:ecommetcetools manage_my_quotes:ecommetcetools manage_my_shopping_lists:ecommetcetools view_products:ecommetcetools',
  ],
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
