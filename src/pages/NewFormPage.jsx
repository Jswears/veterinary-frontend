import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { petService } from "../services/pet.service";
import { userService } from "../services/user.service";

const NewFormPage = () => {
  const { user } = useContext(AuthContext);
  const [request, setRequest] = useState("");
  const [pets, setPets] = useState([]);
  const [petId, setPetId] = useState(null);
  const [customerId, setCustomerId] = useState(user._id);
  const navigate = useNavigate();

  const getPets = async () => {
    const response = await petService.fetchUserPets(customerId);
    console.log(response);
    setPets(response.data);
  };
  useEffect(() => {
    getPets();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await userService.postForm(request, customerId, petId);
      if (response.status === 201) {
        navigate("/your-forms");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="content-md">
          <form onSubmit={handleSubmit} className="form">
            <label>
              Request:
              <textarea
                required
                cols="30"
                rows="10"
                value={request}
                onChange={(event) => {
                  setRequest(event.target.value);
                }}
              ></textarea>
            </label>
            <label>Pet</label>
            <select
              onChange={(event) => {
                setPetId(event.target.value);
              }}
            >
              <option value="" selected>
                {" "}
              </option>
              {pets.map((pet) => {
                return (
                  <>
                    <option value={pet._id}> {pet.name} </option>
                  </>
                );
              })}
            </select>
            <button type="submit">Submit Form</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewFormPage;
