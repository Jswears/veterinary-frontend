import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { adminService } from "../services/admin.service";

export const AdminComplaintsPage = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState("");

  const getAllComplaints = async () => {
    try {
      const response = await adminService.fetchComplaints();

      setComplaints(
        response.data && response.data.filter((feed) => feed.read === false)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplainsRead = async (id) => {
    try {
      const response = await adminService.complaintsRead(id);
      if (response.status === 200) {
        //refresh
        navigate(`/admin/all-complaints`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllComplaints();
  }, []);
  return !complaints ? (
    <i className="loader --1"></i>
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
            <div>
              <label>read </label>
              {complaint.read && <input type="checkbox" checked />}
              {!complaint.read && (
                <input
                  type="checkbox"
                  onClick={() => {
                    handleComplainsRead(complaint._id);
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
