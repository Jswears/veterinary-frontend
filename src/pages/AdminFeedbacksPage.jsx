import axios from "axios"
import { useEffect, useState } from "react";

import env from "../config";
export const AdminFeedbacksPage = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const getFeedbacks=async ()=>{
        const response= await axios.get(`${env.URL_BASE}/admin/all-feedback/`)
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
                  <p><strong>Request:</strong> {feedback.formId.request}</p>
                    <p><strong>Diagnosis:</strong> {feedback.medicalHistory}</p>
                    <p><strong>Therapy:</strong> {feedback.terapy}</p>
                    <p><strong>Tips:</strong>  {feedback.tips}</p>
                  </div>
                </>
            )
           })


         }


        </div>
        
      
        
        </div>
  )
}
