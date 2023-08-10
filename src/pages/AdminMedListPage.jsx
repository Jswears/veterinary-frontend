import { useEffect, useState } from "react";
import OutStock from "../assets/images/out-of-stock.png";
import NoImage from "../assets/images/no-image-icon-23494.png";
import { Link } from "react-router-dom";
import { userService } from "../services/user.service";

const AdminMedListPage = () => {
  const [medList, setMedList] = useState();

  const fetchMedDetails = async () => {
    try {
      const response = await userService.fetchAllMeds();
      if (response.status === 200) {
        setMedList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMedDetails();
  }, []);
  return (
    <div className="container">
      <h1>Medication List</h1>
      {medList && (
        <div className="content-lg">
          {medList.map((med) => (
            <div className="pet-card" key={med._id}>
              <h3>{med.medName}</h3>
              <img
                src={
                  med.image ? med.image : med.amount === 0 ? OutStock : NoImage
                }
                alt=""
              />

              <p>Description: {med.description}</p>
              <p>Stock: {med.amount === 0 ? "Needs Restock" : med.amount}</p>
              <p>Price: {med.price}€</p>
              <Link to={`/admin/medicationDetail/${med._id}`}>Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMedListPage;
