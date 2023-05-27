import { createContext } from "react";
import { useDependency } from "../hooks/UseDependency";
import { useSessionStorage } from "../hooks/UseSessionStorage";
import { APP_TOKEN } from "../constans";
import { UnauthorizedError } from "../errors/AppError";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { loginService } = useDependency();
  const [token, setToken] = useSessionStorage(APP_TOKEN, null);

  const onLogin = async (userCredential) => {
    try {
      const response = await loginService.doAuthenticate(userCredential);
      if (response) {
        setToken(response.token);
        return true;
      }
      throw new UnauthorizedError();
    } catch (error) {
      throw new UnauthorizedError();
    }
  };

  const onLogout = () => {
    setToken(null);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
