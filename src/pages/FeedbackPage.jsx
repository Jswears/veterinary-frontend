import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import env from "../config";
import { Link } from "react-router-dom"; // Added the import statement for Link

export const FeedbackPage = () => {
  const { user } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);
  const [id, setId] = useState(user._id);

  const getFeedbacks = async () => {
    const response = await axios.get(`${env.URL_BASE}/user/feedbacks/${id}`);
    console.log(response);
    setFeedbacks(response.data);
  }; // Added the closing curly brace for getFeedbacks function

  const updateFeedbackRead = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:5005/admin/feedback/${id}`,
        {
          read: true,
        }
      );
      if (response.status === 202) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div className="container">
      <h1> Your Feedback from Clinic</h1>

      <div className="content-lg">
        {feedbacks.map((feedback) => {
          return (
            <div className="pet-card" key={feedback._id}>
              <p>{feedback.formId.request}</p>
              <p>{feedback.medicalHistory}</p>
              <Link to={`/your-feedbacks/${feedback._id}`}>
                <button
                  onClick={() => {
                    updateFeedbackRead(feedback._id);
                  }}
                >
                  Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
