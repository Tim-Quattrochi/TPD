import axios from "axios";
import { API_URL } from "../configs/constants";
console.log(API_URL);

export default axios.create({
  baseURL: API_URL || "api/v1/",
});

export const axiosPrivate = axios.create({
  baseURL: API_URL || "api/v1/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
