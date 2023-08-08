import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import env from "../config";

const MedDetailsPage = () => {
  const [medDetails, setMedDetails] = useState({});
  const { medId } = useParams();

  const fetchMedDetails = async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/user/medication/${medId}`);
      if (response.status === 200) {
        setMedDetails(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMedDetails();
  }, [medId]);

  return (
    <>
      <div className="container">
      <h1>{medDetails.medName}</h1>
      <div className="content-md">
      
        <img src={medDetails.image} alt={medDetails.medName} style={{ height: "150px" }} />
        <p>{medDetails.description}</p>
        <p>Price: {medDetails.price}€</p>
        {medDetails.inStock ? (
          <div>
            <p>Amount in stock: {medDetails.amount}</p>
            <Link to={`/store/${medId}/checkout`}>
              Buy
            </Link>
          </div>
        ) : (
          <p>Out of Stock</p>
        )}
      </div>
      </div>
    </>
  );
};

export default MedDetailsPage;
