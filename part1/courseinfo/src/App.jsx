import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

function App() {
  const course = "Half Stack application development";
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content exs1={part1.exercises} exs2={part2.exercises} exs3={part3.exercises}/>
      <Total exs1={part1.exercises} exs2={part2.exercises} exs3={part3.exercises} />
    </>
  );
}

export default App;
