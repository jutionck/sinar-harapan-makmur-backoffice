import { loginService } from "./LoginService";
import { vehicleService } from "./VehicleService";

export const serviceFactory = (apiClient) => {
  return {
    loginService: loginService(apiClient),
    vehicleService: vehicleService(apiClient),
  };
};
