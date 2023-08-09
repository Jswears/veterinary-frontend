import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faPaw,
  faHistory,
  faFaceAngry,
  faPills,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import env from "../config";

const AdminPanelPage = () => {
  const [forms, setForms] = useState([]);

  // Get forms with no read

  const getFormUnread = async () => {
    const response = await axios.get(`${env.URL_BASE}/admin/all-forms`);

    if (response.status === 200) {
      setForms(response.data.filter((form) => form.read === false));
    }
  };

  const [feedback, setFeedback] = useState([]);

  // Get feedback with no read
  const getFeedbackUnread = async () => {
    const response = await axios.get(`${env.URL_BASE}/admin/all-feedback`);

    if (response.status === 200) {
      setFeedback(response.data.filter((feed) => feed.read === false));
    }
  };

  const [complaint, setComplaint] = useState([]);
  // Get complaints with no read
  const getComplaintsUnread = async () => {
    const response = await axios.get(`${env.URL_BASE}/admin/all-complaints`);

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
        </div>
      </div>
    </>
  );
};

export default AdminPanelPage;
