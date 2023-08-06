import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminFeedbackPage = () => {
  const { formId } = useParams();
  const [form, setForm] = useState({});
  const [diagnosis, setDiagnosis] = useState("");
  const [therapy, setTherapy] = useState("");
  const [tips, setTips] = useState("");

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
        therapy,
        tips,
        customerId: form.customerId,
        formId: form._id,
      });
      if (response.status === 201) {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOneForm();
  }, [formId]);

  return (
    <>
      <div>
        <h1>Request</h1>
        <h3>{form.petId && form.petId.name}</h3>
        <p>{form.request}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Diagnosis:
            <textarea
              cols="30"
              rows="10"
              value={diagnosis}
              onChange={(event) => setDiagnosis(event.target.value)}
            ></textarea>
          </label>
          <br />
          <label>
            Therapy:
            <input
              type="text"
              value={therapy}
              onChange={(event) => setTherapy(event.target.value)}
            />
          </label>
          <br />
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
    </>
  );
};

export default AdminFeedbackPage;
