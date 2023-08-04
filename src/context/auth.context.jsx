import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const authenticateUser = async () => {
    const tokenInStorage = localStorage.getItem("authToken");
    if (tokenInStorage) {
      try {
        const response = await axios("http://localhost:5005/auth/verify", {
          // IF ERROR CAPITAL A
          headers: { Authorization: `Bearer ${tokenInStorage}` },
        });
        setUser(response.data.currentUser);
        setIsLoading(false);
        setIsLoggedIn(true);
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
    authenticateUser()
    navigate("/login");
  };

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  }  

  return (
    <AuthContext.Provider value={{ storeToken, isLoading, isLoggedIn, user, authenticateUser, logoutHandle }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
