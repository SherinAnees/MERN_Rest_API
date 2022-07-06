//creating the HTTP req and senting the data back and setting any data any loacal storage
import axios from "axios";
const API_URL = "/api/users/";
//REgister user
const register = async (userData) => {
  const responce = await axios.post(API_URL, userData);
  if (responce.data) {
    localStorage.setItem("user", JSON.stringify(responce.data));
  }
  return responce.data;
};
//REgister user
const login = async (userData) => {
  const responce = await axios.post(API_URL + "login", userData);
  if (responce.data) {
    localStorage.setItem("user", JSON.stringify(responce.data));
  }
  return responce.data;
};
//Logout User
const logout = () => {
  localStorage.removeItem("user");
};

const authService = { register, logout, login };
export default authService;
