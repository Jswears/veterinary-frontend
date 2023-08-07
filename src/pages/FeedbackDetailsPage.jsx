import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FeedbackDetailsPage = () => {
  const [feedback, setFeedback] = useState({});
  const { fbId } = useParams();

  const fetchFeedback = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/admin/feedback/${fbId}`);
      if (response.status === 201) {
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
      <h1>Feedback for {feedback.customerId && feedback.customerId.fullname}</h1>
      <div>
        <p>Diagnosis: {feedback.medicalHistory}</p>
        <p>Therapy: {feedback.terapy}</p>
        <p>Tips: {feedback.tips}</p>
      </div>
    </>
  );
};

export default FeedbackDetailsPage;
