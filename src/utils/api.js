import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050",
});

const getHeaders = () => {
  return {
    headers: {
      Authorization: `${localStorage.getItem("USER")}`,
    },
  };
};

export const POST = (url, body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await api.post(url, body);
      resolve(resp);
    } catch (error) {
      reject(error);
    }
  });
};

export const GET = (url, params = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await api.get(url, { ...getHeaders(), params });
      resolve(resp.data);
    } catch (error) {
      reject(error);
    }
  });
};
