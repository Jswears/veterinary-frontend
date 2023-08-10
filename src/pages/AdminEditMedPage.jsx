import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminService } from "../services/admin.service";
import { userService } from "../services/user.service";

export const AdminEditMedPage = () => {
  const { medicationId } = useParams();
  const [medName, setMedName] = useState("");
  const [amount, setAmount] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [inStock, setInStock] = useState(undefined);

  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const getMed = async () => {
    try {
      const response = await userService.fetchOneMed(medicationId);
      const oneMed = response.data;
      setInStock(amount === 0 ? false : true);
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
      const formData = {
        medName,
        amount,
        description,
        image,
        inStock,
        price,
      };
      const response = await adminService.editMed(formData, medicationId);
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
            Price:
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
