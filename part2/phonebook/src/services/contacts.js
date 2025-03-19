import axios from "axios";
const apiUrl = "http://localhost:3001/persons";

const getAllContacts = async () => {
  return axios.get(apiUrl)
    .then((res) => res.data);
};

const createContact = async (newContact) => {
  return axios.post(apiUrl, newContact)
    .then((res) => res.data);
};

const updateContact = async (id, newContact) => {
  return axios.put(`${apiUrl}/${id}`, newContact)
    .then((res) => res.data);
};

const deleteContact = async (id) => {
  return axios
    .delete(`${apiUrl}/${id}`)
    .then((res) => console.log(res.data.name + "' phone was deleted"));
};

export default {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
};
