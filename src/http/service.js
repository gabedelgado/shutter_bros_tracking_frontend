import axios from "axios";
import { url } from "./url";
import qs from "qs";

//GET order: route, headers
export const get = (route) => {
  const token = localStorage.getItem("token");

  return axios.get(`${url}${route}`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      ...(token && { Authorization: token }), //the token goes here
    },
  });
};

// //POST order: route, body, headers
export const post = (route, body) => {
  const token = localStorage.getItem("token");

  return axios.post(`${url}${route}`, qs.stringify(body), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      ...(token && { Authorization: token }), //the token goes here
    },
  });
};
