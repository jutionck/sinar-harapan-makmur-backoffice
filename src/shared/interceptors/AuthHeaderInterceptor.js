import { APP_TOKEN } from "../constans";

export const authHeaderInterceptor = (config) => {
  const token = sessionStorage.getItem(APP_TOKEN);
  if (config.url != "/login") {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};
