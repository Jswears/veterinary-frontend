import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import env from "../config";

const AdminAddMedPage = () => {
  const [medName, setMedName] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${env.URL_BASE}/user/medication`, {
        medName,
        amount,
        description,
        price,
        image,
      });
      if (response.status === 201) {
        setMedName("");
        setAmount(0);
        setDescription("");
        setPrice(0);
        setImage("");
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="container">
      <h1>Add Medication</h1>
      <div className="content-md">
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name:
            <input
              type="text"
              value={medName}
              onChange={(event) => setMedName(event.target.value)}
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <label>
            Price:
            <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
          </label>
          <label>
            Image:
            <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default AdminAddMedPage;
