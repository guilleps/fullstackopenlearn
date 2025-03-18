import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setPersons(res.data));
  }, []);

  // console.log(persons);

  const addContact = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    // console.log(nameObject);

    const personExists = persons.some(
      (person) => person.name === nameObject.name
    ); // return a boolean

    // console.log(personExists);

    if (personExists) {
      alert(newName + "is already added to phonebook");
      event.cancelable(); // evento cancelado
      return;
    }

    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleNameFilterChange = (event) => setNameFilter(event.target.value);

  // convertimos en minuscula para evitar problema de comparacion
  // usamos .includes() para saber que caracter incluye la cadena enviada por el evento
  const searchContacts = persons.filter((person) =>
    person.name.toLowerCase().includes(nameFilter)
  );

  // console.log(searchContacts);

  return (
    <>
      <h2>Phonebook</h2>
      <Filter
        nameFilter={nameFilter}
        handleNameFilterChange={handleNameFilterChange}
      />

      <h3>add a new</h3>
      <PersonForm
        addContact={addContact}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons newPersons={searchContacts} />
    </>
  );
};

export default App;
