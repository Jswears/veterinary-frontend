import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faPaw} from "@fortawesome/free-solid-svg-icons";
const AdminPanelPage = () => {
  return (
    <>
    <div className="container">
      <h1>Admin Panel</h1>
      
      <div className="content-lg">
          <div className="button">
                  <Link to="/admin/all-pets">  <FontAwesomeIcon icon={faPaw} /> All Pets </Link>
            </div>      
            <div className="button bg">
                 <Link to="/admin/all-forms"> <FontAwesomeIcon icon={faFolderOpen} />  All Pending Forms</Link>
            </div>     
      </div>
      </div>
    </>
  );
};

export default AdminPanelPage;
