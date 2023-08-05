import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewFormPage = () => {
  const [request, setRequest] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5005/user/new-form", { request });
      if (response.status === 201) {
        navigate("/your-forms");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Form thingy:
          <textarea
            cols="30"
            rows="10"
            value={request}
            onChange={(event) => {
              setRequest(event.target.value);
            }}
          ></textarea>
        </label>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
};

export default NewFormPage;
