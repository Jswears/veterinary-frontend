
import { useEffect, useState } from "react";


import { adminService } from "../services/admin.service";
export const AdminFeedbacksPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const getFeedbacks = async () => {
    const response = await adminService.fetchFeedbacks();
    setFeedbacks(response.data);
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return !feedbacks ? (
    <i className="loader --1"></i>
  ) : (
    <div className="container">
      <h1>All Feedbacks</h1>
      <div className="content-lg">
        {feedbacks.map((feedback) => {
          return (
            <>
              <div className="pet-card">
                <p>
                  <strong>Customer:</strong> {feedback.customerId.fullname}
                </p>
                <p>
                  <strong>Request:</strong> {feedback.formId.request}
                </p>
                <p>
                  <strong>Diagnosis:</strong> {feedback.medicalHistory}
                </p>
                <p>
                  <strong>Therapy:</strong> {feedback.terapy}
                </p>
                <p>
                  <strong>Tips:</strong> {feedback.tips}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
