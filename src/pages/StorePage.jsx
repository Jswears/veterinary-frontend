import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StorePage = () => {
  const [medication, setMedication] = useState([]);

  const fetchMeds = async () => {
    try {
      const response = await axios.get("http://localhost:5005/user/medication");
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
          <div key={med._id}>
            <Link to={`/store/${med._id}`}>
              <h3>{med.medName}</h3>
            </Link>
            <img src={med.image} alt={med.medName} style={{ height: "150px" }} />
            {med.inStock ? <p>Amount left: {med.amount}</p> : <p>Currently out of stock</p>}
            <p>Price: {med.price}€</p>
          </div>
        );
      })}
      </div>
      </div>
    </>
  );
};

export default StorePage;
