import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Pet } from "../components/Pet";
import { petService } from "../services/pet.service";
export const YourPetPage = () => {
  const { user } = useContext(AuthContext);
  const [pets, setPets] = useState([]);

  const getPets = async () => {
    try {
      const response = await petService.yourPets(user._id);
      setPets(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  return !pets ? (
    <i className="loader --1"></i>
  ) : (
    <div className="container">
      <h1>Your Pets</h1>
      <div className="content-lg">
        {pets.map((pet) => {
          return (
            <Pet pet={pet} key={self.crypto.randomUUID()}  />
          );
        })}
      </div>
    </div>
  );
};
