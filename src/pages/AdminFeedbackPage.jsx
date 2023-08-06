import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminFeedbackPage = () => {
  const { formId } = useParams();
  const [form, setForm] = useState({});

  const fetchOneForm = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/admin/form/${formId}`);
      setForm(response.data);
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
    </>
  );
};

export default AdminFeedbackPage;
