import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userService } from "../services/user.service";

const FeedbackDetailsPage = () => {
  const [feedback, setFeedback] = useState({});
  const { fbId } = useParams();

  const fetchFeedback = async () => {
    try {
      const response = await userService.feedBack(fbId)
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
