import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function IsPrivate({ children }) {
  //grabbing information from the context (from the frig)
  const { isLoading, isLoggedIn, user } = useContext(AuthContext);
  const navigate = useNavigate();

  //If the page is still loading, then return a p tag until the data arrives
  if (isLoading) {
    return <i className="loader --1"></i>;
  }
  //If the data has arrived and the user is still not logged IN, then redirect to the login page
  if (!isLoggedIn) {
    navigate("/login");
  } else if (isLoggedIn && user?.role === "customer") {
    return children;
  } else if (user?.role === "admin") {
    navigate("/admin");
  }

  // ELse... return the child component.
  //Everything was ok

  return <div>{children}</div>;
}

export default IsPrivate;
