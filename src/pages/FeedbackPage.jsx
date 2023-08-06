import axios from "axios"
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";

export const FeedbackPage = () => {
    const { user } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);
  const [id, setId] = useState(user._id);

    const getFeedbacks=async ()=>{
      const response= await axios.get(`http://localhost:5005/user/feedbacks/${id}`)
         console.log(response)
          setFeedbacks(response.data)

    }

    useEffect(() => {
   
        getFeedbacks()

    }, [])
    


  return (
    <div className="container">
        <h1>  Your Feedback from Clinic</h1>
    
        <div className="content-lg">
         {
           feedbacks.map(feedback=>{

            return (
                <>
                  <div className="pet-card">
                  <p>{feedback.formId.request}</p>
                    <p>{feedback.medicalHistory}</p>
                    <p>link to details</p>
                  </div>
                </>
            )
           })


         }
         </div>   

    </div>
  )
}
