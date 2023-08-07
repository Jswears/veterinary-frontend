import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:5005";

export const AdminComplaintsPage = () => {
  const [complaints, setComplaints] = useState("");

  const getAllComplaints = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/all-complaints`);
      setComplaints(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllComplaints();
  }, []);
  return !complaints ? (
    <p>Loading...</p>
  ) : (
    <div className="container">
      <h1>Complaints</h1>
      <div className="content-lg">
        {complaints.map((complaint) => (
          <div className="complaint-card" key={complaint._id}>
            <h3>
              Customer: {complaint.customerId && complaint.customerId.fullname}
            </h3>
            <p>{complaint.complaint}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
