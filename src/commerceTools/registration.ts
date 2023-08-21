import { ClientBuilder } from '@commercetools/sdk-client-v2';
import { authMiddlewareOptions, httpMiddlewareOptions } from './BuildClient';
import { PROJECT_KEY } from './const';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { IRegistration } from '@types/commonTypes';
import { STATUS_CODE } from '@constants/methods';

export function registrationFunc(USER: IRegistration) {
  const ctpClient = new ClientBuilder()
    .withProjectKey(PROJECT_KEY)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();

  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({ projectKey: PROJECT_KEY });

  const regClient = async () => {
    try {
      const answer = await apiRoot
        .me()
        .signup()
        .post({
          body: USER,
        })
        .execute();
      return answer;
    } catch (err: any) {
      const errorBlock = document.querySelector('.main__error') as HTMLElement;
      errorBlock.classList.add('error');
      if (err.statusCode === STATUS_CODE.clientError) {
        errorBlock.innerHTML = 'Пользователь с такой почтой уже зарегистрирован';
        document.querySelector('[name="email"]')?.classList.add('error');
      } else if (String(err.statusCode)[0] === '5') {
        errorBlock.innerHTML = 'Ошибка на стороне сервера. Повторите попытку позже';
      }
    }
  };

  return regClient();
}
