import Axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

export const HeroServices = Axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
