import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";
const AuthContext = createContext();

const AuthContextWrapper = (props) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const authenticateUser = async () => {
    const tokenInStorage = localStorage.getItem("authToken");
    if (tokenInStorage) {
      try {
        const response = await authService.verify(tokenInStorage);
        // console.log(response.data);
        setUser(response.data.currentUser);
        setIsLoading(false);
        setIsLoggedIn(true);
        // console.log(user);
      } catch (error) {
        console.log(error);
        setUser(null);
        setIsLoading(false);
        setIsLoggedIn(false);
      }
    } else {
      setUser(null);
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  };

  const logoutHandle = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/login");
  };

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  useEffect(() => {
    // Run the function after the initial render,
    // after the components in the App render for the first time.
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeToken,
        isLoading,
        isLoggedIn,
        user,
        authenticateUser,
        logoutHandle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
