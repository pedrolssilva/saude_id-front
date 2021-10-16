import axios from "axios";
import StorageService from "../services/StorageService";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    access_token: StorageService.get('token')
  }
});

export default api;