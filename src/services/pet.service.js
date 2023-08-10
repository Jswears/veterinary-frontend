import axios from "axios";
import env from "../config";

export const petService = {
  postNewPet: async (formData) => {
    try {
      const response = await axios.post(
        `${env.URL_BASE}/user/new-pet`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  fetchOnePet: async (id) => {
    try {
      const response = await axios.get(`${env.URL_BASE}/user/one-pet/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  deleteOnePet: async (id) => {
    try {
      const response = await axios.delete(`${env.URL_BASE}/user/one-pet/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  fetchUserPets: async (customerId) => {
    try {
      const response = await axios.get(
        `${env.URL_BASE}/user/your-pets/${customerId}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  fetchPets: async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/admin/all-pets`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  updatePet: async (id, formData) => {
    try {
      const response = await axios.put(
        `${env.URL_BASE}/user/one-pet/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  yourPets: async (id) => {
    try {
        const response = await axios.get(`${env.URL_BASE}/user/your-pets/${id}`);
        return response;
    } catch (error) {
        console.log(error)
    }
  }
};
