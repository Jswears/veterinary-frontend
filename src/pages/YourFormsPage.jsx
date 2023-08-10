import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import env from "../config";
import { Form } from "../components/Form";
const YourFormsPage = () => {
  const { user } = useContext(AuthContext);
  const [forms, setForms] = useState([]);
  const [id, setId] = useState(user._id);

  const fetchForms = async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/user/your-forms/${id}`);

      setForms(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  if (!forms) {
 return   <i className="loader --1"></i>
  } else {
    return (
      <>
        <div className="container">
          <h1>Your forms</h1>
          <div className="content-lg">
            {forms.map((form) => {
              return (
              <Form  form={form} key={form._id}   />
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default YourFormsPage;
