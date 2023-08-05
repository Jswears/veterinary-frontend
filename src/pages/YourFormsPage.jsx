import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const YourFormsPage = () => {
  const { user } = useContext(AuthContext);
  const [forms, setForms] = useState([]);
  const [id, setId] = useState(user._id);

  const fetchForms = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/user/your-forms/${id}`);

      setForms(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

 if( !forms  ){
  return (<div>is loading</div>)
 }
else{
  return (
    <>
    <div className="container">
       <h1>Your forms</h1>
    <div className="content-lg">
   
      {forms.map((form) => {
        return (
          <>
   
         
            <div className="pet-card">
            <p>{form.request}</p> 
            <h3>Patient Name: { form.petId &&    form.petId.name}</h3>
          </div>
          </>
        );
      })}
      </div>
      </div>
    </>
  );
    }
};

export default YourFormsPage;
