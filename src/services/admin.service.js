import axios from "axios";
import env from "../config";

export const adminService = {
  addMed: async (medName, amount, description, price, image) => {
    try {
      const response = await axios.post(`${env.URL_BASE}/admin/medication`, {
        medName,
        amount,
        description,
        price,
        image,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  deleteMed: async (medicationId) => {
    try {
      const response = await axios.delete(
        `${env.URL_BASE}/admin/one-medication/${medicationId}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  fetchComplaints: async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/admin/all-complaints`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  complaintsRead: async (id) => {
    try {
      const response = await axios.patch(
        `${env.URL_BASE}/admin/complaint/${id}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  fetchCustomersData: async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/admin/all-customers`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  editMed: async (formData, medicationId) => {
    try {
      const response = await axios.put(
        `${env.URL_BASE}/admin/one-medication/${medicationId}`,
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
  fetchForm: async (formId) => {
    try {
      const response = await axios.get(`${env.URL_BASE}/admin/form/${formId}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  fetchForms: async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/admin/all-forms`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  readForm: async (id) => {
    try {
      const response = await axios.patch(`${env.URL_BASE}/admin/form/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  sendFeedback: async (diagnosis, terapy, tips, form) => {
    try {
      const response = await axios.post(`${env.URL_BASE}/admin/new-feedback`, {
        medicalHistory: diagnosis,
        terapy,
        tips,
        customerId: form.customerId,
        formId: form._id,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  fetchFeedbacks: async () => {
    try {
      const response = await axios.get(`${env.URL_BASE}/admin/all-feedback/`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  feedbackRead: async (id) => {
    try {
      const response = await axios.patch(
        `${env.URL_BASE}/admin/feedback/${id}`,
        {
          read: true,
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
