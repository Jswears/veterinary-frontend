import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OutStock from "../assets/images/out-of-stock.png";
import NoImage from "../assets/images/no-image-icon-23494.png";
import env from "../config";

const AdminMedDetailsPage = () => {
  const { medicationId } = useParams();
  const navigate = useNavigate();
  const [med, setMed] = useState(null);
  const getMed = async () => {
    try {
      const response = await axios.get(
        `${env.URL_BASE}/user/medication/${medicationId}`
      );
      setMed(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMed();
  }, []);

  const handleDelete = async (medicationId) => {
    try {
      const response = await axios.delete(
        `${env.URL_BASE}/admin/one-medication/${medicationId}`
      );
      console.log(response);
      navigate("/admin/medication-list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    med && (
      <div className="container">
        <div className="content-lg">
          <div className="pet-card-detail">
            <img
              src={
                med.image ? med.image : med.amount === 0 ? OutStock : NoImage
              }
              alt={med.name}
            />
          </div>

          <div className="sideRight">
            <p>
              <strong>Name: </strong>
              {med.medName}
            </p>
            <p>
              <strong>Description: </strong>
              {med.description}
            </p>
            <p>
              <strong>Amount: </strong> {med.amount}
            </p>
            <p>
              <strong>Price: </strong>
              {med.price}
            </p>
            <div className="buttons">
              <Link
                className="buttonLink"
                to={`/admin/edit-medication/${med._id}`}
              >
                Edit
              </Link>
              <button
                className="buttonLink"
                onClick={() => {
                  handleDelete(med._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AdminMedDetailsPage;
