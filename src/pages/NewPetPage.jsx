import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const NewPetPage = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [specie, setSpecie] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState(user._id);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5005/user/new-pet", {
        name,
        age,
        specie,
        image,
        id,
      });
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Make new pet</h1>
      <form>
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
          <input
            type="text"
            value={specie}
            onChange={(event) => {
              setSpecie(event.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>
      </form>
    </>
  );
};

export default NewPetPage;
