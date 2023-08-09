import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import env from "../config";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { authenticateUser, storeToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${env.URL_BASE}/auth/login`, {
        email,
        password,
      });
      if (response.status === 202) {
        storeToken(response.data.token);
        authenticateUser();
        navigate("/");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        console.log(error);
        setErrorMessage("Error");
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="content-md">
          <h1>Login </h1>
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="email">Email:</label>
            <input
              required
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              required
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign in!</button>
          </form>
          <div className="error-message">
            <p>{errorMessage && errorMessage}</p>
          </div>
          <div>
            <p>
              Not registered? <Link to={"/signup"}>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
