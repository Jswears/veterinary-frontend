import axios from "axios"
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";

export const AdminFeedbacksPage = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const getFeedbacks=async ()=>{
        const response= await axios.get(`http://localhost:5005/admin/all-feedback/`)
           console.log(response)
            setFeedbacks(response.data)
  
      }
  
      useEffect(() => {
     
          getFeedbacks()
  
      }, [])
  return (
    <div className="container">
              <h1>All Feedbacks</h1>
       <div className="content-lg">
  


        {
           feedbacks.map(feedback=>{

            return (
                <>
                  <div className="pet-card">
                  <p>{feedback.formId.request}</p>
                    <p>{feedback.medicalHistory}</p>
                    <p>{feedback.terapy}</p>
                  </div>
                </>
            )
           })


         }


        </div>
        
      
        
        </div>
  )
}
