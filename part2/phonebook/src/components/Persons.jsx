const Persons = ({ newPersons }) => {
  return (
    <>
      {newPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{" "}
        </p>
      ))}
    </>
  );
};

export default Persons;
