import axios from "axios";
import { useEffect, useState } from "react";

import env from "../config";
import { Pet } from "../components/Pet";
const AdminPetsPage = () => {
  const [allPets, setAllPets] = useState([]);

  const fetchAllPets = async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/admin/all-pets`);
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
            return (
              <Pet pet={pet} key={pet._id}  />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdminPetsPage;
