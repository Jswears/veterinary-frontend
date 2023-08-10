import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OutStock from "../assets/images/out-of-stock.png";
import NoImage from "../assets/images/no-image-icon-23494.png";

import env from "../config";
import { userService } from "../services/user.service";

const StorePage = () => {
  const [medication, setMedication] = useState([]);

  const fetchMeds = async () => {
    try {
      const response = await userService.fetchAllMeds();
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
              <div className="pet-card" key={med._id}>
                <Link to={`/store/${med._id}`}>
                  <h3>{med.medName}</h3>
                </Link>
                <img
                  src={
                    med.image
                      ? med.image
                      : med.amount === 0
                      ? OutStock
                      : NoImage
                  }
                  alt={med.medName}
                />
                {med.inStock ? (
                  <p>Amount left: {med.amount}</p>
                ) : (
                  <p>Currently out of stock</p>
                )}
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
