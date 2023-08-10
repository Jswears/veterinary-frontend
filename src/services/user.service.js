import axios from "axios";
import env from "../config";

export const userService = {
  postForm: async (request, customerId, petId) => {
    try {
      const response = await axios.post(`${env.URL_BASE}/user/new-form`, {
        request,
        customerId,
        petId,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  yourForms: async(id) => {
    try {
      const response = await axios.get(`${env.URL_BASE}/user/your-forms/${id}`);
      return response;
    } catch (error) {
      console.log(error)
    }
  },
  feedBack: async (fbId) => {
    try {
      const response = await axios.get(`${env.URL_BASE}/user/feedback/${fbId}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  fetchFeedbacks: async (id) => {
    try {
      const response = await axios.get(`${env.URL_BASE}/user/feedbacks/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  postPayment: async () => {
    try {
      const response = await axios.post(
        `${env.URL_BASE}/user/medication/create-payment-intent`,
        {
          items: [{ id: "xl-tshirt" }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  postComplaint: async (complaint, customerId) => {
    try {
      const response = await axios.post(`${env.URL_BASE}/user/new-complaint`, {
        complaint,
        customerId,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  medDetails: async (medicationId) => {
    try {
      const response = await axios.get(
        `${env.URL_BASE}/user/medication/${medicationId}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  fetchAllMeds: async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/user/medication`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  fetchOneMed: async (medicationId) => {
    try {
      const response = await axios.get(
        `${env.URL_BASE}/user/medication/${medicationId}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
