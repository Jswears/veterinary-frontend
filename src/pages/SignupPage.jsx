import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const BASE_URL = "http://localhost:5005";

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
      const response = await axios.post(`${BASE_URL}/auth/signup`, requestBody);
      console.log(response)
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
    <div className="content-md">
    <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="fullname">Fullname:</label>
        <input type="text" name="fullname" value={fullname} onChange={handleFullname} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <button type="submit">Sign up!</button>
      </form>
      <p>Already registered? <Link to={'/login'} >Log in</Link></p>
     </div>
 </div>
    </>
  );
};

export default SignupPage;
