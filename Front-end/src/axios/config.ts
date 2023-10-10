import axios from "axios";

export const FormFetch = axios.create({
  baseURL: "localhos't:3001",
  headers: {
    "Content-Type": "application/json",
  },
});
