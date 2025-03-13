import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
  // reduce -> (acumulador, valorActual) => acumulador + valorActual, valorInicial
  const totalExercises = parts.reduce((temp, part) => {
    console.log("recorrido", temp, part);
    return temp + part.exercises;
  }, 0);

  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <Total total={totalExercises} />
    </>
  );
};

export default Content;
