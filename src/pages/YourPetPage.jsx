import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

export const YourPetPage = () => {
  const { user } = useContext(AuthContext);
  const [pets, setPets] = useState([]);

  const getPets = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/user/your-pets/${user._id}`);
      setPets(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <div className="container">
      <h1>Your Pets</h1>
      <div className="content-lg">
        {pets.map((pet) => {
          return (
            <div className="pet-card" key={pet._id}>
              <img src={pet.image} />
              <h3>{pet.name}</h3>

              <Link to={`/detailPet/${pet._id}`}>Details</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
