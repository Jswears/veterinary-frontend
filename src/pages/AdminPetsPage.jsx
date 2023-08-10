import { useEffect, useState } from "react";
import { Pet } from "../components/Pet";
import { petService } from "../services/pet.service";
const AdminPetsPage = () => {
  const [allPets, setAllPets] = useState([]);

  const fetchAllPets = async () => {
    try {
      const response = await petService.fetchPets();
      setAllPets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPets();
  }, []);

  return !allPets ? (
    <i className="loader --1"></i>
  ) : (
    <>
      <div className="container">
        <h1>All Registered Pets</h1>
        <div className="content-lg">
          {allPets.map((pet) => {
            return <Pet pet={pet} key={pet._id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AdminPetsPage;
