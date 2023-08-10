import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";

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
      const response = await authService.signUp(fullname, email, password);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
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
              required
              type="text"
              name="fullname"
              value={fullname}
              onChange={handleFullname}
            />
            <label htmlFor="email">Email:</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            <label htmlFor="password">Password:</label>
            <input
              required
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
