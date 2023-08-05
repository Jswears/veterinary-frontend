import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";

const YourFormsPage = () => {
  const { user } = useContext(AuthContext);
  const [forms, setForms] = useState([]);
  const [id, setId] = useState(user._id);

  const fetchForms = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/user/your-forms/${id}`);
      setForms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <>
      <h1>All forms</h1>
      {forms.map((form) => {
        return (
          <div>
            <h3>{form.title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default YourFormsPage;
