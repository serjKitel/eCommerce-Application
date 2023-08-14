import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { clientAnonym, clientAuth } from './BuildClient';
import { EXISTING_USER, PROJECT_KEY } from './const';

//------------------------------
export const getApiRootAnonym = () => createApiBuilderFromCtpClient(clientAnonym);

export const getCustomerAnonym = async () => {
  try {
    const answer = await getApiRootAnonym()
      .withProjectKey({ projectKey: PROJECT_KEY })
      .get()
      .execute();
    return answer;
  } catch (e) {
    console.log(e);
  }
};

//---------------------------
export const getApiRootPass = () => createApiBuilderFromCtpClient(clientAuth);

export const getCustomerAuth = async () => {
  try {
    const answer = await getApiRootPass()
      .withProjectKey({ projectKey: PROJECT_KEY })
      .me()
      .login()
      .post({
        body: EXISTING_USER,
      })
      .execute();

    return answer;
  } catch (e) {
    console.log(e);
  }
};
