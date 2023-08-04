import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5005/auth/login", { email, password });
      localStorage.setItem("authToken", response.data.token);
      console.log(response.data);
      await authenticateUser;
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign up!</button>
      </form>
    </>
  );
};

export default LoginPage;
