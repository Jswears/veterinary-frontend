import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function IsAdmin({ children }) {
  //grabbing information from the context (from the frig)
  const { isLoading, isLoggedIn, user } = useContext(AuthContext);
  //   const [isAdmin, setIsAdmin] = useState(user?.role === "admin");
  const navigate = useNavigate();
  //   const isAdmin = user?.role === "admin";

  //If the page is still loading, then return a p tag until the data arrives
  if (isLoading) {
    return <p>Loading...</p>;
  }
  //If the data has arrived and the user is still not logged IN, then redirect to the login page
  if (!isLoggedIn) {
    navigate("/login");
  }
  if (user?.role !== "admin") {
    return <p>NO ACCES TO YOU SIR</p>;
  }
  return <div>{children}</div>;
}

export default IsAdmin;
