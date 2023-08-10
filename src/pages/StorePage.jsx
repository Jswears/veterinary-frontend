import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import env from "../config";
import { Medication } from "../components/Medication";

const StorePage = () => {
  const [medication, setMedication] = useState([]);

  const fetchMeds = async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/user/medication`);
      if (response.status === 200) {
        setMedication(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMeds();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Welcome to our Store</h1>
        <div className="content-lg">
          {medication.map((med) => {
            return (
             <Medication med={med} key={self.crypto.randomUUID()} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StorePage;
