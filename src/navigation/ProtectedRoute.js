import { Navigate, Outlet } from "react-router-dom";
import { APP_TOKEN } from "../shared/constans";

const ProtectedRoute = () => {
  const token = sessionStorage.getItem(APP_TOKEN);
  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
