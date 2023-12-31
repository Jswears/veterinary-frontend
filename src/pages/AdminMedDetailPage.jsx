import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OutStock from "../assets/images/out-of-stock.png";
import NoImage from "../assets/images/no-image-icon-23494.png";
import { adminService } from "../services/admin.service";
import { userService } from "../services/user.service";

const AdminMedDetailsPage = () => {
  const { medicationId } = useParams();
  const navigate = useNavigate();
  const [med, setMed] = useState(null);
  const getMed = async () => {
    try {
      const response = await userService.medDetails(medicationId);
      setMed(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (medicationId) => {
    try {
      const response = await adminService.deleteMed(medicationId);
      if (response.status === 201) {
        console.log("Successfully deleted");
      }
      navigate("/admin/medication-list");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMed();
  }, []);

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
