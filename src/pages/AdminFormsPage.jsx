import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faMedkit } from "@fortawesome/free-solid-svg-icons";
import env from "../config";
const AdminFormsPage = () => {
  const [allForms, setAllForms] = useState([]);

  const fetchAllForms = async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/admin/all-forms`);
    
      if (response.status === 200) {
        setAllForms(response.data.filter(feed=>  feed.read===false))
      
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllForms();
  }, []);

const updateReadForm=async(id)=>{

try {
const response= await axios.patch(`${env.URL_BASE}/admin/form/${id}`)
console.log(response)
} catch (error) {
  console.log(error)
}

}


  return (
    <>
<div className="container">
                   <h1>All Pending Forms</h1>
          <div className="content-lg">
      {allForms.map((form) => {
        return (
          <>
                <div className="pet-card">
            <h3>Patient Name: {form.petId && form.petId.name}</h3>
            <FontAwesomeIcon icon={faMedkit} /> 
            <p>{form.request}</p>
            <div className="small-button">
            <Link to={`/admin/all-forms/${form._id}`}  onClick={()=>{updateReadForm(form._id)}}   > <FontAwesomeIcon icon={faReply} />    Give feedback</Link>
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
