import axios from "axios";

const token = localStorage.getItem("token");
const api = axios.create({
  baseURL: "https://api-vmodel-test.herokuapp.com",
  headers: {
    Authorization: token ? "Bearer " + token : "",
  },
});
export default api;
