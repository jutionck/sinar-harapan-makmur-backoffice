import { APP_SERVICE } from "../shared/constans";

export const vehicleService = ({ doPost, doGet, doUpdate, doDelete }) => {
  const getAllVehicle = async (page, limit, order, sort) => {
    try {
      return await doGet({
        url: APP_SERVICE.VEHICLE,
        params: { page, limit, order, sort },
      });
    } catch (error) {
      throw error;
    }
  };

  const getVehicleById = async (id) => {
    try {
      return await doGet({ url: `${APP_SERVICE.VEHICLE}/${id}` });
    } catch (error) {
      throw error;
    }
  };

  const postVehicle = async (newVehicle, photo) => {
    try {
      const formData = new FormData();
      const {
        brandId,
        model,
        color,
        isAutomatic,
        productionYear,
        stock,
        salePrice,
        status,
      } = newVehicle;

      const payload = {
        brandId: brandId,
        model: model,
        productionYear: Number(productionYear),
        color: color,
        isAutomatic: isAutomatic,
        stock: Number(stock),
        salePrice: Number(salePrice),
        status: status,
      };

      formData.append("vehicle", JSON.stringify(payload));
      formData.append("photo", photo);
      return await doPost({ url: APP_SERVICE.VEHICLE, formData });
    } catch (error) {
      throw error;
    }
  };

  const putVehicle = async (newVehicle) => {
    try {
      const {
        id,
        brandId,
        model,
        color,
        isAutomatic,
        productionYear,
        stock,
        salePrice,
        status,
      } = newVehicle;

      const payload = {
        id: id,
        brandId: brandId,
        model: model,
        productionYear: Number(productionYear),
        color: color,
        isAutomatic: isAutomatic,
        stock: Number(stock),
        salePrice: Number(salePrice),
        status: status,
      };
      return await doUpdate({ url: APP_SERVICE.VEHICLE, payload });
    } catch (error) {
      throw error;
    }
  };

  const deleteVehicle = async (id) => {
    try {
      return await doDelete({ url: `${APP_SERVICE.VEHICLE}/${id}` });
    } catch (error) {
      throw error;
    }
  };

  return {
    getAllVehicle,
    getVehicleById,
    postVehicle,
    putVehicle,
    deleteVehicle,
  };
};
