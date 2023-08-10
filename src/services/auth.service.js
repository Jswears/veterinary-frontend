import axios from "axios";
import env from "../config";

export const authService = {
  signUp: async (fullname, email, password) => {
    try {
      const response = await axios.post(`${env.URL_BASE}/auth/signup`, {
        fullname,
        email,
        password,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  logIn: async (email, password) => {
    try {
      const response = await axios.post(`${env.URL_BASE}/auth/login`, {
        email,
        password,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  verify: async(tokenInStorage) => {
try {
    const response = await axios(`${env.URL_BASE}/auth/verify`, {
        headers: { authorization: `Bearer ${tokenInStorage}` },
      });
      return response;
} catch (error) {
    console.log(error)
}
  }
};
