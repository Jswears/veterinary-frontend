import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import env from "../config";

const SignupPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleFullname = (e) => setFullname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = { fullname, email, password };
      const response = await axios.post(
        `${env.URL_BASE}/auth/signup`,
        requestBody
      );

      if (response.status === 201) {
        navigate("/login");
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
          <h1>Registration Form</h1>
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="fullname">Fullname:</label>
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={handleFullname}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
            <button type="submit">Sign up!</button>
          </form>
          <div className="error-message">
            <p>{errorMessage && errorMessage}</p>
          </div>
          <p>
            Already registered? <Link to={"/login"}>Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
