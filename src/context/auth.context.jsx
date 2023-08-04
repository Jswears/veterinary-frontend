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
          headers: { authorization: `Bearer ${tokenInStorage}` },
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
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ test: "Hello context works", authenticateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
