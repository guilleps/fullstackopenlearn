import axios from "axios";
const apiUrl = "http://localhost:3001/persons";

const getAllNumbers = async () => {
  return axios.get(apiUrl).then((res) => res.data);
};

const postNumber = async (newContact) => {
  return axios.post(apiUrl, newContact).then((res) => res.data);
};

export default {
    getAllNumbers,
    postNumber
};
