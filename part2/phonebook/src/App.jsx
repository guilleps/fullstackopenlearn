import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // console.log(persons);

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
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
  };

  const handleNameChange = (event) => setNewName(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
