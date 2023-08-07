import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faCat,
  faPaw,
  faFolderPlus,
  faHistory,
  faFaceAngry,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect, useState } from "react";
import env from "../config";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useContext(AuthContext);
  // console.log(isLoggedIn)
  const [feedback, setFeedback] = useState([]);

  //get feedback no read

  const getFeedbackUnread = async () => {
    const response = await axios.get(
      `http://localhost:5005/user/feedbacks/${user._id}`
    );

    if (response.status === 200) {
      setFeedback(response.data.filter((feed) => feed.read === false));
    }
  };

  useEffect(() => {
    getFeedbackUnread();
    if (isLoggedIn && user.role === "admin") {
      navigate("/admin");
    } else if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="content-lg">
        <div className="button">
          <Link to="/new-form">
            {" "}
            <FontAwesomeIcon icon={faFolderPlus} /> New Form
          </Link>
        </div>
        <div className="button bg">
          <Link to="/your-forms">
            {" "}
            <FontAwesomeIcon icon={faFolderOpen} /> Your Form
          </Link>
        </div>
        <div className="button bg1">
          <Link to="/new-pet">
            {" "}
            <FontAwesomeIcon icon={faPaw} /> New pet
          </Link>
        </div>
        <div className="button bg2">
          <Link to={"/your-pets"}>
            {" "}
            <FontAwesomeIcon icon={faCat} /> Your pets
          </Link>
        </div>
        <div className="button bg3">
          {feedback.length > 0 && (
            <>
              <div className="notify">{feedback.length}</div>
            </>
          )}

          <Link to={"/your-feedbacks"}>
            <FontAwesomeIcon icon={faHistory} /> Your Feedbacks
          </Link>
        </div>
        <div className="button bg">
          <Link to={"/complaints"}>
            <FontAwesomeIcon icon={faFaceAngry} /> Complaints
          </Link>
        </div>{" "}
        {/* Missing closing tag */}
        <div className="button bg2">
          <Link to={"/store"}> Store</Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
