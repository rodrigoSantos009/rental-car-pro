import axios from "axios";
import { useAuth } from "../contexts/Auth/UseAuth";

export const api = axios.create({
  baseURL: 'http://localhost:3000'
})


api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const { logout } = useAuth();
    if(error.response.status === 401) {
      await logout()
      window.location.href = "/login"
    }
    return Promise.reject(error)
  }
)