import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../shared/hooks/UseAuth";
import { APP_NAVIGATION } from "../shared/constans";
import "../assets/css/style.css";
import { getConfirmDialog } from "../shared/components/Swal/SwalUtil";
import FormButton from "../shared/components/FormButton/FormButton";

const Navigation = () => {
  const { onLogout } = useAuth();
  const handleLogout = () => {
    getConfirmDialog("Are you sure?", "You want to logout?", "info", onLogout);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="wrapper-admin">
              <nav id="sidebar-admin">
                <div className="title">Side Menu</div>
                <ul className="list-items-adm-nav">
                  <Link to={"/admin"}>
                    <li>
                      <i className="fas fa-home"></i>Dashboard
                    </li>
                  </Link>
                  <Link to={APP_NAVIGATION.VEHICLE}>
                    <li>
                      <i className="fas fa-home"></i>Vehicle
                    </li>
                  </Link>
                  <Link to={APP_NAVIGATION.BRAND}>
                    <li>
                      <i className="fas fa-home"></i>Brand
                    </li>
                  </Link>
                  <div className="fixed-bottom mb-3 mx-4">
                    <FormButton
                      className="btn btn-outline-light"
                      onClick={handleLogout}
                      label="Logout"
                    />
                  </div>
                </ul>
              </nav>
            </div>
          </div>
          <div
            className="col-md-9"
            style={{
              padding: "5em 12em 0 0",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
