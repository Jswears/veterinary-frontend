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
import AdminPanelPage from "./pages/AdminPanelPage";
import AdminPetsPage from "./pages/AdminPetsPage";
import AdminFormsPage from "./pages/AdminFormsPage";
import AdminFeedbackPage from "./pages/AdminFeedbackPage";
import IsAdmin from "./components/isAdmin";
import { FeedbackPage } from "./pages/FeedbackPage";
import { AdminFeedbacksPage } from "./pages/AdminFeedbacksPage";
import { AdminComplainsPage } from "./pages/AdminComplainsPage";
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
          path="/your-feedbacks"
          element={
            <IsPrivate>
              <FeedbackPage/>
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
        <Route
          path="/admin"
          element={
            <IsAdmin>
              <AdminPanelPage />
            </IsAdmin>
          }
        />
        <Route
          path="/admin/all-pets"
          element={
            <IsAdmin>
              <AdminPetsPage />
            </IsAdmin>
          }
        />
        <Route
          path="/admin/all-forms"
          element={
            <IsAdmin>
              <AdminFormsPage />
            </IsAdmin>
          }
        />
          <Route
          path="/admin/all-feedbacks"
          element={
            <IsAdmin>
              <AdminFeedbacksPage />
            </IsAdmin>
          }
        />
             <Route
          path="/admin/all-complains"
          element={
            <IsAdmin>
              <AdminComplainsPage />
            </IsAdmin>
          }
        />
        <Route
          path="/admin/all-forms/:formId"
          element={
            <IsAdmin>
              <AdminFeedbackPage />
            </IsAdmin>
          }
        />
      </Routes>
    </>
  );
};

export default App;
