import axios from "axios";
import { API_URL } from "../configs/constants";

export default axios.create({
  baseURL: API_URL || "https://tpd-server.onrender.com/",
});

export const axiosPrivate = axios.create({
  baseURL: API_URL || "https://tpd-server.onrender.com/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
