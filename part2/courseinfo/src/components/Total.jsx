const Total = ({ total }) => {
  // reduce -> (acumulador, valorActual) => acumulador + valorActual, valorInicial
  const totalExercises = total.reduce((temp, part) => {
    // console.log("recorrido", temp, part);
    return temp + part.exercises;
  }, 0);

  return (
    <p>
      <strong>total of {totalExercises} exercises</strong>
    </p>
  );
};

export default Total;
