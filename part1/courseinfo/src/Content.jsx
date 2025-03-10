import Part from "./Part";

function Content({ exs1, exs2, exs3 }) {
  const part1 = "Fundamentals of React";
  const exercises1 = exs1;
  const part2 = "Using props to pass data";
  const exercises2 = exs2;
  const part3 = "State of a component";
  const exercises3 = exs3;

  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
}

export default Content;
