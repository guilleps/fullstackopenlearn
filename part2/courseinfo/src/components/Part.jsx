const Part = ({ parts }) => {
  // console.log(parts);

  return (
    <>
      {parts.map((part) => (
        <li key={part.id}>
          {part.name} = {part.exercises}
        </li>
      ))}
    </>
  );
};

export default Part;
