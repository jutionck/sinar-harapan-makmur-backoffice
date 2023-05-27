import { APP_SERVICE } from "../shared/constans";

export const brandService = ({ doGet }) => {
  const getAllBrand = async () => {
    try {
      return await doGet({
        url: APP_SERVICE.BRAND,
      });
    } catch (error) {
      throw error;
    }
  };
  return {
    getAllBrand,
  };
};
