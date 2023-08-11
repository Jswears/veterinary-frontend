import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMedkit } from "@fortawesome/free-solid-svg-icons";
import env from "../config";
const AdminArchivedFormsPage = () => {
  const [allForms, setAllForms] = useState([]);

  const fetchAllForms = async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/admin/all-forms`);

      if (response.status === 200) {
        setAllForms(response.data.filter((feed) => feed.read === true));
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
if(response) {
  console.log('Success')
}
} catch (error) {
  console.log(error)
}

}


   
return !allForms ? (
  <i className="loader --1"></i>
  ) : (
    <>
      <div className="container">
        <h1>Archived Forms</h1>
        <div className="content-lg">
          {allForms.map((form) => {
            return (
              <>
                <div className="pet-card" key={crypto.randomUUID()}>
                  <h3>Patient Name: {form.petId && form.petId.name}</h3>
                  <h3>Customer: {form.customerId && form.customerId.fullname}</h3>
                  <FontAwesomeIcon icon={faMedkit} />
                  <p>{form.request}</p>

                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdminArchivedFormsPage;