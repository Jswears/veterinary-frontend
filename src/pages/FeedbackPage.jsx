import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import env from "../config";
import { Feedback } from "../components/Feedback";

export const FeedbackPage = () => {
  const { user } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);
  const [id, setId] = useState(user._id);

  const getFeedbacks = async () => {
    const response = await axios.get(`${env.URL_BASE}/user/feedbacks/${id}`);
    setFeedbacks(response.data);
  }; // Added the closing curly brace for getFeedbacks function



  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div className="container">
      <h1> Your Feedback from Clinic</h1>

      <div className="content-lg">
        {feedbacks.map((feedback) => {
          return (
           <Feedback  feedback={feedback} key={self.crypto.randomUUID()}   />
          );
        })}
      </div>
    </div>
  );
};
