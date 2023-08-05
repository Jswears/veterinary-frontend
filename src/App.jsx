import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import { NavBar } from "./components/NavBar";
import NewFormPage from "./pages/NewFormPage";
import YourFormsPage from "./pages/YourFormsPage";
import NewPetPage from "./pages/NewPetPage";
import IsPrivate from "./components/IsPrivate";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/new-form" element={<NewFormPage />} />
        <Route path="/your-forms" element={<YourFormsPage />} />
        <Route
          path="/new-pet"
          element={
            <IsPrivate>
              <NewPetPage />
            </IsPrivate>
          }
        />
      </Routes>
    </>
  );
};

export default App;
