import React from "react";
import useLogin from "./UseLogin";
import FormButton from "../../shared/components/FormButton/FormButton";
import FormInput from "../../shared/components/FormInput/FormInput";

const LoginView = () => {
  const { viewState, userCred, handleInputChange, handleLogin } = useLogin();
  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="border border-3 border-primary"></div>
              <div className="card bg-white shadow-lg">
                <div className="card-body p-5">
                  <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label ">
                      Username
                    </label>
                    {/* <input
                        type="username"
                        placeholder="Username"
                        className="form-control"
                        id="username"
                        onChange={(e) =>
                          handleInputChange("username", e.target.value)
                        }
                        required
                      /> */}
                    <FormInput
                      type="text"
                      className="form-control"
                      id="username"
                      label=""
                      value={userCred.username}
                      onValueChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label ">
                      Password
                    </label>
                    <FormInput
                      type="password"
                      className="form-control"
                      id="password"
                      label=""
                      value={userCred.password}
                      onValueChange={handleInputChange}
                    />
                  </div>
                  <p className="small">
                    <a className="text-primary" href="forget-password.html">
                      Forgot password?
                    </a>
                  </p>
                  <div className="d-grid">
                    <FormButton
                      className="btn btn-outline-primary"
                      disabled={viewState.isLoading}
                      onClick={handleLogin}
                      label="Login"
                    />

                    {viewState.error && <div>{viewState.error}</div>}
                  </div>
                  <div>
                    <p className="mb-0  text-center">
                      Don't have an account?{" "}
                      <a className="text-primary fw-bold">Sign Up</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginView;
