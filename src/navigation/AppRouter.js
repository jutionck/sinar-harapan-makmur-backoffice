import { Route, Routes } from "react-router-dom";
import LoginView from "../features/Login/LoginView";
import { APP_NAVIGATION } from "../shared/constans";
import Navigation from "./Navigation";
import VehicleView from "../features/Vehicle/VehicleView";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route element={<ProtectedRoute />}>
        <Route path={APP_NAVIGATION.MAIN} element={<Navigation />}>
          <Route path={APP_NAVIGATION.VEHICLE} element={<VehicleView />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Oopss... page not found</p>
          </main>
        }
      />
    </Routes>
  );
};

export default AppRouter;
