import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { userService } from "../services/user.service";

const ComplaintsPage = () => {
  const { user } = useContext(AuthContext);
  const [complaint, setComplaint] = useState("");
  const [customerId, setCustomerId] = useState(user._id);

  const navigate = useNavigate();

  const handleComplaint = (e) => setComplaint(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    try {
      const response = await userService.postComplaint(complaint, customerId);
      if (response.status === 201) {
        navigate("/");
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="content-md">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="complaint">Complaint</label>
          <textarea
            name="complaint"
            id="complaint"
            cols="30"
            rows="10"
            onChange={handleComplaint}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintsPage;
