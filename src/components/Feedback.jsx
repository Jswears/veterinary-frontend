import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { adminService } from "../services/admin.service";

export const Feedback = ({ feedback }) => {
  const updateFeedbackRead = async (id) => {
    try {
      const response = await adminService.feedbackRead(id);
      if (response.status === 202) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pet-card " key={feedback._id}>
      {feedback.read === false && (
        <div className="notify">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      )}

      <p>{feedback.formId.request}</p>
      <p>{feedback.medicalHistory}</p>
      <Link
        to={`/your-feedbacks/${feedback._id}`}
        onClick={() => {
          updateFeedbackRead(feedback._id);
        }}
      >
        Details
      </Link>
    </div>
  );
};
