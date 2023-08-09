import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import env from "../config";

export const AdminEditMedPage = () => {
  const { medicationId } = useParams();
  const [medName, setMedName] = useState("");
  const [amount, setAmount] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [inStock, setInStock] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const getMed = async () => {
    try {
      const response = await axios.get(
        `${env.URL_BASE}/user/medication/${medicationId}`
      );
      const oneMed = response.data;
      setInStock(amount===0? false: true);
      setMedName(oneMed.medName);
      setAmount(oneMed.amount);
      setDescription(oneMed.description);
      setPrice(oneMed.price);
      setImage(oneMed.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMed();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsDisabled(true);
      const formData = { medName, amount, description, image, inStock};
      formData.amount===0 ? formData.inStock=false: formData.inStock=true
      console.log(formData)
      const response = await axios.put(
        `${env.URL_BASE}/admin/one-medication/${medicationId}`,
        formData,
        {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }
      );
      if (response.status === 201) {
        navigate("/admin/medication-list");
        setIsDisabled(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="content-md">
          <h1>Edit Med</h1>
          <form onSubmit={handleSubmit} className="form">
            <label>
              Name:
              <input
                type="text"
                value={medName}
                onChange={(e) => {
                  setMedName(e.target.value);
                }}
              />
            </label>
            <label>
              Amount:
              <input
                type="number"
                value={amount}
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                value={description}
                name="description"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </label>
            <label htmlFor="">
              <input
                type="text"
                value={price}
                name="price"
                id="price"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </label>
            <label>
              Image:
              <input
                type="file"
                onChange={(event) => {
                  setImage(event.target.files[0]);
                }}
                name="image"
              />
            </label>
            <button type="submit" disabled={isDisabled}>
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminEditMedPage;
