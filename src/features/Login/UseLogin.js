import { useState } from "react";
import { useAuth } from "../../shared/hooks/UseAuth";
import { useViewState } from "../../shared/hooks/UseViewState";
import { useNavigate } from "react-router-dom";
import { APP_NAVIGATION } from "../../shared/constans";
import {
  RequiredFieldError,
  UnauthorizedError,
} from "../../shared/errors/AppError";

const useLogin = () => {
  const { onLogin } = useAuth();
  const { viewState, setLoading, setError } = useViewState();
  const [userCred, setUserCred] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (key, value) => {
    userCred[key] = value;
    setUserCred({ ...userCred });
  };

  const handleLogin = async () => {
    setLoading();
    try {
      if (userCred.username === "" && userCred.password === "") {
        throw new RequiredFieldError(
          "Please input your user name and password"
        );
      } else {
        const response = await onLogin(userCred);
        if (response) {
          navigate(APP_NAVIGATION.MAIN, { replace: true });
        } else {
          throw new UnauthorizedError();
        }
      }
    } catch (e) {
      setError(e.message);
    }
  };
  return { viewState, userCred, handleInputChange, handleLogin };
};

export default useLogin;
