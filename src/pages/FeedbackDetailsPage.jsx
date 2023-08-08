import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from "../config";

const FeedbackDetailsPage = () => {
  const [feedback, setFeedback] = useState({});
  const { fbId } = useParams();

  const fetchFeedback = async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/admin/feedback/${fbId}`);
      if (response.status === 200) {
        setFeedback(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, [fbId]);

  return (
    <>
    <div className="container">
    <h1>Feedback</h1>
    <div className="content-lg">
    <div className="pet-card-detail">
        <p> <strong>Diagnosis:</strong>   {feedback.medicalHistory}</p>
        <p><strong>Therapy:</strong>  {feedback.terapy}</p>
        <p><strong>Tips:</strong>  {feedback.tips}</p>
      </div>
    </div>
      
    </div>
     
    </>
  );
};

export default FeedbackDetailsPage;
