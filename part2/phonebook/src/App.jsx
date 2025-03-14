import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: '040-1234567' }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  // console.log(persons);

  const addContact = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber
    };

    // console.log(nameObject);

    const personExists = persons.some(
      (person) => person.name === nameObject.name
    );

    console.log(personExists);

    if (personExists) {
      alert(newName + "is already added to phonebook");
      event.cancelable(); // evento cancelado
    }

    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
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

      {persons.map((person) => (
        <p key={person.name}>{person.name} {person.number} </p>
      ))}
    </div>
  );
};

export default App;
