import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {

  return (
    <>
      <div className="content-lg">
              <div className="button">
              
              <Link to="/new-form">  <i className="fa-solid fa-folder-plus"></i> New Form</Link>

                 </div>
 
                 <div className="button bg">
     
                 <Link to="/your-forms">  <i className="fa-solid fa-folder-plus"></i> Your Form</Link>
                  </div>    
                  <div className="button bg1">
                  <Link to="/new-pet">  <i className="fa-solid fa-folder-plus"></i> New pet</Link>

                  </div>  
                  <div className="button bg2">
                  
                  <Link to={"/your-pets"}>  <i className="fa-solid fa-folder-plus"></i> Your pets</Link>
                  </div> 
    </div>
     

    </>
  );
};

export default HomePage;
