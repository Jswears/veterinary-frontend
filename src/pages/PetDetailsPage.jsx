import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate, useParams } from "react-router-dom";
import { petService } from "../services/pet.service";
import NoPetImage from "../assets/images/nopetimg.png";

export const PetDetailsPage = () => {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [pet, setPet] = useState([]);

  const getPet = async () => {
    try {
      const response = await petService.fetchOnePet(id);
      setPet(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await petService.deleteOnePet(id);
      if (response.status === 201) {
        console.log("Deleted successfully");
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  return (
    <div className="container">
      <div className="content-lg">
        <div className="pet-card-detail">
          <img src={pet.image ? pet.image : NoPetImage} />
        </div>
        <div className="sideRight">
          <p>
            {" "}
            <strong> Name: </strong> {pet.name}
          </p>
          <p>
            {" "}
            <strong> Age:</strong> {pet.age}
          </p>
          <p>
            {" "}
            <strong> Specie:</strong> {pet.specie}
          </p>
          <div className="buttons">
            <Link className="buttonLink" to={`/editPet/${pet._id}`}>
              Edit
            </Link>

            <button
              className="buttonLink"
              onClick={() => {
                handleDelete(pet._id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
