import { TokenCache, TokenCacheOptions, TokenStore } from '@commercetools/sdk-client-v2';

class MyToken implements TokenCache {
  private cache: TokenStore = {
    token: '',
    expirationTime: 0,
    refreshToken: '',
  };

  get(tokenOptions?: TokenCacheOptions): TokenStore {
    return this.cache;
  }

  set(cache: TokenStore, TokenCacheOptions?: TokenCacheOptions): void {
    this.cache = cache;
  }
}

export const myToken = new MyToken();
