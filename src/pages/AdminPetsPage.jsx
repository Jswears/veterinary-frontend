import axios from "axios";
import { useEffect, useState } from "react";

const AdminPetsPage = () => {
  const [allPets, setAllPets] = useState([]);

  const fetchAllPets = async () => {
    try {
      const response = await axios.get("http://localhost:5005/admin/all-pets");
      setAllPets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPets();
  }, []);

  return (
    <>
      <h1>All Registered Pets</h1>
      {allPets.map((pet) => {
        return (
          <div key={pet._id}>
            <h3>{pet.name}</h3>
            <img src={pet.image} />
          </div>
        );
      })}
    </>
  );
};

export default AdminPetsPage;
