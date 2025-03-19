import axios from "axios";
const apiUrl = "http://localhost:3001/persons";

const getAllNumbers = async () => {
  return axios.get(apiUrl).then((res) => res.data);
};

const postNumber = async (newContact) => {
  return axios.post(apiUrl, newContact).then((res) => res.data);
};

const deletePerson = async (id) => {
  return axios
    .delete(`${apiUrl}/${id}`)
    .then((res) =>
      console.log(res.data.name + "' phone was deleted")
    );
};

export default {
  getAllNumbers,
  postNumber,
  deletePerson,
};
