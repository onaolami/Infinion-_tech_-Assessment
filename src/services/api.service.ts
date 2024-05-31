import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://infinion-test-int-test.azurewebsites.net/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default apiInstance;
