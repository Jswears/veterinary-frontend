import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const logoutHandle = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <>
      <h1>Home Page</h1>
      <button type="button" onClick={logoutHandle}>
        LogOut
      </button>
    </>
  );
};

export default HomePage;
