import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import env from "../config";
import { adminService } from "../services/admin.service";
const AdminFeedbackPage = () => {
  const navigate = useNavigate();
  const { formId } = useParams();
  const [form, setForm] = useState({});
  const [diagnosis, setDiagnosis] = useState("");
  const [terapy, setTerapy] = useState("");
  const [tips, setTips] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const fetchOneForm = async () => {
    try {
      const response = await adminService.fetchForm(formId);
      setForm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await adminService.sendFeedback(
        diagnosis,
        terapy,
        tips,
        form
      );
      console.log(response);
      if (response && response.status === 201) {
        navigate("/admin");
      } else {
        navigate("/admin/all-forms");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchOneForm();
  }, [formId]);

  return (
    <>
      <div className="container">
        <div className="content-md">
          <h1>Request</h1>
          <h3>{form.petId && form.petId.name}</h3>
          <p>{form.request}</p>

          <form onSubmit={handleSubmit} className="form">
            <label>
              Diagnosis:
              <textarea
                required
                cols="30"
                rows="10"
                value={diagnosis}
                onChange={(event) => setDiagnosis(event.target.value)}
              ></textarea>
            </label>

            <label>
              Therapy:
              <textarea
                required
                type="text"
                value={terapy}
                onChange={(event) => setTerapy(event.target.value)}
              ></textarea>
            </label>

            <label>
              Tips:
              <textarea
                required
                cols="30"
                rows="10"
                value={tips}
                onChange={(event) => setTips(event.target.value)}
              ></textarea>
            </label>
            <p className="erorr-message">{errorMessage && errorMessage}</p>
            <button type="submit">Send Feedback</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminFeedbackPage;
