import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsAnon({ children }) {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  // If the authentication is still loading
  if (isLoading) return <p>Loading ...</p>;

  if (isLoggedIn) {
    // If the user is logged in, navigate to the home page
    if (user?.role !== "admin") {
      return <Navigate to="/" />;
    }
    if (user?.role === "admin") {
      return <Navigate to="/admin" />;
    }
  } else {
    // If the user is not logged in, allow to see the page
    return children;
  }
}

export default IsAnon;
