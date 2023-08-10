import { Link } from "react-router-dom"
import OutStock from "../assets/images/out-of-stock.png";
import NoImage from "../assets/images/no-image-icon-23494.png";

export const Medication = ({med}) => {
  return (
    <div className="pet-card">
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
  )
}
