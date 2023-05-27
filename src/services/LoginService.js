import { APP_SERVICE } from "../shared/constans";

export const loginService = ({ doPost }) => {
  const doAuthenticate = async (userCredential) => {
    try {
      return await doPost({
        url: APP_SERVICE.LOGIN,
        data: {
          username: userCredential.username,
          password: userCredential.password,
        },
      });
    } catch (error) {
      throw error;
    }
  };

  return { doAuthenticate };
};
