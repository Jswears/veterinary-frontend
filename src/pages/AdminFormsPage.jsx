import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminFormsPage = () => {
  const [allForms, setAllForms] = useState([]);

  const fetchAllForms = async () => {
    try {
      const response = await axios.get("http://localhost:5005/admin/all-forms");
    
      if (response.status === 200) {
        setAllForms(response.data);
      
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllForms();
  }, []);

  return (
    <>
<div className="container">
                   <h1>All Forms</h1>
          <div className="content-lg">
      {allForms.map((form) => {
        return (
          <>
                <div className="pet-card">
            <h3>Patient Name: {form.petId && form.petId.name}</h3>
            <p>{form.request}</p>
            <div className="small-button">
            <Link to={`/admin/all-forms/${form._id}`}>Give feedback</Link>
            </div>
        
            </div>
         
          </>
        );
      })}
          </div>
          </div>
    </>
  );
};

export default AdminFormsPage;
