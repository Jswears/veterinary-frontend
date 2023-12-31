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
import { AdminComplaintsPage } from "./pages/AdminComplaintsPage";
import ComplaintsPage from "./pages/ComplaintsPage";
import FeedbackDetailsPage from "./pages/FeedbackDetailsPage";
import StorePage from "./pages/StorePage";
import MedDetailsPage from "./pages/MedDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import AdminAddMedPage from "./pages/AdminAddMedPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import { useContext } from "react";
import { AuthContext } from "./context/auth.context";
import { AdminCustomersListPage } from "./pages/AdminCustomersListPage";
import { Footer } from "./components/Footer";
import AdminMedListPage from "./pages/AdminMedListPage";
import AdminMedDetailsPage from "./pages/AdminMedDetailPage";
import AdminEditMedPage from "./pages/AdminEditMedPage";
import NotFound from "./pages/404Page";
import AdminArchivedFormsPage from "./pages/AdminArchivedFormsPage";

const App = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
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
              <FeedbackPage />
            </IsPrivate>
          }
        />
        <Route
          path="/your-feedbacks/:fbId"
          element={
            <IsPrivate>
              <FeedbackDetailsPage />
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
          path={"/complaints"}
          element={
            <IsPrivate>
              <ComplaintsPage />
            </IsPrivate>
          }
        />
        <Route
          path="/store"
          element={
            <IsPrivate>
              <StorePage />
            </IsPrivate>
          }
        />
        <Route
          path="/store/:medId"
          element={
            <IsPrivate>
              <MedDetailsPage />
            </IsPrivate>
          }
        />
        <Route
          path="/store/:medId/checkout"
          element={
            <IsPrivate>
              <CheckoutPage />
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
          path="/admin/all-complaints"
          element={
            <IsAdmin>
              <AdminComplaintsPage />
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
        <Route
          path="/admin/medication"
          element={
            <IsAdmin>
              <AdminAddMedPage />
            </IsAdmin>
          }
        />
        <Route
          path="/admin/customers"
          element={
            <IsAdmin>
              <AdminCustomersListPage />
            </IsAdmin>
          }
        />
        <Route
          path="/admin/medication-list"
          element={
            <IsAdmin>
              <AdminMedListPage />
            </IsAdmin>
          }
        />
        <Route
          path="/admin/medicationDetail/:medicationId"
          element={
            <IsAdmin>
              <AdminMedDetailsPage />
            </IsAdmin>
          }
        />
        <Route
          path="/admin/edit-medication/:medicationId"
          element={
            <IsAdmin>
              <AdminEditMedPage />
            </IsAdmin>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/admin/archivedForms"
          element={
            <IsAdmin>
              <AdminArchivedFormsPage />
            </IsAdmin>
          }
        />
      </Routes>
      {isLoggedIn && user.role !== "admin" && <ChatbotComponent />}
      <Footer />
    </>
  );
};

export default App;
