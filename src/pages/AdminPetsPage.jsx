import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="container">
        <h1>All Registered Pets</h1>
        <div className="content-lg">
          {allPets.map((pet) => {
            return (
              <div className="pet-card" key={pet._id}>
                <h3>{pet.name}</h3>
                <img src={pet.image} />
                <h3>Owner: {pet.customerId.fullname} </h3>
                <p>Age: {pet.age}</p>
                <p>Specie: {pet.specie}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdminPetsPage;
