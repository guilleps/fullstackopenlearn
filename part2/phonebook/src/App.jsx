import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

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
