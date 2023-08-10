import CatPic from "../assets/images/404.png";

const NotFound = () => {
  return (
    <>
      <div className="not-found-container">
        <img src={CatPic} alt="page not found" />
      </div>
    </>
  );
};

export default NotFound;
