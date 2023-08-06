import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faCat, faPaw, faFolderPlus,  } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../context/auth.context";
import { useContext, useEffect } from "react";

const HomePage = () => {
const navigate=  useNavigate()
  const { isLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    if(!isLoggedIn) {
      navigate('/login')
    }
  }, [])
  

  return (
    <>
    {isLoggedIn &&
      <div className="content-lg">
              <div className="button">
              
              <Link to="/new-form">  <FontAwesomeIcon icon={faFolderPlus} />  New Form</Link>

                 </div>
 
                 <div className="button bg">
     
                 <Link to="/your-forms">  <FontAwesomeIcon icon={faFolderOpen} /> Your Form</Link>
                  </div>    
                  <div className="button bg1">
                  <Link to="/new-pet">  <FontAwesomeIcon icon={faPaw} /> New pet</Link>

                  </div>  
                  <div className="button bg2">
                  
                  <Link to={"/your-pets"}>  <FontAwesomeIcon icon={faCat} />  Your pets</Link>
                  </div> 
    </div>
}

    </>
  );
};

export default HomePage;
