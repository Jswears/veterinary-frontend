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
import { YourPetPage } from "./pages/YourPetPage";
import IsAnon from "./components/IsAnon";
import { PetDetailsPage } from "./pages/PetDetailsPage";
import { EditPetPage } from "./pages/EditPetPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/"
          element={
            <IsPrivate>
              <HomePage />
            </IsPrivate>
          }
        />
        <Route
          path="/new-form"
          element={
            <IsPrivate>
              {" "}
              <NewFormPage />
            </IsPrivate>
          }
        />
        <Route
          path="/your-forms"
          element={
            <IsPrivate>
              <YourFormsPage />
            </IsPrivate>
          }
        />
        <Route
          path="/your-pets"
          element={
            <IsPrivate>
              <YourPetPage />
            </IsPrivate>
          }
        />
        <Route
          path="/editPet/:id"
          element={
            <IsPrivate>
              <EditPetPage />
            </IsPrivate>
          }
        />
        <Route
          path="/detailPet/:id"
          element={
            <IsPrivate>
              <PetDetailsPage />
            </IsPrivate>
          }
        />

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
