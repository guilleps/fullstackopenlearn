import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

function App() {
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content exs1={exercises1} exs2={exercises2} exs3={exercises3}/>
      <Total exs1={exercises1} exs2={exercises2} exs3={exercises3} />
    </>
  );
}

export default App;
