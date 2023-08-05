import { useEffect, useState } from "react";

const YourFormsPage = () => {
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    try {
      const response = await axios.get("");
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
