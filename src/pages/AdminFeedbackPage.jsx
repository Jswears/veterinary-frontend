import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AdminFeedbackPage = () => {
  const navigate = useNavigate();
  const { formId } = useParams();
  const [form, setForm] = useState({});
  const [diagnosis, setDiagnosis] = useState("");
  const [terapy, setTerapy] = useState("");
  const [tips, setTips] = useState("");
  const navigate = useNavigate();

  const fetchOneForm = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/admin/form/${formId}`);
      setForm(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5005/admin/new-feedback", {
        medicalHistory: diagnosis,
        terapy,
        tips,
        customerId: form.customerId,
        formId: form._id,
      });
      if (response.status === 201) {
        console.log(response.data.message);
        navigate("/admin");
      }
      navigate("/admin/all-forms");
    } catch (error) {
      console.log(error);
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
                cols="30"
                rows="10"
                value={diagnosis}
                onChange={(event) => setDiagnosis(event.target.value)}
              ></textarea>
            </label>

            <label>
              Therapy:
              <input
                type="text"
                value={terapy}
                onChange={(event) => setTerapy(event.target.value)}
              />
            </label>

            <label>
              Tips:
              <textarea
                cols="30"
                rows="10"
                value={tips}
                onChange={(event) => setTips(event.target.value)}
              ></textarea>
            </label>
            <button type="submit">Send Feedback</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminFeedbackPage;
