import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate, useParams } from "react-router-dom";
import { petService } from "../services/pet.service";

export const EditPetPage = () => {
  const specieArr = ["dog", "cat", "turtle", "rabbit"];
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [specie, setSpecie] = useState("");
  const [image, setImage] = useState("");
  const [customerId, setCustomerId] = useState(user._id);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const getPet = async () => {
    try {
      const response = await petService.fetchOnePet(id);
      const onePet = response.data;
      setName(onePet.name);
      setAge(onePet.age);
      setSpecie(onePet.specie);
      setImage(onePet.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsDisabled(true);
      const formData = { name, age, specie, image, customerId };
      const response = await petService.updatePet(id, formData);
      if (response.status === 201) {
        navigate("/");
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
          <h1>Edit pet</h1>
          <form onSubmit={handleSubmit} className="form">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                value={age}
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
            </label>
            <label>
              Species:
              <select
                value={specie}
                onChange={(event) => {
                  setSpecie(event.target.value);
                }}
              >
                <option value={specie} defaultValue="">
                  {specie}
                </option>
                {specieArr.map((specie) => {
                  return (
                    <option value={specie} key={specie}>
                      {specie}
                    </option>
                  );
                })}
                {specieArr.map((specie) => (
                  <option key={specie} value={specie}>
                    {specie}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Image:
              <input
                type="file"
                accept="image/png, image/jpeg"
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

export default EditPetPage;
