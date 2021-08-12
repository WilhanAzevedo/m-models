import axios from "axios";
const api = axios.create({
    baseURL: "https://appvmodel.herokuapp.com"
})
export default api;