import { useContext } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  const { isLoggedIn, logoutHandle } = useContext(AuthContext);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="brand">
          <Link to={"/"}>
            {" "}
            <img src={logo} alt=" vetapp" />{" "}
          </Link>
        </div>
        <ul className="menu">
          {!isLoggedIn && (
            <>
              <li>
                <Link to={"/login"}> Login</Link>
              </li>
              <li>
                <Link to={"/signup"}> Signup</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li>
                <button
                  onClick={() => {
                    logoutHandle();
                  }}
                >
           
                  Logout     <FontAwesomeIcon icon={faRightFromBracket} /> 
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
