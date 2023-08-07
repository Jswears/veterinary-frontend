import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate, useParams } from "react-router-dom";
import env from "../config";
export const EditPetPage = (props) => {
  const specieArr = ["dog", "cat", "turtle", "rabbit"];
  const { id } = useParams("id");
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [specie, setSpecie] = useState("");
  const [image, setImage] = useState("");
  const [customerId, setCustomerId] = useState(user._id);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

    const getPet=async ()=>{
        try {
            const response =await axios.get(`${env.URL_BASE}/user/one-pet/${id}`)
        
            const onePet = response.data;
            setName(onePet.name)
            setAge(onePet.age)
            setSpecie(onePet.specie)
            setImage(onePet.image)
           

        } catch (error) {
            console.log(error)
        }
      
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

    const response = await axios.put(
        `${env.URL_BASE}/user/one-pet/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );
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
                type="text"
                onChange={(event) => {
                  setSpecie(event.target.value);
                }}
              >
                <option value={specie} selected>
                  {specie}
                </option>
                {specieArr.map((specie) => {
                  return (
                    <>
                      <option value={specie}>{specie}</option>
                    </>
                  );
                })}
              </select>
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
