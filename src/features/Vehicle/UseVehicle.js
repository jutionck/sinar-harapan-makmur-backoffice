import { useEffect } from "react";
import { useDependency } from "../../shared/hooks/UseDependency";
import { useViewState } from "../../shared/hooks/UseViewState";

export const useVehicle = () => {
  const { viewState, setLoading, setData, setError } = useViewState();
  const { vehicleService } = useDependency();

  useEffect(() => {
    onGetAllVehicle();
  }, []);

  const onGetAllVehicle = async () => {
    setLoading();
    try {
      const response = await vehicleService.getAllVehicle();
      setData(response.data);
    } catch (e) {
      setError("Please input your user name and password");
    }
  };
  return {
    viewState,
  };
};
