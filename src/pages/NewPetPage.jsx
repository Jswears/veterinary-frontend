import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { petService } from "../services/pet.service";

const NewPetPage = () => {
  const specieArr = ["dog", "cat", "turtle", "rabbit"];

  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [specie, setSpecie] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState(user._id);
  const [isDisabled, setIsDisabled] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsDisabled(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("age", age);
      formData.append("specie", specie);
      formData.append("customerId", id);
      formData.append("image", image);

      const response = await petService.postNewPet(formData);
      if (response.status === 201) {
        navigate("/");
        setName("");
        setAge("");
        setSpecie("");
        setImage("");
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
          <h1>Make new pet</h1>
          <form onSubmit={handleSubmit} className="form">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
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
                type="text"
                onChange={(event) => {
                  setSpecie(event.target.value);
                }}
              >
                <option value="" selected></option>
                {specieArr.map((specie) => {
                  return <option value={specie}>{specie}</option>;
                })}
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
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPetPage;
