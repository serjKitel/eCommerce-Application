import { ClientBuilder } from "@commercetools/sdk-client-v2";
import { authMiddlewareOptions, httpMiddlewareOptions } from "./BuildClient";
import { PROJECT_KEY } from "./const";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import { IRegistration } from "@types/commonTypes";


export function registrationFunc(USER: IRegistration) {
	const ctpClient = new ClientBuilder()
  .withProjectKey(PROJECT_KEY)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

	const apiRoot = createApiBuilderFromCtpClient(ctpClient)
  .withProjectKey({ projectKey: PROJECT_KEY });

	const regClient = async () => {
		try {
			const answer = await apiRoot
			.me()
			.signup()
			.post({
				body: USER
			})
			.execute();
			return answer;
		} catch(e) {
			console.log(e);
		}
	}

	return regClient();
}
