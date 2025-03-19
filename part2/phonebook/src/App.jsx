import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import numberService from "./services/contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    numberService.getAllContacts().then((personList) => setPersons(personList));
  }, []);
  // console.log(persons);

  const addContact = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
      // id: persons.length + 1,
    };
    // console.log(nameObject);

    const personExists = persons.find((p) => p.name === nameObject.name);
    // console.log(personExists);

    if (personExists) {

      if (window.confirm(`${personExists.name} is already added to phonebook, replace the old number with a new one?`)) {
        const newPerson = {
          ...personExists,
          number: newNumber,
        };
        // console.log(newPerson);

        numberService
          .updateContact(personExists.id, newPerson)
          .then((updatedContact) => {
            setPersons(
              persons.map((p) => (p.id !== personExists.id ? p : updatedContact))
            );
            setNewName("");
            setNewNumber("");
          });
      }
      return;
    }

    numberService.createContact(nameObject).then((newPerson) => {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleNameFilterChange = (event) => setNameFilter(event.target.value);

  // convertimos en minuscula para evitar problema de comparacion
  // usamos .includes() para saber que caracter incluye la cadena enviada por el evento
  const searchContacts = nameFilter ? persons.filter((person) =>
    person.name.toLowerCase().includes(nameFilter)
  ) : persons;
  // console.log(searchContacts);

  const deleteNumberClicked = (id) => {
    const personFinded = persons.find((p) => p.id === id);
    if (window.confirm(`Delete ${personFinded.name} ?`)) {
      numberService
        .deleteContact(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) =>
          console.log(
            `Not found ${personFinded.name} contact: ${error.message}`
          )
        );
    }
  };

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
      {searchContacts.map((person) => (
        <Persons
          key={person.id}
          person={person}
          deleteNumber={() => deleteNumberClicked(person.id)}
        />
      ))}
    </>
  );
};

export default App;
