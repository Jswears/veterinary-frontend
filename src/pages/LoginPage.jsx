import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticateUser, storeToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5005/auth/login", { email, password });
      storeToken(response.data.token);
      console.log(response.data.token);
      authenticateUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
       <div className="container">
    <div className="content-md">
      <h1>Login </h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign in!</button>
      </form>
      <p>Not registered? <Link to={'/signup'} >Sign Up</Link></p>
      </div>
 </div>
    </>
  );
};

export default LoginPage;
