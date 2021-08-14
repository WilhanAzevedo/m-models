import axios from "axios";

const token = localStorage.getItem('token')
const api = axios.create({
    baseURL: "https://appvmodel.herokuapp.com",
    headers: {
        Authorization: token ? 'Bearer ' + token : ''
    }
})
export default api;