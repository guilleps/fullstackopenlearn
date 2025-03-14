import { useState } from "react";

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
  const [newPersons, setNewPersons] = useState([]);

  // console.log(persons);

  const addContact = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    // console.log(nameObject);

    const personExists = persons.some(
      (person) => person.name === nameObject.name
    );

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

  const handleNameFilterChange = (event) => {
    const nameFilter = event.target.value.toLowerCase();
    setNameFilter(nameFilter);
    const newPersons = persons.filter((person) =>
      // convertimos en minuscula para evitar problema de comparacion
      // usamos .includes() para saber que caracter incluye la cadena enviada por el evento
      person.name.toLowerCase().includes(nameFilter)
    );
    // console.log(newPersons);
    setNewPersons(newPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input value={nameFilter} onChange={handleNameFilterChange} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {(newPersons.length === 0 ? persons : newPersons).map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
        </p>
      ))}
    </div>
  );
};

export default App;
