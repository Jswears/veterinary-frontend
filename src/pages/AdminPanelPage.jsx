import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faPaw,
  faHistory,
  faFaceAngry,
  faPills,
  faUser,
  faList,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { adminService } from "../services/admin.service";

const AdminPanelPage = () => {
  const [forms, setForms] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [complaint, setComplaint] = useState([]);
  // Get forms with no read
  // hola
  const getFormUnread = async () => {
    const response = await adminService.fetchForms();
    if (response.status === 200) {
      setForms(response.data.filter((form) => form.read === false));
    }
  };

  // Get feedback with no read
  const getFeedbackUnread = async () => {
    const response = await adminService.fetchFeedbacks();

    if (response.status === 200) {
      setFeedback(response.data.filter((feed) => feed.read === false));
    }
  };

  // Get complaints with no read
  const getComplaintsUnread = async () => {
    const response = await adminService.fetchComplaints();

    if (response.status === 200) {
      setComplaint(
        response.data.filter((complaint) => complaint.read === false)
      );
    }
  };

  useEffect(() => {
    getFormUnread();
    getFeedbackUnread();
    getComplaintsUnread();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Admin Panel</h1>

        <div className="content-lg">
          <div className="button">
            <Link to="/admin/all-pets">
              {" "}
              <FontAwesomeIcon icon={faPaw} /> All Pets{" "}
            </Link>
          </div>
          <div className="button bg">
            {forms.length > 0 && (
              <>
                <div className="notify">{forms.length}</div>
              </>
            )}
            <Link to="/admin/all-forms">
              {" "}
              <FontAwesomeIcon icon={faFolderOpen} /> All Pending Forms
            </Link>
          </div>

          <div className="button bg2">
            {feedback.length > 0 && (
              <>
                <div className="notify">{feedback.length}</div>
              </>
            )}
            <Link to="/admin/all-feedbacks">
              {" "}
              <FontAwesomeIcon icon={faHistory} /> Feedbacks
            </Link>
          </div>
          <div className="button bg3">
            {complaint.length > 0 && (
              <>
                <div className="notify">{complaint.length}</div>
              </>
            )}
            <Link to="/admin/all-complaints">
              {" "}
              <FontAwesomeIcon icon={faFaceAngry} /> Complaints
            </Link>
          </div>
          <div className="button">
            <Link to="/admin/medication">
              {" "}
              <FontAwesomeIcon icon={faPills} /> Add Medication{" "}
            </Link>
          </div>
          <div className="button bg">
            <Link to="/admin/medication-list">
              {" "}
              <FontAwesomeIcon icon={faList} /> Medication List{" "}
            </Link>
          </div>
          <div className="button bg2">
            <Link to="/admin/customers">
              {" "}
              <FontAwesomeIcon icon={faUser} /> Customer&apos;s list{" "}
            </Link>
          </div>
          <div className="button bg3">
            <Link to="/admin/archivedForms">
              {" "}
              <FontAwesomeIcon icon={faArchive} />Archived Forms{" "} 
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanelPage;
