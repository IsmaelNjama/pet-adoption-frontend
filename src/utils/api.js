import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050",
});

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
